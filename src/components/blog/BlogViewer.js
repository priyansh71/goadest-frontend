import axios from "axios"
import { useEffect, useState } from "react"

const BlogViewer = () => {


    const [blogs, setBlogs] = useState(null)

    const callFn = () => {

        axios.get(`${process.env.REACT_APP_GOADEST_BACKEND}/posts`)
            .then((res) => {
                setBlogs(res.data);
                console.log(res.data);
            }).catch((e) => {
                console.log(e.message)
            })
        console.log(blogs)
    }

    useEffect(() => {

        callFn()

    }, []);

    useEffect(() => {

        callFn()

    }, [setBlogs]);


    return (
        <div>
            {blogs && blogs.map((blog) => (
                <div>
                    <h1>{blog.title}</h1>
                    <p>{blog.content}</p>
                </div>
            )
            )}
        </div>
    )
}

export default BlogViewer