const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const Comment = require('./comment.model')(sequelize, DataTypes);
const Post = require('./post.model')(sequelize, DataTypes);
const User = require('./user.model')(sequelize, DataTypes);

User.hasMany(Post, {
    foreignKey: "userId",
    as: "user",
});
Post.belongsTo(User, {
    foreignKey: "userId",
    as: "user",
});

module.exports = {
    sequelize,

    Comment,
    Post,
    User,
};
