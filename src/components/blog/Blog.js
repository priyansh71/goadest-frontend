import BlogBox from "./BlogBox";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import BlogViewer from "./BlogViewer";
import BlogCreator from "./BlogCreator";
import { Button } from 'react-bootstrap';


const Blog = () => {
    const blogTiles = [
        { id: 1, title: 'Blog-1' },
        { id: 2, title: 'Blog-2' },
    ]; //fetch tiles from backend    

    return (
        <div>
            <Router>
                <hr className="rule" />
                <center>
                    {/* Add create blog button */}
                    <Button variant="dark">
                        <Link className="linkname" to='/blogs/createblog'>
                            <span >Create a Blog </span>
                        </Link>
                    </Button>

                </center>


                {blogTiles.map((blog) => {
                    return (
                        <div key={blog.id}>
                            <BlogBox title={blog.title} address={blog.id} />
                        </div>
                    )
                })}

                <Route path='/blogs/readblogs' component={BlogViewer} />
                <Route path='/blogs/createblog' component={BlogCreator} />

            </Router>
        </div>
    )
}

export default Blog
