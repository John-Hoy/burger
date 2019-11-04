
const mysql = require("mysql");
let connection;

// heroku connection
if (process.env.JAWSDB_URL) {
        connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
        // local host connection
        connection = mysql.createConnection({
                port: 3306,
                host: "localhost",
                user: "root",
                password: "root",
                database: "burgers_db"
        });
};

connection.connect(function (err) {
        if (err) {
                console.log(`error connecting:${err.stack}`);
                return;
        }
        console.log(`connected as id  ${connection.threadId}`);
});

module.exports = connection;