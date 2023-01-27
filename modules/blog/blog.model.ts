import { Schema, model, Document } from "mongoose";
import { ObjectId } from "mongoose";

export interface IBlog {
    title: string;
    description: string;
    coverImageUrl?: string;
    tags?: [];
    blogBody: "";
    isPublic?: boolean;
}

export interface BlogDocument extends IBlog, Document {
    _id: ObjectId;
    createdAt: Date;
    updatedAt: Date;
}

const BlogSchema = new Schema<BlogDocument>(
    {
        title: {
            type: String,
        },
        description: {
            type: String,
        },
        coverImageUrl: {
            type: String,
        },
        tags: {
            type: Array
        },
        blogBody: {
            type: String
        },
        isPublic: {
            type: Boolean,
        },
    },
    { timestamps: true }
);

const BlogModel = model<BlogDocument>("vblog", BlogSchema);

export default BlogModel;
