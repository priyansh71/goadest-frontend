import { Col, Container, Jumbotron } from 'react-bootstrap'

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
            {/* <hr className="rule" /> */}
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