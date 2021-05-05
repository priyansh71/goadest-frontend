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
        <div onClick={Redirect} id="footer">
            <br />
            <hr className="rule" />
            <br />
            <Jumbotron className="Jumbotron1">
                <Container fluid>
                    <Col className="footerlink">
                        About the creators
                    </Col>
                </Container>
            </Jumbotron>
            {/* <Switch>
                <Route path='/blogs' component={Blog} />
            </Switch> */}
        </div>
    )
}

export default Footer