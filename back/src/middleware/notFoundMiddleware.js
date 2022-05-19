const {httpStatusCodes, NotFoundError} = require("../utils");
module.exports = (req, res) =>
    res.status(httpStatusCodes.NOT_FOUND).json({ error: new NotFoundError('Not Found')});
