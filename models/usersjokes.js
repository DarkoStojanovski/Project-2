module.exports = function(sequelize, DataTypes) {
    var Userjoke = sequelize.define("Userjoke", {
      upvotes: {
        type: DataTypes.INTEGER,
        allowNull: true
       },
   
      downvotes: {
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
  