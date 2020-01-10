const response = require('../models/Response');

//init middleware
const ApiAdvise = (req, res, next) => {
    //getting the URL and date
    var oldSend = res.send;
    
    res.set("Content-Type", "appliation/json");
    res.send = function() {
        // console.log("-------------- Res Status", res.status());
        console.log("Api addvise");
        arguments[0] = JSON.stringify(new response(arguments[0]));
        oldSend.apply(res, arguments);
    }
    next();
};

module.exports = ApiAdvise;