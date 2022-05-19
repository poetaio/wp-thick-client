const {postService} = require("../services");
const {httpStatusCodes} = require("../utils");

class PostController {
    async create(req, res, next) {
        try {
            const { user: { userId } } = req;
            const { title, text } = req.body;
            const postId = await postService.create(userId, title, text);
            return res.status(httpStatusCodes.OK).json({postId });
        } catch (e) {
            next(e);
        }
    }

    async getAllPaginated(req, res, next) {
        try {
            let {limit, page} = req.query;
            limit = Number.parseInt(limit) || 10;
            page = Number.parseInt(page) || 1;
            const offset = limit * (page - 1);
            const posts = await postService.getAllPaginated(limit, offset);

            return res.status(httpStatusCodes.OK).json(posts);
        } catch (e) {
            next(e);
        }
    }

    async getOne(req, res, next) {
        try {
            const { postId } = req.params;
            const post = await postService.getOne(postId);
            return res.status(httpStatusCodes.OK).json(post);
        } catch (e) {
            next(e);
        }
    }

    async update(req, res, next) {
        try {
            const { title, text } = req.body;
            const updated = await postService.update(title, text);
            return res.status(httpStatusCodes.OK).json({ updated });
        } catch (e) {
            next(e);
        }
    }

    async delete(req, res, next) {
        try {
            const { postId } = req.params;
            await postService.delete(postId);
            return res.status(httpStatusCodes.OK).end();
        } catch (e) {
            next(e);
        }
    }

    async getAll(req, res, next) {
        try {
            const posts = await postService.getAll();

            return res.status(httpStatusCodes.OK).json(posts);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new PostController();
