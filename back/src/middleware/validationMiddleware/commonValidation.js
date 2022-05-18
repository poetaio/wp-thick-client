const {check, query} = require('express-validator')

const pageLimit = [
    query('page').optional().isNumeric(),
    query('limit').optional().isNumeric()
];

module.exports = {
    pageLimit
}
