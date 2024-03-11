"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const { createTodo, getAllTodo, updateTodo, getTodo, deleteTodo, deleteAllTodo, checkTodo } = require('../controllers/todo');
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { desc } = req.body;
        const newTodo = yield createTodo(desc);
        res.json({ msg: "Todo Created", success: true, newTodo });
    }
    catch (err) {
        res.json({ err });
        console.log(err);
    }
}));
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Todo = yield getAllTodo();
        res.json(Todo);
    }
    catch (err) {
        res.json({ err });
    }
}));
router.put("/check/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield checkTodo(Number(id));
    }
    catch (err) {
        res.json({ err });
        console.log(err);
    }
}));
router.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { desc, completed = false } = req.body;
        yield updateTodo(Number(id), desc, completed);
        res.json({ msg: "Todo Updated", success: "true" });
    }
    catch (err) {
        res.json({ err });
        console.log(err);
    }
}));
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const todo = yield getTodo(Number(id));
        res.json(todo);
    }
    catch (err) {
        res.json({ err });
    }
}));
router.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield deleteTodo(Number(id));
        res.json({ msg: "Todo Deleted", success: "true" });
    }
    catch (err) {
        res.json({ err });
    }
}));
router.delete("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield deleteAllTodo();
        res.json({ msg: "All Todo Deleted", success: "true" });
    }
    catch (err) {
        res.json({ err });
    }
}));
exports.default = router;
