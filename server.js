const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

require('./server/config/mongoose')();
const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './public/dist/public')));

require('./server/config/routes.js')(app);
app.listen(8000, function(){
    console.log("Server is running!");
})