let connection = require("../config/connection.js");


let orm = {
        selectAll: function (tableInput, cb) {
                let queryString = "SELECT * FROM " + tableInput + ";";
                connection.query(queryString, function (err, res) {
                        if (err) {
                                throw err;
                        }
                        cb(res);
                });
        },
        // insertOne:

        // updateOne:
}


module.exports = orm;