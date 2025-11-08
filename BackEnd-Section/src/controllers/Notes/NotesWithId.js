import connection from "../../config/db.js";

// Get Notes With user_id
export const NotesWithId = (req , res) => {
    const id = parseInt(req.params.id);
    if(!id){
       return res.status(400).json({
            message: "Fill out id"
        })
    }

    const sql = "SELECT * FROM notes Where user_id = ?";

     connection.query(sql , [id] , (err , result) =>{
       if(err){
        return res.status(500).json({
            message : err
        })
       }
       res.status(200).json({
        message : "Some Notes With user id!!",
        result : result
       })
     })
}