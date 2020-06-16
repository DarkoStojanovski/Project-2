module.exports = function(sequelize, DataTypes) {
    var Userjoke = sequelize.define("Userjoke", {
      up_votes: {
        type: DataTypes.INTEGER,
        allowNull: true
       },
   
      down_votes: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      },
      userid: {
        type: DataTypes.INTEGER,
        references: {
          model: "Member",
          key: "id"
        } 
      },
    });
    Userjoke.associate = (models) => {
      // associations can be defined here
    Userjoke.belongsTo(models.Member, { foreignKey: 'userid', });
  };

  

  
    return Userjoke;
  };
  