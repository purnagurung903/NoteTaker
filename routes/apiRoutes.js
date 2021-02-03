//require fs to write file
const fs = require("fs");
//const path = require("path")




module.exports = app => {
//API GET request
  app.get("/api/notes",(req, res)=>{
  fs.readFile("./db/db.json","utf8",(err, data)=>
  {
    if (err)throw err;
    

    var note = JSON.parse(data)
    return res.json(note);
   
  });
 })
   
  app.post("/api/notes",(req, res)=>{

    //ned the file and put the value in a note arrayed to rea
    fs.readFile("./db/db.json", "utf8",(err, data)=>{
      if (err)throw err;
      var note = JSON.parse(data)
      
    var myNote = req.body;
    
     note.push(myNote);
     //fs.writeFileSync here to write the new array with the pushed note

    
     fs.writeFileSync("./db/db.json", JSON.stringify(note), "utf-8");
     
     return res.json(myNote);
   
    })
  })
  app.delete("/api/notes/:id",(req, res)=>{

    fs.readFile("./db/db.json", "utf8",(err, data)=>{
      if (err)throw err;
      var note = JSON.parse(data)
      
      let deleteId = req.params.id;
      console.log(deleteId);

      for (let i = 0; i < note.length; i++){
        if (deleteId !== note[i].id){
          note.splice(i, 1);
        }
      }

      fs.writeFileSync("./db/db.json", JSON.stringify(note), "utf-8");
     
     return res.sendStatus(200);




      //use a filter here instead, return whatever note.id !== req.params.id
      //res.sendStatus(200)
      
  })
})


  

}

