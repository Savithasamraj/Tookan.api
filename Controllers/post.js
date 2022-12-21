const data =require("../Schema/data")

const  datas= async(req,res)=>{
    
    try{
 const  jobdetails= await data.create(req.body)
 res.status(200).send(req.body
    )
    }
    catch(error){
console.log(error)
    }
}
module.exports={datas}