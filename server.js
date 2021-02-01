//importing express in app
var express = require("express");
// telling node we are creating an express server
var app = express();
// setting initial port
var PORT = process.env.PORT || 8080;

// setting up the express app to handle data parsing
app.use(express.urllencoded({ extended: true }));
app.use(express.json());

// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//LIstener
//below code effectively "starts" our server

app.listen(PORT, function(){
  console.log("App listening on PORT: " + PORT);
})