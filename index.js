const express = require('express');

const PORT = process.env.PORT || 4200;
const app = express();

app.use(express.static('public'));

app.use(express.json);

app.listen(PORT, () => {
  try {
    console.log(`DING! Serving up on PORT #${PORT} http://localhost:4200/`);
  } catch(err) {
    console.error('Something went wrong trying to start up the server: ', err);
  }
});