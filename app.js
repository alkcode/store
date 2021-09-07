const express = require('express')
const app = express()
const sequelize = require('./database/db');
const Product = require('./database/models/Product');
const PORT = process.env.PORT || 3000;

//Middleware

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/', (req, res) => {

    Product.findAll().then(products=>{
        res.json(products);
    });
});

app.use('/api', require('./routes/products'));
app.use('/api', require('./routes/auth'));

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
    //Conectarse a mysql
    sequelize.sync({ force: false}).then(()=>{
        console.log("Se ha conectado a la DB");
    }).catch(error=>{
        console.log("Error");
    })
});
