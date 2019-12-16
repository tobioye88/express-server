const express = require('express');
const path = require('path');
const app = express();
const authenticate = require('./controllers/authenticate');
const logger = require('./middleware/Loggger');
const Response = require('./models/Response');

//logger init
app.use(logger);

app.use('/authenticate', authenticate);

app.get('/', (req, res )=> res.send('hello world'));


//Set static folder
app.use(express.static(path.join(__dirname, 'public')))

//error 400
app.use((req, res)=>{
    res.status(404);
    res.json(Response.error("Page not found"));
});

//error 500
app.use((err, req, res, next)=>{
    console.log(err.stack)
    res.status(500);
    res.json(Response.error(`500 Internal Server error: ${err.message}`));
})

app.listen(3000);
