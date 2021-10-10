const express = require('express');

const app = express();

const PORT = 3000

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(PORT, () => {
  console.log('server started on port ' + PORT);
});