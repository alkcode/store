const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class User extends Model {}

User.init({
    name:{
        type:DataTypes.STRING,
        allowNull: false,
        validate:{
            notNull:{
                msg: "El campo no puede ser nulo, por favor rellenelo"
            },
            isAlphanumeric: {
                args: true,
            }
        }
    },
    email:{
        type: DataTypes.STRING,
        allowNull:false,
        unique:{
            args:true,
            msg:"EL correo ya existe"
        },
        validate:{
            notNull: {
                msg: "El campo no puede ser nulo, por favor rellenelo"
            }
        }
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            notNull: {
                args:true,
                msg: "El campo no puede ser nulo, por favor rellenelo"
            }
      }
    }
},{
    sequelize,
    modelName:"user"
});
module.exports = User;