const express= require('express');
const router = express.Router();
const UserControllers = require('../controllers/user');

router.post('/login',UserControllers.login);
router.post('/registrer',UserControllers.saveUser);


module.exports = router;