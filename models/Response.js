class Response {
    message;
    body;
    result;


    static error(message){
        let res = new Response();
        
        res.message = message;
        res.result = false;
        return res;
    }
}

module.exports = Response;