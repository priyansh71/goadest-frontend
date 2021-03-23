import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import {useState} from 'react';
import Home from './home/Home';
import Nav from './Nav';
import Search from './Search';

const Header = () => {

    const [value, SetValue] = useState("");
    const handleChange = (e) => {
        SetValue(e.target.value);
    }

    return (
        <Router>
            <Switch>
                <Route path="*">
                    <Link to='/'>
                        Home
                    </Link>
                    <Search value={value} onChange={handleChange}/>
                    <Nav value={value}/>
                    <Route path='/' exact>
                        <Home />
                    </Route>
                </Route>
            </Switch>
        </Router>
    )
}

export default Header