const express= require('express');
const router = express.Router();
const ProductControllers = require('../controllers/product');
// const Product = require('../database/models/Product');


router.get('/', (req, res) =>{
    res.send("Hola");
});

//CREATE
router.post('/productos', ProductControllers.save);
    //  (req,res)=>{
    // Product.create({
    //     codigo:req.body.codigo,
    //     descripcion:req.body.descripcion,
    //     categoria: req.body.categoria,
    //     precioCompra: req.body.precioCompra,
    //     precioVenta: req.body.precioVenta,
    //     inventario: req.body.inventario
    // }).then(post=>{
    //     res.json(post);
    // }).catch(error=>{
    //     res.json(error);
    //     throw error;
    // });

// });


//READ

router.get('/productos', ProductControllers.getProducts);
//  (req,res)=>{
//     Product.findAll().then(posts=>{
//         res.json(posts);
//     });
// });

// router.get('/:id',(req, res)=>{
//     Product.findByPk(req.params.id).then(post=>{
//         res.json(post);
//     });
// });

router.get('/producto/:id',ProductControllers.getProduct);
// (req,res)=>{
//     Product.findOne({
//         where:{
//             codigo: req.params.id
//         }}).then(post=>{
//             res.json(post);
//         });
// });

//UPDATE

router.patch('/producto/:id',  ProductControllers.update);
// (req,res)=>{
//     Product.update({
//         codigo:req.body.codigo,
//         descripcion:req.body.descripcion,
//         categoria: req.body.categoria,
//         precioCompra: req.body.precioCompra,
//         precioVenta: req.body.precioVenta,
//         inventario: req.body.inventario
//     },{
//         where:{
//             codigo: req.body.codigo
//         }
//     }).then(result=>{
//         res.json(result);
//     });
// });

//DELETE
router.delete('productos/:id',ProductControllers.delete);
//  (req,res)=>{
//     Product.destroy({
//         where:{
//             codigo: req.params.id
//         }
//     }).then(result=>{
//         res.json(result);
//     });
// });

module.exports = router;