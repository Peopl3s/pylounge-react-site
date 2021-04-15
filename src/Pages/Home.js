import React, { Component } from 'react';
import { Container, CardDeck, Button, Row, Col } from 'react-bootstrap';
import { pulse, fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';

import CCard from '../Components/CCard';
import Footer from '../Components/Footer';
import CarouselBox from '../Components/CarouselBox';

import v1 from '../assets/v1.png';
import v2 from '../assets/v2.png';
import v3 from '../assets/v3.png';
import pl from '../assets/plblack.png';

const Pulse = styled.div`animation: 3s ${keyframes`${pulse}`} infinite`;
const FadeIn = styled.div`animation: 3s ${keyframes`${fadeIn}`}`;

export default class Home extends Component {
	render() {
		return (
			<>
				<FadeIn>
					<CarouselBox />
				</FadeIn>
				<Container fluid style={{ backgroundColor: "#f8f8fa" }}>
					<Container className="text-center">
						<h2 className="text-center mb-4 mt-2">Our video</h2>
						<ScrollAnimation animateIn='flipInY' >
							<CardDeck className="m-4 text-left">
								<CCard
									imgSrc={v1}
									title="5 Причин За Которые Ненавидят Python"
									text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque elementum laoreet."
									time="3 minutes ago"
									buttonTxt="Watch now"
								/>
								<CCard
									imgSrc={v2}
									title="5 Причин За Которые Ненавидят Python"
									text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque elementum laoreet."
									time="3 minutes ago"
									buttonTxt="Watch now"
								/>
								<CCard
									imgSrc={v3}
									title="5 Причин За Которые Ненавидят Python"
									text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque elementum laoreet."
									time="3 minutes ago"
									buttonTxt="Watch now"
								/>
								<CCard
									imgSrc={v1}
									title="5 Причин За Которые Ненавидят Python"
									text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque elementum laoreet."
									time="3 minutes ago"
									buttonTxt="Watch now"
								/>
								<CCard
									imgSrc={v2}
									title="5 Причин За Которые Ненавидят Python"
									text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque elementum laoreet."
									time="3 minutes ago"
									buttonTxt="Watch now"
								/>
								<CCard
									imgSrc={v3}
									title="5 Причин За Которые Ненавидят Python"
									text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque elementum laoreet."
									time="3 minutes ago"
									buttonTxt="Watch now"
								/>
							</CardDeck>
						</ScrollAnimation>
						<Button className="mb-4" variant="info" size="lg">All video</Button>
					</Container>
				</Container>
				<ScrollAnimation animateIn='wobble'
					initiallyVisible={true}>
					<Container fluid
						style={{ backgroundColor: "lightgrey" }}
					>
						<Container className="p-4">
							<Row>
								<h2>Подпишись на нас!</h2>
								<p>Присоединяйся к сообществу единомышленников, узнавай много нового из мира IT и будь в курсе всех событий!</p>
							</Row>
							<Row>
								<Col sm="8">
									<h2>Хотите быть модным айтишником?</h2>
									<p>Мы предлагаем посетить наш интернет магазин одежды и различных вещей, связанных с программированием. В
									магазине вы найдете различные товары как для себя, так и на подарок. Ассортимент постоянно пополняется, так
							что заходите и выбирайте программерские вещи, созданные программистами!</p>
									<p>Мы предлагаем посетить наш интернет магазин одежды и различных вещей, связанных с программированием. В
									магазине вы найдете различные товары как для себя, так и на подарок. Ассортимент постоянно пополняется, так
							что заходите и выбирайте программерские вещи, созданные программистами!</p>
									<Button variant="success">Перейти в магазин</Button>
								</Col>
								<Col sm="4">
									<Pulse>
										<img className="w-100" src={pl} />
									</Pulse>
								</Col>
							</Row>
						</Container>
					</Container>
				</ScrollAnimation>
				<ScrollAnimation animateIn='fadeIn'>
					<Footer />
				</ScrollAnimation>
			</>
		)
	}
}