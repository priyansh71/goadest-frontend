import a from "../../images/a.jpg";
import b from "../../images/b.jpg";
import c from "../../images/c.jpg";
import d from "../../images/d.jpg";
import e from "../../images/e.jpg";
import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Carousel from "react-bootstrap/Carousel";

const Bootstrap = () => {

	return (
		<div className="mydiv">
			<Jumbotron className="Jumbotron">
				<h1>Your dream holiday destination.</h1>
				<p>
					Famed to be paradise on earth, Goa has the right mix of everything that a tourist
					destination has to offer. It's beautiful because of its unbeatable greenery oozing out of the dense palm cover even at the most popular
					stretches of beaches, while the glimpse of peaceful life of the fisherman villages, the exciting
					water sports activities	along with the peace of the sunset beach	is enough to satisfy every adventure lover’s heart.
				</p>
			</Jumbotron>
			<hr className="rule" />
			<br />
			<center>

				<Carousel fade interval={3000} pauseOnHover={true} keyboard={true} className="carousel">

					<Carousel.Item className="item">
						<img
							d-inline
							src={a}
							alt="First slide"
						/>
					</Carousel.Item>
					<Carousel.Item className="item">
						<img
							src={b}
							alt="Second slide"
						/>
					</Carousel.Item>
					<Carousel.Item className="item">
						<img
							src={c}
							alt="Third slide"
						/>
					</Carousel.Item>
					<Carousel.Item className="item">
						<img
							src={d}
							alt="Fourth slide"
						/>
					</Carousel.Item>
					<Carousel.Item className="item">
						<img
							src={e}
							alt="Fifth slide"
						/>
					</Carousel.Item>
				</Carousel>
			</center>
		</div >
	);
};
export default Bootstrap;
