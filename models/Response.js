class Response {
    message;
    body;
    success;

    constructor(body, success, message){
        this.body = body;
        this.success = success || true;
        this.message = message;
    }

    static success(body, message=""){
        let res = new Response();
        
        res.message = message;
        res.success = true;
        res.body = body;
        return res;
    }

    static error(message){
        let res = new Response();
        
        res.message = message;
        res.success = false;
        return res;
    }
}

module.exports = Response;