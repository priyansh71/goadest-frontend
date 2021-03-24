const BlogViewer = () => {
    //const {url} = useRouteMatch();
    
    const blog = {title: "Blog-1", content: 'This is a blog'}; //fetch(url) from backend
    return (
        <div>
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
        </div>
    )
}

export default BlogViewer