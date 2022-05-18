const {httpStatusCodes} = require("../utils");
const {authService} = require("../services");

class AuthController {
    async login(req, res, next) {
        try {
            const { username, password } = req.body;
            const token = await authService.login(username, password);

            return res.status(httpStatusCodes.OK).json({ token });
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new AuthController();
