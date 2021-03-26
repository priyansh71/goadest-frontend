import { Col, Container, Row } from "react-bootstrap";

const BlogViewer = () => {
    const url = window.location.href;
    const loc = url.indexOf('readblogs/')
    const id = url.substring(loc + 10);

    // Get blog by id from backend
    const blog = { title: "Blog-1", content: 'This is a blog' }; //fetch(url) from backend
    return (
        <div>
            <center>
                <hr className="ruler" />
                <div id="head">{blog.title}</div>
                <br />
                <hr className="ruler" />
                <textarea id="display">{blog.content}</textarea>
            </center>
        </div>
    )
}

export default BlogViewer