"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)();
const cors = require('cors');
const todos_1 = __importDefault(require("./routes/todos"));
app.use(cors());
dotenv_1.default.config();
const PORT = process.env.PORT;
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.json({ msg: "Home Page" });
});
app.use("/todo", todos_1.default);
app.listen(PORT, () => {
    console.log("Server running at port " + PORT);
});
// app.post("/todo",async (req,res)=>{
//     try {
//         const {desc} = req.body
//         const newTodo= await createTodo(desc)
//         res.json({msg: "Todo Created",success:true,newTodo})
//     } catch (err) {
//         res.json({err});
//         console.log(err);
//     }
// })
// app.get("/todo",async (req,res)=>{
//     try {
//         const Todo=await getAllTodo();
//         res.json(Todo);
//     } catch (err) {
//         res.json({err});
//     }
// })
// app.put("/todo/:id",async (req,res)=>{
//     try {
//         const { id } = req.params;
//         const { desc , completed=false } = req.body
//         await updateTodo(Number(id),desc,completed);
//         res.json({msg:"Todo Updated",success:"true"});
//     } catch (err) {
//         res.json({err});
//         console.log(err);
//     }
// })
// app.get("/todo/:id",async (req,res)=>{
//     try {
//         const { id } = req.params;
//         const todo = await getTodo(Number(id));
//         res.json(todo);
//     } catch (err) {
//         res.json({err});
//     }
// })
// app.delete("/todo/:id",async (req,res)=>{
//     try {
//         const { id } = req.params;
//         await deleteTodo(Number(id));
//         res.json({msg: "Todo Deleted", success:"true"})
//     } catch (err) {
//         res.json({err});
//     }
// })
// app.delete("/todo",async(req,res)=>{
//     try {
//         await deleteAllTodo();
//         res.json({msg:"All Todo Deleted",success:"true"})
//     } catch (err) {
//         res.json({err});
//     }
// })
