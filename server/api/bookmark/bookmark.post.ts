import { findAllBookmark, createBookmark } from "~/modules/bookmarks/bookmark.service";

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event)
        const bookmark = await createBookmark(body);
        return bookmark
    } catch (error: any) {
        throw new Error(error).message;
    }
});