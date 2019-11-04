// requires the conection db so the ORM can communicate with the databse
let connection = require("./connection.js");

// this is to loop through our sql to generate the number of question marks we need for a result
function questionMarks(num) {
        let arr = [];

        for (let i = 0; i < num; i++) {
                arr.push("?");
        }
        return arr.toString();
}

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
        insertOne: function (table, cols, vals, cb) {
                let queryString = "INSERT INTO " + table;

                queryString += " (";
                queryString += cols.toString();
                queryString += ") ";
                queryString += "VALUES (";
                queryString += questionMarks(vals.length);
                queryString += ") ";

                console.log(queryString);

                connection.query(queryString, vals, function (err, result) {
                        if (err) {
                                throw err
                        }
                        cb(result);
                })
        },

        

        // updateOne:
}


module.exports = orm;