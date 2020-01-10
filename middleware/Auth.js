const Response = require('../models/Response');

const Auth = (req, res, next) => {
    if(req.get('Authorization')){
        let tokenBearer = req.get('Authorization');
        let token = tokenBearer.split(' ')[1];

        if(token){
            //add token validation here
        }
        next();
        return;
    }
    // res.local.
    res.status(403).send("Unauthorized");
}

module.exports = Auth;