const routes = require('express').Router()
const pg = require('pg')
const CONFIG = require('./constants/Config.js')
const crypto = require('crypto')

function createHash(password){
    return crypto.createHash('md5').update(password).digest('hex')
}

const UPDATE_FIELDS = new Set([
    "email",
    "first_name",
    "last_name",
    "telephone",
    "street_address",
    "city",
    "state",
    "zip_code",
])

routes.post('/profiles', (req, res) => {
    let {username, password, email} = req.body.fields
    password = createHash(password)

    let pool = new pg.Pool(CONFIG)
    pool.connect(async (error, client, done) => {
        if (error) {
            done()
            console.log(error)
            return res.status(500).json(error)
        }
        try{
            //insert new profile
            await client.query(
                'INSERT INTO profiles(username, password, email) values($1, $2, $3)',
                [username, password, email]
            )
        } catch (error) {
            return res.status(500).json(error)
        }
        const results = []
        try{
            //obtain list of all profiles for response
            const query = await client.query('SELECT username FROM profiles ORDER BY username ASC')
            for (row of query.rows) {
                results.push(row)
            }
        } catch (error) {
            return res.status(500).json(error)
        }
        done()
        res.json(results)
    })
    pool.end()
});

routes.put('/profiles/:username', (req, res) => {
    //obtain a list of all valid fields in the body
    const fields = Object.keys(req.body.fields).filter(key => UPDATE_FIELDS.has(key))
    //obtain the data from these valid fields
    let profileData = {}
    for (field of fields) {
        profileData[field] = req.body.fields[field]
    }

    const username = req.params.username

    let pool = new pg.Pool(CONFIG)
    pool.connect(async (error, client, done) => {
        if (error) {
            done()
            console.log(error)
            return res.status(500).json(error)
        }
        try{
            //query snippet for updating profile fields
            const fieldSetter = fields.map((field, index) => `${field}=$${index + 1}`).join(', ')
            //an array of values in the same order as in the query snippet
            const fieldValues = fields.map(field => profileData[field])
            fieldValues.push(username)
            //update profile
            const query = `UPDATE profiles SET ${fieldSetter} WHERE username=$${fields.length + 1}`
            console.log(query)
            await client.query(query, fieldValues)
        } catch (error) {
            return res.status(500).json(error)
        }
        let updated;
        try{
            //obtain updated profile for response
            const query = await client.query('SELECT * FROM profiles WHERE username=$1', [username])
            updated = query.rows[0]
        } catch (error) {
            return res.status(500).json(error)
        }
        done()
        res.json(updated)
    })
    pool.end()
})

module.exports =  routes