import { Schema, model, Document } from "mongoose";
import { ObjectId } from "mongoose";

export interface ITodo {
    todo: string;
    isCompleted: boolean;
}

export interface Todo extends ITodo, Document {
    _id: ObjectId;
    createdAt: Date;
    updatedAt: Date;
}

const TodoSchema = new Schema<Todo>(
    {
        todo: {
            type: String,
        },
        isCompleted: {
            type: Boolean,
        },
    },
    { timestamps: true }
);

const TodoModel = model<Todo>("Todo", TodoSchema);

export default TodoModel;
