const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    height:{
      type: DataTypes.STRING,
    },
    weight:{
      type: DataTypes.STRING,
    },
    life:{
      type: DataTypes.STRING,
    },
    attack:{
      type: DataTypes.STRING,
    },
    defense:{
      type: DataTypes.STRING,
    },
    speed:{
      type: DataTypes.STRING,
    },
    img:{
      type: DataTypes.STRING,
      defaultValue: "https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg"
    },
    createdInDB:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    }
  },{
    timestamps: false
  });
};
