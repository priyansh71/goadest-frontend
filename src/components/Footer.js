import { Col, Container, Jumbotron, Nav, Row } from 'react-bootstrap'
import { Link, Switch, Route } from 'react-router-dom'
import Blog from './blog/Blog'

const Footer = () => {
    return (
        <div>
            <br />
            <hr className="rule" />
            <br />
            <Jumbotron className="Jumbotron1">
                <Container fluid>
                    <Row>
                        <Col>
                            <a className="footerlink" href="/blogs">
                                About the creators
                            </a>
                        </Col>

                    </Row>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default Footer