"use strict"
var express = require("express");
var router = express.Router();
var User = require("../models/userSchema");
var Hash = require("../models/hash-password");

router.post("/register", function (req, res) {
    var user = new User({
        fullname: req.body.fullname,
        gender: req.body.gender,
        referral: req.body.referral,
        state: req.body.gender,
        mobile: req.body.mobile,
        email: req.body.email,
        username: req.body.username,
        password: Hash.saltHashPassword(req.body.password)
    });
    User.createUser(user, function (err, user) {
        if (err) {
            res.json(err);
        } else {
            res.json(user);
        }
    });
});

router.get("/check_username", function (req, res) {
    User.checkUsername(req.query.username, function (err, user) {
        if (err) {
            res.json(err);
        } else {
            if (user) {
                res.json({ "userAlreadyExist": true });
            } else {
                res.json({ "userAlreadyExist": false });
            }
            
        }
    });
});

router.post("/login", function (req, res) {
    User.checkUsername(req.body.username, function (err, user) {
        if (err) {
            res.json(err);
        } else {
            if (user) {
                if (Hash.confirmPassword(user, req.body.password)) {
                    res.json(user);
                }else{
                    res.json(null);
                }
            } else {
                res.json(null);
            }

        }
    });
})

module.exports = router;