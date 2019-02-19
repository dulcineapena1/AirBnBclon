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
   process.env.MONGODB_URI || "heroku_pp964t26:alnkda4dng4sg103g053p2hdjt@ds341825.mlab.com:41825/heroku_pp964t26"
   //"mongodb://localhost/airbnb"
);


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
