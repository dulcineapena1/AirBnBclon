const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
 if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
//Add routes, both API and view
app.use(routes); 


var allowCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE")
  res.header("Access-Control-Allow-Headers", "Content-Type")
  next()
}
app.use(allowCrossDomain)

// Connect to the Mongo DB
mongoose.connect(
   process.env.MONGODB_URI || "mongodb://localhost/airbnb"
  // "mongodb://localhost/googlebooks" "mongodb://heroku_bdxrjgk7:sksm78ftb83vst8vco6ulala94@ds157574.mlab.com:57574/heroku_bdxrjgk7"
  
);


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
