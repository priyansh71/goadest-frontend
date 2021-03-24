import Bootstrap from "./Bootstrap";
import RecentBlogs from "./RecentBlogs";
import Search from "./Search";
import { Container, Jumbotron, Row } from "react-bootstrap";

const Home = () => {
	return (
		<div>
			<Container fluid>
				<Row>
					<Search />
				</Row>
			</Container>
			<Bootstrap />
			<Jumbotron />
			<RecentBlogs />
		</div>
	);
};

export default Home;
