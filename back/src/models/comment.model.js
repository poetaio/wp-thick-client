module.exports = (sequelize, DataTypes) => sequelize.define('comment', {
    commentId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    }
});
