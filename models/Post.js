const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Post extends Model { }

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        post_content: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "user",
                key: "id",
            },
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: "post",
    }
);

module.exports = Post;
72
models / User.js
@@ -0, 0 + 1, 72 @@
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");

class User extends Model {
    checkPassword(loginPass) {
        return bcrypt.compareSync(loginPass, this.password);
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        github: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4],
            },
        },
    },

    {
        hooks: {
            async beforeCreate(newUserData) {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },

            async beforeUpdate(updatedUserData) {
                updatedUserData.password = await bcrypt.hash(
                    updatedUserData.password,
                    10
                );
                return updatedUserData;
            },
        },

        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "user",
    }
);

module.exports = User;