require("dotenv").config();
let config = function () {
  return {
    database: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: "express-demo",
      multipleStatements: true,
      ssl: {
        rejectUnauthorized: true,
      },
    },
  };
};

module.exports = new config();
