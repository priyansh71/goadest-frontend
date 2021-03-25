import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';


function BlogBox({ title, address }) {
    // This is a button
    return (
        <center>
            <Button variant="light" id="Button">
                <Link className="bloglinkname" to={'/blogs/readblogs/' + address}>
                    <span>{title}</span>
                </Link>
            </Button>
            <br />
        </center >
    )
}

export default BlogBox
