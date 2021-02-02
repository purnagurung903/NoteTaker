//importing express in app
const express = require("express");
//const path = require("path");
// telling node we are creating an express server
const app = express();
// setting initial port
var PORT = process.env.PORT || 8002;

// setting up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//LIstener
//below code effectively "starts" our server

app.listen(PORT,()=>{
  console.log(`App listening on PORT: ${PORT}`);
})