module.exports = (sequelize, DataTypes) => {
  const Itinerary = sequelize.define("Itinerary", {
    budget: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Itinerary;
};
