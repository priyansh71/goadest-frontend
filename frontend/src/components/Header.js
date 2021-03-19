import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Home from './home/Home';
import Blog from './blog/Blog';
import Location from './locations/Location';
import Map from './map/Map';

const Header = () => {
    return (
        <BrowserRouter>
            <div>
                <nav>
                    <Link to='/'>
                        Home
                    </Link>

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
                    <Route path='/' exact component={Home} />
                    <Route path='/blogs' component={Blog} />
                    <Route path='/locations' component={Location} />
                    <Route path='/maps' component={Map} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default Header