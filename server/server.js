require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const cors = require('cors');
const port = process.env.PORT;
const connectionString = process.env.CONNECTIONSTRING;

const app = express();
app.use( bodyParser.json() );
app.use( cors() );

massive( connectionString )
    .then( db => {
        app.set( 'db', db );
        app.listen( port, () => { console.log('Listening on port: {$port}.')})
    });

module.exports = app;

