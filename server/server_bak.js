const PORT = 4000

// Import Required Modules
const express = require("express")
const {Pool} = require ("pg");
const path = require('path');  // Since we are working in the root folder this is Required to construct the absolute file path

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

//old code
//import express from 'express';
//import pg from 'pg';
//import fetch from 'node-fetch';
//import path from 'path';


const app = express();
// Do I need different script to run queries?
// Perhaps if I want the app to search the database and show the proposal locations?
// const {runQueries} = require('../server/database.js')

app.use(express.json());

const cors = require("cors")

// Enable CORS for all routes
app.use(cors());   


const {geonameSurvey} = require('../dist/survey.js')
//const {geonameSurvey} from "../dist/survey.js"
// Serve static files from the "/var/www/html" directory 
//app.use(express.static('/var/www/html'))
app.use(express.static('index.html'))



// Allow us to load environment variables from the .env file
require("dotenv").config()

const pool = new Pool({ 
  host: process.env.PGHOST, 
  user: process.env.PGUSER, 
  password: process.env.PGPASSWORD, 
  database: process.env.PGDATABASE, 
  port: process.env.PGPORT, 
  ssl: { 
    rejectUnauthorized: false
  }})


// This line was throwing an error 
//const fetch = require("node-fetch")


// Added dynamic import to respond to error message, but this also throws an error
//const fetch = await import("node-fetch");

const request = require("request");
const { response } = require("express")

//console.log(" +++++++++ calling geonameSurvey() +++++++++++++++")
          
//geonameSurvey(json)

//console.log(" +++++++++ completed geonameSurvey() +++++++++++++++")


// Error saying formData is not defined
function buildInsertQuery(tableName, formData) {
  const columns = Object.keys(formData);
  const placeholders = columns.map(() => '$').join(', ');
  const values = columns.map(key => formData[key]);

  const sqlQuery = `INSERT INTO ${tableName} (` +
                  columns.join(', ') +
                  `) VALUES (${placeholders}) RETURNING *`;

  return { sqlQuery, values };
}


// Serve the index.html file on the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));  // __dirname is the directory name of the current module
});

// Serve the survey.html file on the /survey.html route
app.get('/survey.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../survey.html'));  // Adjust path to move up one directory
});

app.use('/dist', express.static(path.join(__dirname, '../dist')));



app.post('/submit-form', async (req, res) => {
  const { placeFormData= {
    gnisName: formData.gnisName, 
    gnisID: formData.gnisID,
    latitude:formData.latitude,
    longitude: formData.longitude,
    featureType: formData.featureType,
    featureAddress: formData.featureAddress,
    surveySystem: formData.surveySystem,
    featureDescription: formData.featureDescription 
  }, completerFormData = {
    completerName: formData.completerName, 
    completerEmail: formData.completerEmail,
    completerPhone: formData.completerPhone,
    longitude: formData.longitude,
    completerAddress: formData.completerAddress
  }, honoreeFormData = {
    honoreeName: formData.honoreeName, 
    honoreeDOB: formData.honoreeDOB,
    honoreeDOD: formData.honoreeDOD,
    longitude: formData.longitude,
    honoreeBio: formData.honoreeBio
  }, proposedPlaceFormData = {
    proposedName: formData.proposedName, 
    currentLocalName: formData.currentLocalName,
    nameDetails: formData.nameDetails,
    wilderness: formData.wilderness,
    honorNativeAmerican: formData.honorNativeAmerican,
    wildernessDescription: formData.wildernessDescription,
    localOpposition: formData.localOpposition,
    proposalID: formData.proposalID,
    commemorative: formData.commemorative,
    oppositionDetails: formData.oppositionDetails,
    additionalDetails: formData.additionalDetails,
    tribalInput : formData.tribalInput ,
    gnisID: formData.gnisID,
  }, proponentFormData = {
    proponentName: formData.proponentName, 
    proponentOrg: formData.proponentOrg,
    proponentEmail: formData.proponentEmail,
    proponentAddress: formData.proponentAddress,
    otherComplete: formData.otherComplete,
  } } = req.body;
 
  
  try {
    const client = await pool.connect();

    // Separate queries for each table (modify as needed):
    const placeQueryData = buildInsertQuery('place', placeFormData);
    const completerQueryData = buildInsertQuery('completer', { completerFormData });
    const honoreeQueryData = buildInsertQuery('honoree', { honoreeFormData });
    const proposedPlaceQueryData = buildInsertQuery('proposedPlace', { proposedPlaceFormData });
    const proponentQueryData = buildInsertQuery('proponent', { proponentFormData });

    // Execute queries using transactions (optional):
    await client.query('BEGIN'); // Start transaction

    const placeResult = await client.query(placeQueryData.sqlQuery, placeQueryData.values);
    const completerResult = await client.query(completerQueryData.sqlQuery, completerQueryData.values);
    const honoreeResult = await client.query(honoreeQueryData.sqlQuery, honoreeQueryData.values);
    const proposedPlaceResult = await client.query(proposedPlaceQueryData.sqlQuery, proposedPlaceQueryData.values);
    const proponentResult = await client.query(proponentQueryData.sqlQuery, proponentQueryData.values);

    await client.query('COMMIT'); // Commit transaction only if all queries succeed

    client.release();
    res.json({ message: 'Data inserted successfully!' });
  } catch (err) {
    console.error(err);

    // Rollback transaction if an error occurs:
    await client.query('ROLLBACK'); // Only if transaction was started

    client.release();
    res.status(500).json({ error: 'Error submitting form' });
  }
});

//  try {
//    const client = await pool.connect();
//    const result = await client.query(
//      'INSERT INTO place (gnisName, gnisID, latitude, longitude, featureType, featureAddress, surveySystem, featureDescription) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *', 
//      [formData.gnisName, formData.gnisID, formData.latitude, formData.longitude, formData.featureType, formData.featureAddress, formData.surveySystem, formData.featureDescription]);
//    client.release();
//    res.json(result.rows[0]);
//  } catch (err) {
//    console.error(err);
//    res.status(500).json({ error: 'Error submitting form' });
//  }
// });

// Middleware. allowedOrigins - list of URL's that can access the node/express server routes
app.use(function (req, res, next) {

  console.log("+++++++++ in app.use() +++++++++++ ")

  // +++++++++++++++++++++++++++++++++++++++++++++++
  // Elastic IP Address of EC2 Node/Express Server
  // +++++++++++++++++++++++++++++++++++++++++++++++
  const allowedOrigins = ['http://44.207.170.49']

  const origin = req.headers.origin

  console.log("fetch_server: origin: " + origin)
  //console.log(req)
  
  if (allowedOrigins.includes(origin)) {
    console.log("  **origin is included: " + origin)
    res.setHeader('Access-Control-Allow-Origin', origin)
  }
  else {
    console.log(" origin is NOT included: " + origin)
  }

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

// Hello Route
app.get('/hello', async (request, response) => {
  console.log("Hello to You! API route has been called")

  response.send({message: "Hello to You"})
  
})


// //troubleshooting to see if server is running
// app.get('/', (req, res) => {
//   res.send('Server is up and running!');
// });



app.listen(PORT, '0.0.0.0', function(error) {

  if (error) {
    console.error("Error while starting server" + error.stack)
  }
  else {
    console.log("Node Server is Listening on PORT: " + PORT)
  }
})