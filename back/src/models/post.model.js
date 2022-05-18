module.exports = (sequelize, DataTypes) => sequelize.define('post', {
    postId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        allowEmpty: false,
    },
    text: {
        type: DataTypes.STRING(2000),
        allowNull: false,
        allowEmpty: false,
    },
});
