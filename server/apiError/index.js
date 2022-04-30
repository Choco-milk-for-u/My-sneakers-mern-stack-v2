class ApiError extends Error {
    status;
    message;

    constructor(status, message) {
        super(message);
        
        this.message = message;
        this.status = status;
    }

    static BadRequest(message) {
        return new ApiError(400, message);
    }
    static Forbidden(message) {
        return new ApiError(403, message);
    }
    static NotFound(message) {
        return new ApiError(404, message);
    }
}

module.exports = ApiError;