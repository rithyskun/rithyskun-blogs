import { findAllBlog } from "~/modules/blog/blog.service";

export default defineEventHandler(async (event) => {
    try {
        const blogs = await findAllBlog();
        return blogs
    } catch (error: any) {
        throw new Error(error).message;
    }
});