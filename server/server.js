const PORT = 4000;

// Import Required Modules
const express = require("express");
const { Pool } = require("pg");
const path = require('path');  // Required to construct the absolute file path for serving static files

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const app = express();

app.use(express.json());  // Enable JSON parsing for incoming requests

const cors = require("cors");

// Enable CORS for all routes
app.use(cors());

// Static file serving correction
// Removed `app.use(express.static('index.html'))` because express.static is used for directories, not individual files.
// Static files such as index.html are served directly using specific routes below.

app.use('/dist', express.static(path.join(__dirname, '../dist')));  // Serve static files from the dist directory

// Allow us to load environment variables from the .env file
require("dotenv").config();

const pool = new Pool({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  port: process.env.PGPORT,
  ssl: {
    rejectUnauthorized: false
  }
});

// Serve the index.html file on the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));  // Corrected the path to index.html
});

// Serve the survey.html file on the /survey.html route
app.get('/survey.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../survey.html'));  // Corrected the path to survey.html
});

app.post('/submit-form', async (req, res) => {
  // Destructure the request body to get form data
  const {
    placeFormData = {
      gnisName: formData.gnisName,
      gnisID: formData.gnisID,
      latitude: formData.latitude,
      longitude: formData.longitude,
      featureType: formData.featureType,
      featureAddress: formData.featureAddress,
      surveySystem: formData.surveySystem,
      featureDescription: formData.featureDescription
    },
    completerFormData = {
      completerName: formData.completerName,
      completerEmail: formData.completerEmail,
      completerPhone: formData.completerPhone,
      longitude: formData.longitude,
      completerAddress: formData.completerAddress
    },
    honoreeFormData = {
      honoreeName: formData.honoreeName,
      honoreeDOB: formData.honoreeDOB,
      honoreeDOD: formData.honoreeDOD,
      longitude: formData.longitude,
      honoreeBio: formData.honoreeBio
    },
    proposedPlaceFormData = {
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
      tribalInput: formData.tribalInput,
      gnisID: formData.gnisID,
    },
    proponentFormData = {
      proponentName: formData.proponentName,
      proponentOrg: formData.proponentOrg,
      proponentEmail: formData.proponentEmail,
      proponentAddress: formData.proponentAddress,
      otherComplete: formData.otherComplete,
    }
  } = req.body;

  try {
    const client = await pool.connect();

    // Separate queries for each table (modify as needed):
    const placeQueryData = buildInsertQuery('place', placeFormData);
    const completerQueryData = buildInsertQuery('completer', completerFormData);  // Removed unnecessary object wrapping
    const honoreeQueryData = buildInsertQuery('honoree', honoreeFormData);  // Removed unnecessary object wrapping
    const proposedPlaceQueryData = buildInsertQuery('proposedPlace', proposedPlaceFormData);  // Removed unnecessary object wrapping
    const proponentQueryData = buildInsertQuery('proponent', proponentFormData);  // Removed unnecessary object wrapping

    // Execute queries using transactions (optional):
    await client.query('BEGIN');  // Start transaction

    // Execute queries
    const placeResult = await client.query(placeQueryData.sqlQuery, placeQueryData.values);
    const completerResult = await client.query(completerQueryData.sqlQuery, completerQueryData.values);
    const honoreeResult = await client.query(honoreeQueryData.sqlQuery, honoreeQueryData.values);
    const proposedPlaceResult = await client.query(proposedPlaceQueryData.sqlQuery, proposedPlaceQueryData.values);
    const proponentResult = await client.query(proponentQueryData.sqlQuery, proponentQueryData.values);

    await client.query('COMMIT');  // Commit transaction only if all queries succeed

    client.release();
    res.json({ message: 'Data inserted successfully!' });
  } catch (err) {
    console.error(err);

    // Rollback transaction if an error occurs:
    await client.query('ROLLBACK');  // Only if transaction was started

    client.release();
    res.status(500).json({ error: 'Error submitting form' });
  }
});

// Middleware to handle CORS and allowed origins
app.use(function (req, res, next) {

  console.log("+++++++++ in app.use() +++++++++++ ")

  // +++++++++++++++++++++++++++++++++++++++++++++++
  // Elastic IP Address of EC2 Node/Express Server
  // +++++++++++++++++++++++++++++++++++++++++++++++
  const allowedOrigins = ['http://44.207.170.49'];

  const origin = req.headers.origin;

  console.log("fetch_server: origin: " + origin);

  if (allowedOrigins.includes(origin)) {
    console.log("  **origin is included: " + origin);
    res.setHeader('Access-Control-Allow-Origin', origin);
  } else {
    console.log(" origin is NOT included: " + origin);
  }

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g., in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

// Simple Hello Route
app.get('/hello', async (request, response) => {
  console.log("Hello to You! API route has been called");

  response.send({ message: "Hello to You" });
});

app.listen(PORT, '0.0.0.0', function (error) {

  if (error) {
    console.error("Error while starting server" + error.stack);
  } else {
    console.log("Node Server is Listening on PORT: " + PORT);
  }
});
