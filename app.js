require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT;
const helmet = require('helmet');
const apiRouter = require('./routes/api');
const webRouter = require('./routes/web');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'resources/views'));
app.use(helmet());
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'resources/views'));
app.use(helmet());
app.use(express.urlencoded({extended: true}));
app.use('/', webRouter);
app.use('/api', apiRouter);
app.listen(port, () => {
console.log(`Listening at http://localhost:${port}`);
});