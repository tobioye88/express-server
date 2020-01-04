class Response {
    message;
    body;
    success;

    constructor(body, success, message){
        this.body = body;
        this.message = message;
    }

    static success(body, message=""){
        let res = new Response();
        
        res.message = message;
        res.body = body;
        return res;
    }

    static error(message){
        let res = new Response();
        
        res.message = message;
        return res;
    }
}

module.exports = Response;