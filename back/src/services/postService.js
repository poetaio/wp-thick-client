const {Post} = require("../models");

class PostService {
    async create(userId, title, text) {
        const { postId } = await Post.create({ userId, title, text });
        return postId;
    }

    async getAllPaginated(limit, offset) {
        return await Post.findAndCountAll({ limit, offset });
    }

    async getAll() {
        return await Post.findAll();
    }

    async getOne(postId) {
        return await Post.findOne({ where: { postId } });
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
