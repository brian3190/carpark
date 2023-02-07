const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index', {
        content: '...'
    });
});
app.use(express.static('public'));
app.set('port', (process.env.PORT || 8081 ))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())

app.listen(app.get('port'), () => {
    console.info('Express listening on port ', app.get('port'))
});