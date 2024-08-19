const PORT = 8000

// Import Required Modules
const express = require("express")
const {Pool} = require("pg")

const app = express() 
const {runQueries} = require('../server/database.js')

// Serve static files from the "/var/www/html" directory 
app.use(express.static('/var/www/html'))

app.use(express.json());

const cors = require("cors")

// Allow us to load environment variables from the .env file
require("dotenv").config()

// *Need version 2.6.* of node-fetch library*
const fetch = require("node-fetch")

const request = require("request");
const { response } = require("express")

app.post('/submit-form', async (req, res) => {
  const { formData } = req.body;

  try {
    const client = await pool.connect();
    //To do: define db tables and columns for SQL statement here. 
    const result = await client.query('INSERT INTO place (gnisid, gnisname, ...) VALUES ($1, $2, ...) RETURNING *', [formData.value1, formData.value2]);
    client.release();
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error submitting form' });
  }
});

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



app.listen(PORT, '0.0.0.0', function(error) {

  if (error) {
    console.error("Error while starting server" + error.stack)
  }
  else {
    console.log("Node Server is Listening on PORT: " + PORT)
  }
})