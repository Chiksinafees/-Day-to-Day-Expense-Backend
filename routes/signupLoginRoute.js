const express = require("express");
const signupController = require("../controllers/signupLogin");
const loginController = require("../controllers/signupLogin");

const router = express.Router();

router.post("/signup", signupController.signupHandler);
router.post("/login", loginController.loginHandler);

module.exports = router;
