//require fs to write file
const fs = require("fs");
//const path = require("path")




module.exports = app => {
//API GET request
app.get("/api/notes",(req, res)=>{
  fs.readFile("./db/db.json","utf8",(err, data)=>
  {
    if (err){
      throw err;
    }
   else{
     return res.json(JSON.parse(data));
   }
  });
   var notes = [];
  app.post("/api/notes",(req, res)=>{
    var note = req.body;
     notes.push(note);
     res.json(note);
  })
  app.delete("/api/notes/:id",(req, res)=>{

    fs.readFile("./db/db.json", "utf8", (err, data)=>{
      if (err){
        throw err;
      }
    })


  })

})

}