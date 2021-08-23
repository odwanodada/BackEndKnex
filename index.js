const express = require('express');
const router = require('./routes');

const app = express();
app.use(express.json());
app.use(router);

app.listen(5000,() => console.log('server listening on port 5000'));