'use strict'
const User = require('../database/models/User');
const { encrypt, compare } = require('../helpers/handleBcrypt');
const { tokenSign } = require('../helpers/generateToken');

const controller = {
    saveUser: async (req, res)=>{
        try {
            const { email, password, name } = req.body;
                const passwordHash = await encrypt(password);
                const registrerUser = await User.create({
                    email,
                    name,
                    password:passwordHash
                })
                res.send({data:registrerUser});
          
           
            
        } catch (error) {
            res.send("Error al registrarse");
        }
       
    },

    login: async (req,res)=>{
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ email });

            // res.send({user});
           
            if(!user){
                res.statis(404),
                res.send({error:"Usuario no encontrado"})
            }

            const checkPassword = await compare(password,user.password);
            const tokenSession = await tokenSign(user);
            
            if(checkPassword){
                res.send({
                    data:user,
                    tokenSession
                });
                return
            }

            if(!checkPassword){
                res.status(409)
                res.send({
                   error:"Password incorrecto"
                });
                return
            }

        } catch (error) {
            res.send("Error al ingresar");
        }

    }


}

module.exports = controller;