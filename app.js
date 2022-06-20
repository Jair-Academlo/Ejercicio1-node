const express = require('express');
const colors = require('colors');
const { db } = require('./utils/database');
const { registrationRouter } = require('./routers/router.registration');

const app = express();

app.use(express.json());

app.use('/api/v1/registrations', registrationRouter);

db.authenticate()
  .then(() => {
    console.log('datos autenticados, perfecto Jair'.magenta);
  })
  .catch(error => console.log(error));

db.sync()
  .then(() => {
    console.log('datos sincronizados, very good Jair'.magenta);
  })
  .catch(error => console.log(error));

const PORT = 4500;

app.listen(PORT, () => {
  console.log(`The Port ${PORT} is executing`.cyan);
});
