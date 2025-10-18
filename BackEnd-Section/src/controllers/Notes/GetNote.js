import connection from "../../config/db.js";

// GET NOTE BY ID
export const GetNote = (req , res) =>{
   const id = parseInt(req.params.id);
   if(!id){
    return res.status(400).json({
        message : "FILL OUT ID !!!"
    });
   };

  const sql = "SELECT * FROM notes WHERE note_id = ?";

  connection.query(sql , [id] , (err , result) =>{
     if(err){
       return res.status(500).json({
            message : err
        });
     }
     res.status(200).json({
        message : `NOTES WITH THIS ID ${id}`,
        result : result
     });
  });
};