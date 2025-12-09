import connection from '../../config/db.js'

// GET ALL USERS DATA

export const GetUsers = (req , res) =>{
   const sql = "SELECT * FROM users";
   connection.query(sql , (err, result) =>{
      if(err){
        return res.status(500).json({
            message : "Something Wrong on server !!!"
        });
      }
      res.status(200).json({
        message : "ALL USERS DATA",
        result : result
      })
   })
}