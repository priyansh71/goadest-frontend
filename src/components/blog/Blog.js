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

        callFn();

    }, []);


    return (
        <div>
            <Router>


                <Route path='/blogs/createblog' component={BlogCreator} />

                <div>
                    Background goes here
                    {/* Add create blog button */}

                    <div>
                        <Link to='/blogs/createblog'>Create a Blog</Link>
                    </div>


                    {blogTiles && <div> {blogTiles.map((blog) => (
                        <div key={blog._id}><BlogBox title={blog.title} address={blog._id} /></div>
                    ))}
                    </div>
                    }

                </div>


                <Route path='/blogs/readblogs' component={BlogViewer} />

            </Router>
        </div>
    )
}

export default Blog
