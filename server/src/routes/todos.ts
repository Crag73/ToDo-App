import express from "express";

const router=express.Router();
const {createTodo,getAllTodo,updateTodo,getTodo,deleteTodo,deleteAllTodo,checkTodo} = require('../controllers/todo');


router.post("/",async (req,res)=>{
    try {
        const {desc} = req.body
        const newTodo= await createTodo(desc)
        res.json({msg: "Todo Created",success:true,newTodo})
    } catch (err) {
        res.json({err});
        console.log(err);
    }
})

router.get("/",async (req,res)=>{
    try {
        const Todo=await getAllTodo();
        res.json(Todo);
    } catch (err) {
        res.json({err});
    }
})

router.put("/check/:id",async (req,res)=>{
    try{
        const {id} = req.params;
        await checkTodo(Number(id));
    } catch (err){
        res.json({err})
        console.log(err)
    }
})

router.put("/:id",async (req,res)=>{
    try {
        const { id } = req.params;
        const { desc , completed=false } = req.body
        await updateTodo(Number(id),desc,completed);
        res.json({msg:"Todo Updated",success:"true"});
    } catch (err) {
        res.json({err});
        console.log(err);
    }
})



router.get("/:id",async (req,res)=>{
    try {
        const { id } = req.params;
        const todo = await getTodo(Number(id));
        res.json(todo);
    } catch (err) {
        res.json({err});
    }
})

router.delete("/:id",async (req,res)=>{
    try {
        const { id } = req.params;
        await deleteTodo(Number(id));
        res.json({msg: "Todo Deleted", success:"true"})
    } catch (err) {
        res.json({err});
    }
})

router.delete("/",async(req,res)=>{
    try {
        await deleteAllTodo();
        res.json({msg:"All Todo Deleted",success:"true"})
    } catch (err) {
        res.json({err});
    }
})




export default router;