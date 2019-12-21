const response = require('../models/Response');

//init middleware
const ApiAdvise = (req, res, next) => {
    //getting the URL and date
    var oldSend = res.send;

    res.send = function () {
        console.log("Api advise");
        arguments[0] = JSON.stringify(new response(arguments[0]));
        oldSend.apply(res, arguments);
    }
    next();
};

module.exports = ApiAdvise;