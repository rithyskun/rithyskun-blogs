import { findAllBookmark } from "~~/modules/bookmarks/bookmark.service";

export default defineEventHandler(async (event) => {
    try {
        const todos = await findAllBookmark();
        return todos
    } catch (error: any) {
        throw new Error(error).message;
    }
});