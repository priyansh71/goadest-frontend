import {Route, Link, Switch} from "react-router-dom";
import Home from './home/Home';
import Blog from './blog/Blog';
import Location from './locations/Location';
import Map from './map/Map';

const Nav = () => {
    return (
        <div>
            <nav>
                <ul>
                    <Link to='/blogs'>
                        <li>Blogs</li>
                    </Link>
                    <Link to='/locations'>
                        <li>Locations</li>
                    </Link>
                    <Link to='/maps'>
                        <li>Maps</li>
                    </Link>
                </ul>
            </nav>
            <Switch>
                <Route path='/blogs' component={Blog} />
                <Route path='/locations' component={Location} />
                <Route path='/maps' component={Map} />
            </Switch>
        </div>
    )
}

export default Nav