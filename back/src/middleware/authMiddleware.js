const jwt = require('jsonwebtoken');
const {httpStatusCodes, NotFoundError} = require("../utils");
const {AUTHORIZATION_BEARER_REGEX} = require("../utils/regex");


module.exports = (...roles) => {
    return (req, res, next) => {
        // get from headers
        const tokenHeader = req.header('Authorization');

        if (!AUTHORIZATION_BEARER_REGEX.test(tokenHeader))
            return res.status(httpStatusCodes.NOT_FOUND).json({ error: new NotFoundError('Not Found authorization token header')});

        // get token from header
        const token = tokenHeader.split(' ')[1];

        let user;
        try {
            // pull id and role
             user = jwt.verify(token, process.env.JWT_SECRET);
        } catch (e) {
            return res.status(httpStatusCodes.NOT_FOUND).json({ error: new NotFoundError('Not Found JWT token')});
        }

        // check if role matches
        // if (!roles.includes(user.role)) {
        //     return res.status(httpStatusCodes.NOT_FOUND).json({ error: new NotFoundError('Not Authorized!')});
        // }

        req.user = user;
        return next();
    };
};
