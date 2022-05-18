const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const Comment = require('./comment.model')(sequelize, DataTypes);
const Post = require('./post.model')(sequelize, DataTypes);
const User = require('./user.model')(sequelize, DataTypes);

User.hasMany(Post, {
    foreignKey: "userId",
});
Post.belongsTo(User, {
    foreignKey: "userId",
});

module.exports = {
    sequelize,

    Comment,
    Post,
    User,
};
