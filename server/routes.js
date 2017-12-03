const routes = require('express').Router()
const pg = require('pg')
const CONFIG = require('./constants/Config.js')
const crypto = require('crypto')

function createHash(password){
    return crypto.createHash('md5').update(password).digest('hex')
}

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
            const query = await client.query('SELECT username, email FROM profiles ORDER BY id ASC')
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

module.exports =  routes