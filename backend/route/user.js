//***route utilisateurs
const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/user");
// const authPrivilege = require('../middlewares/admin.middleware');
// const auth = require('../middlewares/user.middleware');

// router.post("/ctrlAdmin", authPrivilege, userCtrl.control);
// router.post("/ctrlUser", auth, userCtrl.control);
router.post("/signup", userCtrl.signup);
// router.post("/login", userCtrl.login);

module.exports = router;