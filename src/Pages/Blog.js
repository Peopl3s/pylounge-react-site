import React, { Component } from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';

import Footer from '../Components/Footer';
import Post from '../Components/Post';

const FadeIn = styled.div`animation: 3s ${keyframes`${fadeIn}`}`;

export default class Blog extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			items: []
		};
	}

	componentDidMount() {
		fetch("https://api.pexels.com/v1/search?query=nature&per_page=10", {
			headers: {
				'Authorization': process.env.REACT_APP_TOKEN,
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		}).then(res => res.json())
			.then(
				(result) => {
					this.setState({
						isLoaded: true,
						items: result.photos
					});
				},
				(error) => {
					this.setState({
						isLoaded: true,
						error
					});
				}
			)
	}

	render() {
		const { error, isLoaded, items } = this.state;
		if (error) {
			return <div>Ошибка: {error.message}</div>;
		} else if (!isLoaded) {
			return <div>Загрузка...</div>;
		} else {
			return (
				<>
					<Container>
						<Row>
							<Col md="9">
								{items.map(item => (
									<FadeIn><Post title={item.photographer} imgSrc={item.src.original} content={item.photographer_url} /><hr /></FadeIn>
								))}
							</Col>
							<Col md="3">
								<h5 className="text-center  mt-5">Information</h5>
								<Card>
									<ListGroup variant="flush">
										<ListGroup.Item>About team</ListGroup.Item>
										<ListGroup.Item>Developers</ListGroup.Item>
										<ListGroup.Item>Projects</ListGroup.Item>
										<ListGroup.Item>Python</ListGroup.Item>
										<ListGroup.Item>Commerce</ListGroup.Item>
									</ListGroup>
								</Card>
								<Card className="mt-3" bg="light">
									<Card.Body>
										<Card.Title>Side widget</Card.Title>
										<Card.Text>
											dffffffffggh lhk lghl hgklhgk lhg lgl h;g h5h
											fsddjkdfjikjg  fjgf jklk jfhgjkfkjfgjfkgjng
											glkfgfgklkgf  kfj fgj;kll l lkl kf;lgk lg;kfl;
											fg kg;mkfl;kg lfkglkfg;.
								</Card.Text>
									</Card.Body>
								</Card>
							</Col>
						</Row>
					</Container>
					<FadeIn><Footer /></FadeIn>
				</>
			)
		}
	}
}