const express = require("express"),
    path = require("path");

let router = express.Router();

router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname,"../../Client/index.html"));
});

module.exports = router;