import Bootstrap from './Bootstrap';
import RecentBlogs from './RecentBlogs';
import Search from './Search';
import { Container, Row } from 'react-bootstrap'

const Home = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Search />
                </Row>
            </Container>
            <Bootstrap />
            <RecentBlogs />
        </div>
    )
}

export default Home