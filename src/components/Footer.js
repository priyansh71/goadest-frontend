import { Col, Container, Jumbotron, Nav } from 'react-bootstrap'
import { Link, Redirect, Route, Switch } from 'react-router-dom'
import Blog from './blog/Blog';

const Footer = () => {
    const Redirect = () => {
        return (
            <Redirect
                to={{
                    pathname: "/blogs"
                }}
            />
        )

    }
    return (
        <div id="footer">
            <hr className="rule" />
            <br />
            <Jumbotron className="Jumbotron1">
                <Container fluid>
                    <Col className="footerlink">
                        <a href='/blogs/readblogs/605f1b37ca55900015029d2d'>
                            About the creators
                        </a>
                    </Col>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default Footer