const {check, body, query} = require('express-validator');
const {DAY_DATE_REGEX} = require("./regex");

const stringNotNullOrEmpty = field => check(field)
    .exists()
    .withMessage(`${field} must be provided`)
    .notEmpty()
    .withMessage(`${field} must not be empty`);

const queryDayDate = fieldName => query(fieldName)
    .matches(DAY_DATE_REGEX);

module.exports = {
    stringNotNullOrEmpty,
    queryDayDate,
};
