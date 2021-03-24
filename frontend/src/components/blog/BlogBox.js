import { Link } from "react-router-dom";

function BlogBox({ title, address }) {
    // This is a button
    return (
        <div>
            <Link to={'/blogs/readblogs/' + address}>
                {title}
            </Link>
        </div>
    )
}

export default BlogBox