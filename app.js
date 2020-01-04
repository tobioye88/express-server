const express = require('express');
const path = require('path');
const app = express();
const authenticate = require('./controllers/authenticate');
const logger = require('./middleware/Loggger');
const Response = require('./models/Response');
const apiAdvise = require('./middleware/ApiAdvise');
const Auth = require('./middleware/Auth');
const dotenv = require('dotenv');
const FileManager = require('./controllers/FileManager');

//load dotenv variables
dotenv.config({ path: './config/config.env'});

//middlewares init
app.use([logger, apiAdvise]);

// console.log(process.env);


app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/authenticate', authenticate);
app.use('/file', FileManager);

app.get('/', (req, res ) => res.set("Content-Type", 'application/json').send(process.env.PATHS));


//Set static folder
app.use(express.static(path.join(__dirname, 'public')))

//error 400
app.use((req, res)=>{
    res.status(404);
    res.send("Page not found");
});

//error 500
app.use((err, req, res, next)=>{
    console.log(err.stack)
    res.status(500);
    res.send(`500 Internal Server error: ${err.message}`);
})

let PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Application Started on port: ${PORT}`));
