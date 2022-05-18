const {User} = require("../models");

class UserService {
    async getOneByUsername(username) {
        return await User.findOne({ where: { username } });
    }
}

module.exports = new UserService();
