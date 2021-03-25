const BlogViewer = () => {
    const url = window.location.href;
    const loc = url.indexOf('readblogs/')
    const id = url.substring(loc+10);

    // Get blog by id from backend

    alert(id);
    
    const blog = {title: "Blog-1", content: 'This is a blog'}; //fetch(url) from backend
    return (
        <div>
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
        </div>
    )
}

export default BlogViewer