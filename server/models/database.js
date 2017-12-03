const pg = require('pg')
const CONFIG = require('../constants/Config.js')

async function connect() {
    const client = new pg.Client(CONFIG)
    await client.connect()
    const query = await client.query(
        'CREATE TABLE profiles(id SERIAL PRIMARY KEY, username VARCHAR(16) not null, password VARCHAR(32) not null, email VARCHAR(32) not null);')
    await client.end()
}

connect()