import { Schema, model, Document } from "mongoose";
import { ObjectId } from "mongoose";
import {marked} from 'marked'
import createDomPurify from 'dompurify'
import { JSDOM } from 'jsdom'

const window = new JSDOM("").window
const dompurify = createDomPurify(window)

export interface IBlog {
    title: string;
    description: string;
    coverImageUrl?: string;
    tags?: [];
    blogBody: "";
    sanitizedHtml: string;
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
        sanitizedHtml: {
            type: String,
            required: true
        },
        isPublic: {
            type: Boolean,
        },
    },
    { timestamps: true }
);

BlogSchema.pre('validate', function(next) {
    if(this.blogBody) {
        this.sanitizedHtml = dompurify.sanitize(marked(this.blogBody))
    }

    next()
})

const BlogModel = model<BlogDocument>("vblog", BlogSchema);

export default BlogModel;
