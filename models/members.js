module.exports = function(sequelize, DataTypes) {
    var Member = sequelize.define("Member", {
        name: {
        type: DataTypes.TEXT,
        allowNull: true,
        
      },
      email: {
        type: DataTypes.TEXT,
        allowNull: true,
        
      },
      status: {
        type: DataTypes.TEXT,
        allowNull: true,
        
      }
      
    });
  

  
    return Member;
  };
  