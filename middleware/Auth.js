const config = require('../config/config.dev');
const response = require('../models/Response')

const Auth = (req, res, next) => {

    //get get url and check if it's in the permitted routes
    console.log(req.originalUrl);
    const originalUrl = req.originalUrl;
    const result = config.allowedRoutes.find(route => route == originalUrl);

    //only allow user that does not have token
    if(result){
        next();
        return;
    }

    //user with valid token can visit any route
    //todo:
    
    res.status(401).send(response.error("Unauthorized"));
}

module.exports = Auth;