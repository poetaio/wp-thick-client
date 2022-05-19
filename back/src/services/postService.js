const {Post} = require("../models");

class PostService {
    async create(userId, title, text) {
        const { postId } = await Post.create({ userId, title, text });
        return postId;
    }

    async getAllPaginated(limit, offset) {
        const { count, rows } = await Post.findAndCountAll({ limit, offset });
        return { count, posts: rows };
    }

    async getAll() {
        return await Post.findAll();
    }

    async getOne(postId) {
        return await Post.findOne({
            where: { postId },
            attributes: ['postId', 'title', 'text', "createdAt"],
            include: {
                association: "user",
                attributes: ['userId', 'username', 'firstName', 'lastName']
            },
        });
    }

    async update(postId, title, text) {
        const [updNum] = await Post.update({ title, text}, { where: { postId } });
        return !!updNum;
    }

    async delete(postId) {
        return await Post.destroy({ where: { postId } });
    }
}

module.exports = new PostService();
