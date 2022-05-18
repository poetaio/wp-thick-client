const toDayDate = (date) => {
    // return `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`;
    return date.toLocaleString("en-ZA", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    }).replaceAll('/', '-');
};

const parseDate = (date, defaultValue) => {
    if (!date || !Date.parse(date))
        return defaultValue;

    return new Date(date);
};

module.exports = {
    toDayDate,
    parseDate,
};

