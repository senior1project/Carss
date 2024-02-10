const express = require("express");
//const itemRoutes = require('./routes/item.routes')
const bodyParser = require('body-parser');
//const { Sequelize, DataTypes } = require('sequelize');
const jwt = require('jsonwebtoken');
const cors= require("cors")
const secretKey = process.env.JWT_SECRET || 123456789 ;


const app = express();
const PORT =3000

app.use(cors())
app.use(express.json());
app.use(bodyParser.json())


//app.use("/", itemRoutes);

app.listen(PORT, function () {
  console.log("listening on port 3000!")
});