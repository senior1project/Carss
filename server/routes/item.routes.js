/*const router = require('express').Router();
const itemController = require("../controllers/item.controller");
const {get,post,deletee,put} = require("../controllers/itemController.js");


/////Router CRUD with jwt/////////
router.get('/cars',authentication,get)
router.post('/cars',authentication,post)
router.delete('/cars/:id', authentication,deletee)
router.put('/cars/:id',authentication,put)
module.exports = router;*/
const router = require('express').Router();
const controller = require("../controllers/item.controller");
const {authentication} = require('../../server/Authentication/authentication.js') 




router.post('/addCar', controller.ADDONE);
router.delete('/delete/:id', controller.DELETEONE);
router.put('/update/:id', controller.UPDATEONE);
router.get('/getAll', controller.FINDALL);
router.get('/getOne/:brand', controller.FINDONE);
router.delete('/del/:id', controller.DELETEResrvation);
router.put('/updatee/:id', controller.UpdateReservation);
router.post('/addReserv', controller.Makereservation);



module.exports = router;
