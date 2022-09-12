const express = require('express');
const db = require('./config/connection');

const app = express();
const port = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());