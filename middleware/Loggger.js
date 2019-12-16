
 //init middleware
const Logger = (req, res, next) => {
    //getting the URL and date
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl} ${new Date()}`);
    next();
 };
 
 module.exports = Logger;