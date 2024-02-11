const router = require("express").Router();
const controller = require("../controllers/index");
const { authenticateToken, uploadPhoto } = require("../middlewear/token");

router.put("/upload/:id", uploadPhoto.array("images", 10), controller.uploadImg);
router.post("/signup", controller.signup);
router.post("/signin", controller.signin);
router.post("/addCar", controller.ADDONE);
router.delete("/delete/:id", controller.DELETEONE);
router.put("/update/:id", controller.UPDATEONE);
router.get("/getAll", controller.FINDALL);
router.get("/getOne/:brand", controller.FINDONE);
router.get("/getId/:id", controller.FINDID);
router.post("/rent", controller.RENTONE); // for car rent input ={start_date : ,end_date : ,total : (days*day_price)}
router.get("/rents", controller.RENTS); // to get all cars  rents

module.exports = router;
