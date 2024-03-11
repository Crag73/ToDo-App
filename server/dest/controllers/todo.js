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
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient;
function createTodo(todoDesc) {
    return __awaiter(this, void 0, void 0, function* () {
        const Todo = yield prisma.todo.create({
            data: {
                desc: todoDesc
            },
        });
        return Todo;
    });
}
function getAllTodo() {
    return __awaiter(this, void 0, void 0, function* () {
        const Todo = yield prisma.todo.findMany({});
        return Todo;
    });
}
function updateTodo(id, desc, completed) {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.todo.update({
            where: {
                id: id
            },
            data: {
                desc: desc,
                completed: completed
            }
        });
    });
}
function getTodo(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const todo = yield prisma.todo.findUnique({
            where: {
                id: id
            }
        });
        return todo;
    });
}
function deleteTodo(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.todo.delete({
            where: {
                id: id
            }
        });
    });
}
function deleteAllTodo() {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.todo.deleteMany({});
    });
}
function checkTodo(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.todo.update({
            where: {
                id: id
            },
            data: {
                completed: true
            }
        });
    });
}
module.exports = { createTodo, getAllTodo, updateTodo, getTodo, deleteTodo, deleteAllTodo, checkTodo };
