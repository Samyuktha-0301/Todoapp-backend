const ToDoModel = require('../models/Todomodel');

module.exports.getTodo = async (req, res) => {
    const toDo = await ToDoModel.find();
   
    res.send(toDo);
};

module.exports.saveToDo = async (req, res) => {
    try {
        const  {text} = req.body; 
        const resP = await ToDoModel.create({ text }); // Pass the extracted data as text
        console.log("Added Successfully...");
        console.log(resP);
        res.send(resP);
    } catch (err) {
        console.log(err);
        res.status(500).send(err); // Send an error response in case of failure
    }
};
module.exports.updateToDo= async(req,res)=>{
    try{
        const { _id ,text}=req.body;
        const resP=await ToDoModel.findByIdAndUpdate(_id,{text});
        res.send("Updated Successfully");

    }
    catch(err){
        console.log(err);
        res.status(500).send(err);
    }
};
module.exports.deleteToDo = async (req, res) => {
    try {
        
        const  {_id}  = req.body;
        console.log(_id);
        await ToDoModel.findByIdAndDelete(_id);
        res.send("Deleted Successfully");
    } catch (err) {
        console.log( err);
        res.status(500).send(err);
    }
};
// module.exports.deleteToDo= async(req,res)=>{
//     try{
//         const {_id}=req.body;
//         await ToDoModel.findByIdAndDelete(_id);
//         res.send("DeletedSuccessfully");

//     }
//     catch(err){
//         console.log(err);
//         res.status(500).send(err);
//     }
// };

