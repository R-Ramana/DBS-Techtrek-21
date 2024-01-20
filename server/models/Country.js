module.exports = (sequelize, DataTypes) => {
    const Country = sequelize.define("country", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, // Assuming 'id' is an auto-incrementing primary key
        allowNull: false
      },
      name: {
        type: DataTypes.STRING(50), // Reflecting the size limit from the ERD
        allowNull: false
      }
    }, {
    });
  
    return Country;
  };
  