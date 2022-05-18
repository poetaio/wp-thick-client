module.exports = (sequelize, DataTypes) => sequelize.define('user', {
    userId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        allowEmpty: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        allowEmpty: false,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        allowEmpty: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        allowEmpty: false,
    }
});
