module.exports = (sequelize, DataTypes) => {
    const Destination = sequelize.define("destination", {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      country_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: 'Country', // The table name should match exactly as it is in the database.
          key: 'id'
        }
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      cost: {
        type: DataTypes.FLOAT,
        allowNull: true // Assuming cost can be nullable
      },
      notes: {
        type: DataTypes.TEXT,
        allowNull: true // Assuming notes can be nullable
      }
    }, {
    
    });

    return Destination;
};
