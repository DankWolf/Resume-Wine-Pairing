const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config();
const connectDB = require('./config/db')
const PORT = process.env.PORT || 3000
const cors = require('cors');

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors());


app.use('/api/wine', require('./routes/wineRoutes'))




app.use((err, req, res, next) => {
    const defaultErr = {
      log: "Express error handler caught unknown middleware error",
      status: 400,
      message: { err: "An error occurred" },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));