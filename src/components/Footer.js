import { Col, Container, Jumbotron, Nav } from 'react-bootstrap'
import { Link, Route, Switch } from 'react-router-dom'
import Blog from './blog/Blog';

const Footer = () => {
    return (
        <div>
            <br />
            <hr className="rule" />
            <br />
            <Jumbotron className="Jumbotron1">
                <Container fluid>
                    <Col>
                        <a className="footerlink" href="/blogs">
                            About the creators
                        </a>
                    </Col>
                </Container>
            </Jumbotron>



        </div>
    )
}

export default Footer