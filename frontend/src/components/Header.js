
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Home from './home/Home';
import Nav from './Nav';
import Search from './Search';

const Header = () => {
    return (
        <Router>
            <Switch>
                <Route path="*">
                    <Link to='/'>
                        Home
                    </Link>
                    <Search />
                    <Nav />
                    <Route path='/' exact>
                        <Home />
                    </Route>
                </Route>
            </Switch>
        </Router>
    )
}

export default Header