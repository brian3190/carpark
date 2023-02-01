const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.get('/', (req, res) => {
    
})
app.set('port', (process.env.PORT || 8081 ))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())