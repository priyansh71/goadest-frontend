import { useEffect, useState } from "react";
import MainSection from "./MainSection";
import RadiusFilter from "./RadiusFilter";
import OptionFilter from "./OptionFilter";
import axios from "axios";
import Search from "./Search";
import Styles from "./Location.module.css";
import { config } from "../../config";
import { Col, Container, Jumbotron, Row } from "react-bootstrap";

const Location = () => {
	const [distance, setDistance] = useState(10);
	const [option, setOption] = useState("all");
	const [searchValue, setSearchValue] = useState("");
	const [locations, setLocations] = useState(null);

	const location = { distance, typeofplace: option };

	const handleChange_distance = (e) => {
		const flag = e.target.value !== distance;
		setDistance(e.target.value);
		if (flag == true) {
			handleFindDest();
		}
	};
	const handleChange_option = (e) => {
		const flag = e.target.value !== option;
		setOption(e.target.value);
		if (flag == true) {
			handleFindDest();
		}
	};
	const handleSearchChange = (e) => {
		const flag = e.target.value !== searchValue;
		setSearchValue(e.target.value);
		if (flag == true) {
			handleFindDest();
		}
	};

	const handleFindDest = () => {
		axios({
			url: `${config.backendUrl}/travelplaces`,
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			data: location,
		})
			.then((res) => {
				setLocations(res.data);
			})
			.catch((e) => {
				console.log(e.message);
			});
	};

	useEffect(() => {
		handleFindDest();
	}, []);

	const tempLoc = [
		{
			key: 1,
			placename: "Name",
			address: "address",
			description:
				"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni pariatur necessitatibus nesciunt dignissimos illo sapiente consectetur non totam. Doloribus et quia nam suscipit nihil vero sequi nobis aut ut modi?",
			typeofplace: "beach",
			latitude: 15.353334767659915,
			longitude: 73.7778551695931,
			imageurl:
				"https://images.unsplash.com/photo-1597820334272-af87b2d917c1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1383&q=80",
		},
		{
			key: 2,
			placename: "Name",
			address: "address",
			description:
				"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni pariatur necessitatibus nesciunt dignissimos illo sapiente consectetur non totam. Doloribus et quia nam suscipit nihil vero sequi nobis aut ut modi?",
			typeofplace: "beach",
			latitude: 15.353334767659915,
			longitude: 73.7778551695931,
			imageurl:
				"https://images.unsplash.com/photo-1597820334272-af87b2d917c1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1383&q=80",
		},
	];

	return (
		<div>
			<center>
				<div className={Styles.searchHolder}>
					<Search value={searchValue} onChange={handleSearchChange} />
				</div>
				<div id="heading">
					Filters
				</div>
			</center>

			<Container fluid>
				<Row>
					<Col>
						<RadiusFilter onChange={handleChange_distance} distance={distance} />
					</Col>
					<Col>
						<OptionFilter onChange={handleChange_option} option={option} />
					</Col>
				</Row>
			</Container>
			<Container fluid>
				<Row>
					<center >
						<MainSection locations={locations} />
					</center>
				</Row>
			</Container>
		</div>

	);
};

export default Location;
