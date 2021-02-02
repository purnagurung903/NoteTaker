// need to include path package to get the correct file path for our html
var path = require("path");

module.exports = app => {

  app.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname, "../public/notes.html"))
  });
// if no matching route is found default to this page
  app.get("*", function(req, res){
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

    // app.get("/", (req, res)=>{
    //   res.sendFile(path.join(__dirname, "../public/index.html"));
    // })
 

};