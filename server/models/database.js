const pg = require('pg')
const CONFIG = require('../constants/Config.js')

async function connect() {
    const client = new pg.Client(CONFIG)
    await client.connect()
    const query = await client.query(
        `CREATE TABLE profiles(
            username VARCHAR(16) PRIMARY KEY,
            password VARCHAR(32) NOT NULL,
            email VARCHAR(32) NOT NULL,
            first_name VARCHAR(32),
            last_name VARCHAR(32),
            telephone VARCHAR(16),
            street_address TEXT,
            city VARCHAR(32),
            state VARCHAR(16),
            zip_code CHAR(5)
        )`)
    await client.end()
}

connect()