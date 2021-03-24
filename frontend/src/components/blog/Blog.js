import BlogBox from "./BlogBox";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import BlogViewer from "./BlogViewer";
import BlogCreator from "./BlogCreator";

const Blog = () => {
    const blogTiles = [
        {id: 1, title: 'Blog-1'},
        {id: 2, title: 'Blog-2'},
    ]; //fetch tiles from backend    

    return (
        <div>
            <Router>
                <div>
                    Background goes here
                    {/* Add create blog button */}

                    <Link to='/blogs/createblog'>Create a Blog</Link>

                </div>
                
                {blogTiles.map((blog) => {
                    return (<div key={blog.id}><BlogBox title={blog.title} address={blog.id}/></div>)
                })}

                    <Route path='/blogs/readblogs' component={BlogViewer}/>
                    <Route path='/blogs/createblog' component={BlogCreator}/>
                
            </Router>
        </div>
    )
}

export default Blog
