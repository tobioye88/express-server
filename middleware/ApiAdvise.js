const Response = require('../models/Response');

//init middleware
const ApiAdvise = (req, res, next) => {
    //getting the URL and date
    // res.set("Content-Type", 'application/json');
    var oldSend = res.send;

    res.send = function () {
        // console.log("Api advise");
        arguments[0] = JSON.stringify(new Response(arguments[0]));
        oldSend.apply(res, arguments);
    }
    next();
};

module.exports = ApiAdvise;