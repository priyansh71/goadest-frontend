import axios from "axios"
import { useEffect, useState } from "react"

const BlogViewer = ({ id }) => {

    const [blog, setBlog] = useState(null)

    const callFn = () => {

        axios.get(`${process.env.REACT_APP_GOADEST_BACKEND}/post/${id}`)
            .then((res) => {
                setBlog(res.data);
                console.log(res.data);
            }).catch((e) => {
                console.log(e.message)
            })
    }

    useEffect(() => {

        callFn()

    }, []);


    return (
        <div>

            <center>
                <hr className="ruler" />
                <div id="head">{blog && blog.title}</div>
                <br />
                <div>{blog && blog.author}</div>
                <hr className="ruler" />
                <div id="content">{blog && blog.content}</div>
            </center>
        </div>
    )
}

export default BlogViewer