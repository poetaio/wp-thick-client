const jwt = require('jsonwebtoken');
const {httpStatusCodes, UnauthorizedError} = require("../utils");
const bcrypt = require('bcrypt');
const userService = require("./userService");
const {User} = require("../models");

class AuthService {
    static async generateJwt(userId) {
        return jwt.sign(
            { userId },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );
    }

    static async hashPassword(password) {
        return await new Promise((resolve, reject) => {
            bcrypt.hash(password, Number.parseInt(process.env.SALT_ROUNDS), (err, hash) => {
                if (err) reject(err);
                resolve(hash);
            })
        });
    }

    // returns generated jwt
    async login(username, password) {
        // await User.create({ username: "marta", password: await AuthService.hashPassword(password), firstName: "Marta", lastName: "Martenko" });
        // await User.create({ username: "vasyl", password: await AuthService.hashPassword(password), firstName: "Vasyl", lastName: "Vasylenko" });
        const user = await userService.getOneByUsername(username);
        if (!user || !bcrypt.compareSync(password, user.password))
            throw new UnauthorizedError(`Username or password is incorrect`)

        return await AuthService.generateJwt(user.userId);
    }

    // token is checked in middleware, if got here, should update token
    async check() {
        throw new Error();
    }
}

module.exports = new AuthService();
