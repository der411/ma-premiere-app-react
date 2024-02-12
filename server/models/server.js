const express = require('express');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const app = express();
app.use(cors());
app.use(express.json());

const url = 'mongodb://localhost:27017';
const dbName = 'ma-premiere-bd-mongo';
let db;

MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
  if (err) return console.error(err);
  console.log('Connected to Database');
  db = client.db(dbName);
});

app.post('/add', (req, res) => {
  const collection = db.collection('ma-premiere-collection');
  collection.insertOne(req.body, (err, result) => {
    if (err) return console.error(err);
    res.send(result);
  });
});

app.listen(3001, () => {
  console.log('Listening on port 3001');
});