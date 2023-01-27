import BlogModel, { BlogDocument } from '~~/modules/blog/blog.model'

export async function findAllBlog() {
    return await BlogModel.find({}).sort({ createdAt: -1 }).limit(50)
}

export async function createBlog(input: BlogDocument) {
    try {
        const blog = await BlogModel.create(input)
        return blog.toJSON()
    } catch (error: any) {
        throw new Error(error)
    }
}
