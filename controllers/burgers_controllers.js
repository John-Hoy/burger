// all dependencies

const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");

// routes to navigate the server

router.get("/", (req, res) => {
        burger.selectAll((data) => {
                let hbsObject = {
                        burgers: data
                };
                console.log(hbsObject);
                res.render("index", hbsObject);
        });
});

// other router functions needed are insert one and update

router.post("/api/burgers", (req, res) => {
        burger.insertOne([
                "burger_name", "devoured"
        ], [
                        req.body.burger_name, req.body.devoured
                ], (result) => {
                        res.json({ id: result.insertId })
                });
});