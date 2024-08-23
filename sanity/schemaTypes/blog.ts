export default {
    name: "blog",
    type: "document",
    title: "Blog",
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title of the blog article"
        }, {
            name: "slug",
            title: "slug of the document",
            type: "slug",
            options:{
                source:"title"
            }
        }, {
            name: "titleImage",
            type: "image",
            title: "Image of the blog article",
        }, {
            name: "smallDescription",
            type: "text",
            title: "Short description of the blog article",
        }, {
            name: "content",
            type: "array",
            title: "Content",
            of: [
                {
                    type: "block"
                }
            ]
        }
    ]
}