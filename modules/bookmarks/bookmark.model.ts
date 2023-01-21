import { Schema, model, Document } from "mongoose";
import { ObjectId } from "mongoose";

enum Tag {
    TECHNOLOGY,
    VUEJS,
    NUXTJS,
    MONGODB,
    MONGOOSE,
    H3,
    NITRO,
    VUEUSE
}


export interface IBookmark {
    title: string;
    linkURL?: string;
    tags?: Tag[];
    isActive?: boolean;
}

export interface BookmarkDocument extends IBookmark, Document {
    _id: ObjectId;
    createdAt: Date;
    updatedAt: Date;
}

const BookmarkSchema = new Schema<BookmarkDocument>(
    {
        title: {
            type: String,
        },
        linkURL: {
            type: String,
        },
        tags: {
            type: Array
        },
        isActive: {
            type: Boolean,
        },
    },
    { timestamps: true }
);

const BookmarkModel = model<BookmarkDocument>("bookmark", BookmarkSchema);

export default BookmarkModel;
