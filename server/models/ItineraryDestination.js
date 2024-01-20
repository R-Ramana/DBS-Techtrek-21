module.exports = (sequelize, DataTypes) => {
    const ItineraryDestination = sequelize.define("itineraryDestination", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      itinerary_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: 'itinerary', 
          key: 'id'
        }
      },
      destination_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'destination', 
            key: 'id'
        }
      }
    }, {
    });
  
  
    return ItineraryDestination;
  };
  