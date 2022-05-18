const errorHandlingMiddleware = require('./errorHandlingMiddleware');
const authMiddleware = require('./authMiddleware');
const notFoundMiddleware = require('./notFoundMiddleware');
const validation = require('./validationMiddleware')

module.exports = {
    errorHandlingMiddleware,
    authMiddleware,
    notFoundMiddleware,
    validation
};
