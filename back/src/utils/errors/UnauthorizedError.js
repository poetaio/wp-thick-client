const httpStatusCodes = require('../httpStatusCodes');
const BaseError = require('./BaseError');


class UnauthorizedError extends BaseError {
    constructor(description) {
        super('Unauthorized error', httpStatusCodes.UNAUTHORIZED, description);
    }
}

module.exports = UnauthorizedError;
