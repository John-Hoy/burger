// requiring orm from my files
const orm = require("../config/orm.js");

// burger specific orm functions for selexting all making new ones and updating existing ones
let burger = {


        // select all the burgers function
        selectAll: (cb) => {
                orm.selectAll("burger", function (res) {
                        cb(res);
                });
        },
        // add new burger function
        insertOne: (cols, vals, cb) => {
                orm.insertOne("burgers", cols, vals, (res) => {
                        cb(res);
                });
        },
        // update burgers to devoured
        update: (objColVals, condition, cb) => {
                orm.update("burgers", objColVals, condition, (res) => {
                        cb(res);
                });
        }
        // delete one for later

};


module.exports = burger;