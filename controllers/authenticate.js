const express = require('express')
const authenticate = express.Router();
const response = require('../models/Response');

authenticate.post('/', (req, res) => {
    console.log("Attempting to authenticate");
    const username = req.body.username;
    const password = req.body.password;

    let token = 'token';

    res
        .status(202)
        .cookie('access_token', 'Bearer ' + token, {
            expires: new Date(Date.now() + 8 * 3600000) // cookie will be removed after 8 hours
        });

    if (!username || !password) {
        res.status(401);
        return res.json(response.error("Username or password is invalid"));
    }
    res.set("Content-Type", "appliation/json");
    res.send(req.body.username);


});


module.exports = authenticate;