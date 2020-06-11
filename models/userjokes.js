module.exports = function(sequelize, DataTypes) {
    var userjoke = sequelize.define("userjoke", {
      upvotes: {
        type: DataTypes.INTEGER,
        allowNull: true,
        
      },
      downvotes: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      }
    });
  

  
    return userjoke;
  };
  