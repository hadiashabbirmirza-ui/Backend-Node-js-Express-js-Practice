import express from 'express';

import pool from './db.js';

const app = express();
app.get('/products' , (req , res)=> {
    res.json("Hello from backend")
});
//get , update , delete , add (crud)

pool.query("SELECT  NOW()", (error , result)=>{

  if (error){
    console.log("Database  connection failed" , error);
    console.error(error);
  }
  else{
    console.log("database connected" ,result.rows);
  }
})

app.get('/' , (req , res)=> {
    res.json("Hello server is running on port 5000");
});
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

