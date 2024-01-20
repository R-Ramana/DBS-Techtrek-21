module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        salt: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
    User.associate = (models) => {
        User.hasMany(models.Itinerary, {
            onDelete: "cascade", //if we delete a post, it will delete all the comments related to that post
        });
    };
    return User;
};