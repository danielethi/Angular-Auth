const express = require("express");
const router = express.Router();
const userController = require("../constrollers/usercontroller");

router.get("/", userController.getAllUsers);
router.post("/register", userController.addUsers);
router.post("/login",userController.login)
router.get("/events",userController.getEvents)
router.get("/specialevent",userController.getSpecialEvents)

module.exports = router;
