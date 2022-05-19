const PHONE_NUMBER_REGEX = "^\\+380[0-9]{9}$";
const EMAIL_REGEX = "^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+[.][A-Za-z]+$";
const JWT_TOKEN_REGEX_STRING = '[\w-]*\.[\w-]*\.[\w-]*';
const AUTHORIZATION_BEARER_REGEX = new RegExp(`Bearer ${JWT_TOKEN_REGEX_STRING}`);
const DAY_DATE_REGEX = new RegExp('[0-9]{4}-(:?[0][0-9]|1[0-2])-(:?[0-2][0-9]|3[0-1])');

module.exports = {
    PHONE_NUMBER_REGEX,
    EMAIL_REGEX,
    AUTHORIZATION_BEARER_REGEX,
    DAY_DATE_REGEX,
};
