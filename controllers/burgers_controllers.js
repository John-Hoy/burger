// all dependencies

const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");

// routes to navigate the server

router.get("/", function (req, res) {
        burger.selectAll(function (data) {
                let hbsObject = {
                        burgers: data
                };
                console.log(hbsObject);
                res.render("index", hbsObject);
        });
});

// other router functions needed are insert one and update