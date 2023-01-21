import TodoModel from "./todo.model";

export async function findAllTodo() {
    return await TodoModel.find({})
        .sort({ isCompleted: 1, createdAt: -1 })
        .limit(50);
}
