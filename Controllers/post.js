const data =require("../Schema/data")
const fs = require('fs');
const  datas= async(req,res)=>{
    
    try{
 const  jobdetails= await data.create(req.body)
 res.status(200).send({message:"profile created successfully"}
    )
    }
    catch(error){
console.log(error)
    }
}
module.exports={datas}
