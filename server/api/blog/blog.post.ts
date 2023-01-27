import fs from 'fs'
import Mustache from 'mustache'
import {marked} from 'marked';
import { createBlog } from '~~/modules/blog/blog.service'

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event)
        let template = fs.readFileSync('./template/blogTemplate.md').toString()

        let bodyData = {
            title: body.title,
            coverImageUrl: "",
            tags: body.tags,
            blogBody: body.blogBody
        }
        let output = Mustache.render(template, bodyData)
        if (output) {
            fs.writeFileSync(`./content/3.blogs/${body.title}.md`, output)
        }
        const blog = await createBlog(body);
        return blog
    } catch (error: any) {
        throw new Error(error).message;
    }
});