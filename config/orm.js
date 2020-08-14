const connection = require("./connection.js");
const orm = {
  selectAll: cb => {
    const query = "SELECT * FROM burgers";
    connection.query(query, (err, res) => {
      if (err) throw err;
      cb(res);
    });
  },

  insertOne: (burger, cb) => {
    const query = "INSERT INTO burgers (burger_name) VALUES (?)";
    connection.query(query, burger, (err, res) => {
      if (err) throw err;
      cb(res);
    });
  },

  updateOne: (id, cb) => {
    const query = "UPDATE burgers SET devoured = true WHERE id = ?";

    connection.query(query, id, (err, res) => {
      if (err) throw err;
      cb(res);
    });
  }
};
module.exports = orm;
