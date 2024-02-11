const express = require("express");;
const Routes = require('./routes/Routes');
const db = require('./databse-pg/index');
const cors = require('cors')
const { authenticateToken } =require('./middlewear/token')
const app = express();
const PORT = 3000

app.use(cors())
app.use(express.json());
app.use('/',Routes);





app.listen(PORT, function () {
  console.log("listening on port 3000!");
});












