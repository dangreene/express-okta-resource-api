const express = require('express');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));

app.use('/', (req, res) => {
    res.send('hello.')
});

app.listen(process.env.PORT || 3001, () => console.log('started.'))
