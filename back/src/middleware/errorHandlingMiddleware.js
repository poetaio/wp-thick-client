// handles all errors sent by next(err)
const { httpStatusCodes, BaseError } = require("../utils");

module.exports = (error, req, res, next) => {
    if (error instanceof BaseError) {
        return res.status(error.statusCode).json({ errors: [error] });
    }

    console.log(error);
    return res.status(httpStatusCodes.INTERNAL_SERVER).json({ error });
};
