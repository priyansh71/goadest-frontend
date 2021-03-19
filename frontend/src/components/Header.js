import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Nav from './Nav';

const Header = () => {
    return (
        <Router>
            <Switch>
                <Route path="*">
                    <Nav />
                </Route>
            </Switch>
        </Router>
    )
}

export default Header