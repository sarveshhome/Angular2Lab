const express = require("express");
let router = express.Router();

let users = [{ userId: 0, name: "sarvesh", address: "Delhi" }];

router.get("/", (req, res) => {
    res.send(users);
});

router.get("/:id", (req, res) => {
    let id = req.params.id;
    for (let i = 0; i < users.length; i++) {
        if (id == users[i].userId) {
            return res.send(users[i]);
        }
    }
    res.send("not found");
});

router.post("/", (req, res) => {
    let user = req.body;
    if (user != undefined) {
        users.push(user);
        res.send("created");
    } else {
        res.send("not created");
    }
});

router.put("/:id", (req, res) => {
    let id = req.params.id;
    let user = req.body;
    if (id == user.userId) {
        for (let i = 0; i < users.length; i++) {
            if (id == users[i].userId) {
                users[i].userId = user.userId;
                users[i].name = user.name;
                users[i].address = user.address;
                return res.send("updated");
            }
        }
        res.send("not updated");
    } else {
        res.send("not updated");
    }
});

router.delete("/:id", (req, res) => {
    let id = req.params.id;
    for (let i = 0; i < users.length; i++) {
        if (id == users[i].userId) {
            users.splice(i, 1);
            return res.send("deleted");
        }
    }
    res.send("not deleted");
});

module.exports = router;