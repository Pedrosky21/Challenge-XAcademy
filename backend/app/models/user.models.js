const { DataTypes, Model } = require("sequelize");

class Users extends Model {}

const users = (sequelize) => {
  return Users.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userName: {
        type: DataTypes.STRING,
        required: true,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        required: true
    }
  },
  {
    sequelize,
    modelName: "Users",
    tableName: "users",
    timestamps: false
  }
);
};

module.exports = users;
