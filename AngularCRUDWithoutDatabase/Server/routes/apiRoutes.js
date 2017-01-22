const express = require("express");
let router = express.Router();

router.use("/user", require("../controllers/user.api"));
module.exports = router;