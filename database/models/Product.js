const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Product extends Model { }
Product.init({
    //Validacion del código
    codigo: {
        type: DataTypes.STRING,
        allowNull:  false,
        unique: {
            args: true,
            msg: "El codigo ya ha sido registrado anteriormente"
        },
        validate: {
            notNull: {
                msg: "El campo no puede ser nulo, por favor rellenelo"
            },
            isAlphanumeric: {
                args: true,
            }
        },
        len: {
            args: [3, 255],
            msg: "El codigo tiene que ser entre 3 y 255 caracteres"
        }
    },
    //Validacion de la descripcion
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
            args: true,
            msg: "La descripcion ya ha sido registrada anteriormente"
        },
        validate: {
            notNull: {
                msg: "El campo no puede ser nulo, por favor rellenelo"
            }
        },
        len: {
            args: [3, 255],
            msg: "La descripción tiene que ser entre 3 y 255 caracteres"
        }
    },
    //Validacion de la categoria
    categoria: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                args:true,
                msg: "El campo no puede ser nulo, por favor rellenelo"
            },
            isAlpha: {
                args: true,
            }
        },
        len: {
            args: [[3, 255]],
            msg: "La categoria tiene que ser entre 3 y 255 caracteres"
        }
    },
    //Validacion de precioCompra
    precioCompra: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate:{
            isFloat:{
                args: true,
                msg:"El valor debe ser numerico"
            }
        }

    },

    //Validacion de precioVenta
    precioVenta: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate:{
            isFloat:{
                args: true,
                msg:"El valor debe ser numerico"
            }
        }
    },
    //Validacion del inventario
    inventario: {
        type: DataTypes.INTEGER,
        defaultValue:0,
        validate:{
            isInt:{
                args:true,
                msg:"El valor debe ser un numero entero"
            }
        }
    }

}, {
    sequelize,
    modelname: "product"
});

module.exports = Product;