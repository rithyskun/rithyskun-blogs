import { createBlog } from '~~/modules/blog/blog.service'

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event)
        const blog = await createBlog(body);
        return blog
    } catch (error: any) {
        throw new Error(error).message;
    }
});