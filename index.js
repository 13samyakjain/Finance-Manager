const express = require('express')
const app = express();
const cros = require('cros')
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const MainRoute = require('./backend/app')

app.use(cros());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/',MainRoute)

mongoose.connect(process.env.MONGO_KEY, { useNewUrlParser: true }).then(ele => {
    app.listen(PORT, () => {
      console.log(`Listening on Port ${PORT}`)
    })
  })