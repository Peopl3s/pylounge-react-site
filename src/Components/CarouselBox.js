import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import secondImg from '../assets/s.jpg';
import thirdImg from '../assets/t.jpg';
import cup from '../assets/cup.png';

export default class CarouserBox extends Component {
	render() {
		return (
			<Carousel>
				<Carousel.Item>
					<Carousel.Caption>
						<h3>PyLounge YouTube</h3>
						<p>Subscribe</p>
					</Carousel.Caption>
					<img
						className="d-block w-100"
						src={cup}
						height="auto"
						alt="First"
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={secondImg}
						alt="Second"
					/>
					<Carousel.Caption>
						<h3>PyLounge YouTube</h3>
						<p>Subscribe</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={thirdImg}
						alt="Third"
					/>
					<Carousel.Caption>
						<h3>PyLounge YouTube</h3>
						<p>Subscribe</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		)
	}
}