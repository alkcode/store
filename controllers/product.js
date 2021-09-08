'use strict'
const Product = require('../database/models/Product');
const validator = require('validator');

const controller = {
 
    save: (req, res)=>{
        Product.create({
            codigo:req.body.codigo,
            descripcion:req.body.descripcion,
            categoria: req.body.categoria,
            precioCompra: req.body.precioCompra,
            precioVenta: req.body.precioVenta,
            inventario: req.body.inventario
        }).then(post=>{
            res.json(post);
        }).catch(error=>{
            res.json(error);
            throw error;
        });

    },

    getProducts:(req, res)=>{
        Product.findAll({ descripcion : "bebidas" }).then(posts=>{
            res.json(posts);
        });
    },

    getProduct:(req, res)=>{
        try {
            Product.findOne({
                where:{
                    id: req.params.id
                }}).then(post=>{
                    res.json(post);
            });
            
        } catch (error) {
            return res.status(200).send({
                status:'error',
                message:'No hay datos'
            });
            
        }

    },

    update: (req, res)=>{
        Product.update({
            codigo:req.body.codigo,
            descripcion:req.body.descripcion,
            categoria: req.body.categoria,
            precioCompra: req.body.precioCompra,
            precioVenta: req.body.precioVenta,
            inventario: req.body.inventario
        },{
            where:{
                id: req.body.id
            }
        }).then(result=>{
            res.json(result);
        });
    },

    delete: (req, res)=>{
        Product.destroy({
            where:{
                codigo: req.params.id
            }
        }).then(result=>{
            res.json(result);
        });
    }
}

module.exports = controller;