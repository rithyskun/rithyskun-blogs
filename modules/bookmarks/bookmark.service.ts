import BookmarkModel, {
    BookmarkDocument,
} from "~~/modules/bookmarks/bookmark.model";

export async function findAllBookmark() {
    return await BookmarkModel.find({}).sort({ createdAt: -1 }).limit(50);
}

export async function createBookmark(input: BookmarkDocument) {
    try {
        const bookmark = await BookmarkModel.create(input);
        return bookmark.toJSON();
    } catch (error: any) {
        throw new Error(error);
    }
}
