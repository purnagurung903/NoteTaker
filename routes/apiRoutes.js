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

    var note = JSON.parse(data)
    return res.json(note);
   
  });
   
  app.post("/api/notes",(req, res)=>{
    var myNote = req.body;
     note.push(myNote);
     res.json(myNote);
  })
  app.delete("/api/notes/:id",(req, res)=>{

    // fs.readFile("./db/db.json", "utf8", (err, data)=>{
    //   if (err){
    //     throw err;
    //   }

      let id = req.params.id.toString();
      console.log(id);
      for (let i=0; i<note.length;i++){
        if(note[i].id === id){
           res.json(note[i]);
          
        }
      }
    })


  })

}

