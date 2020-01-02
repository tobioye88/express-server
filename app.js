const express = require('express');
const path = require('path');
const app = express();
const authenticate = require('./controllers/authenticate');
const logger = require('./middleware/Loggger');
const Response = require('./models/Response');
const apiAdvise = require('./middleware/ApiAdvise');
const fetch = require('node-fetch');

//middlewares init
app.use([logger, apiAdvise]);

// console.log(process.env);


app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/authenticate', authenticate);

app.get('/', (req, res )=> res.send('hello world'));

app.get('/callSecondServer', (req, res) => {
    // fetch('http://localhost:5000/').then(result => {
    //     result.json().then(r => {
    //         console.log(r);
    //         res.send(r);
    //     });
    // });
    (async () => {
        const response = await fetch('http://localhost:5000/');
        const body = await response.json();

        res.send(body);
    })();
});


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
});

let PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Application Started on port: ${PORT}`));
