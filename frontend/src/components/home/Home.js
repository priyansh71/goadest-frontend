import Bootstrap from './Bootstrap';
import RecentBlogs from './RecentBlogs';
import Search from './Search';

const Home = () => {
    return (
        <div>
            <h2>Home Page</h2>
            <Search />
            <Bootstrap />
            <RecentBlogs />
        </div>
    )
}

export default Home