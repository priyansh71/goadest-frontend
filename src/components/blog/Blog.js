import BlogBox from "./BlogBox";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import BlogViewer from "./BlogViewer";
import BlogCreator from "./BlogCreator";
import axios from "axios";
import { useEffect, useState } from "react";

const Blog = () => {


    const [blogTiles, setBlogs] = useState(null)

    const callFn = () => {

        axios.get(`${process.env.REACT_APP_GOADEST_BACKEND}/posts`)
            .then((res) => {
                setBlogs(res.data);
            }).catch((e) => {
                console.log(e.message)
            })
    }

    useEffect(() => {

        callFn()

    }, []);

    useEffect(() => {

        callFn()

    }, [setBlogs]);

    console.log(blogTiles)

    return (
        <div>
            <Router>
                <div>
                    Background goes here
                    {/* Add create blog button */}

                    <Link to='/blogs/createblog'>Create a Blog</Link>


                    {blogTiles && <div> {blogTiles.map((blog) => (
                        <div key={blog._id}><BlogBox title={blog.title} address={blog._id} /></div>
                    ))}
                    </div>
                    }

                </div>


                <Route path='/blogs/readblogs' component={BlogViewer} />

                <Route path='/blogs/createblog' component={BlogCreator} />

            </Router>
        </div >
    )
}

export default Blog
