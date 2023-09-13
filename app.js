// Importing package dependencies
const express = require("express");
const cors = require("cors");

// When deploying server on production, we don't know which port might be free so we set port from environment variable
const PORT = process.env.PORT || "3000";

// Creating an Express App
let app = express();

// Allowing Cross Origin Resource Sharing
app.use(cors());

// Parse application/json, basically parse incoming Request Object as a JSON Object
app.use(express.json());

// Parse application/x-www-form-urlencoded, basically parse incoming Request Object if strings or arrays
app.use(express.urlencoded({ extended: false }));

// Adding our routes to Express App
require("./routes")(app);

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server running on port: ${PORT}`);
  }
});
