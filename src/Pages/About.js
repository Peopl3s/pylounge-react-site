import React, { Component } from 'react';
import { Container, Tab, Nav, Row, Col } from 'react-bootstrap';

import TabContent from '../Components/TabContent';
import Footer from '../Components/Footer';

import python from '../assets/python.jpeg';
import django from '../assets/django.jpeg';
import react from '../assets/react.png';
import ruby from '../assets/ruby.png';
import node from '../assets/node.jpg';

export default class About extends Component {
	render() {
		return (
			<>
				<Container style={{ minHeight: "700px" }}>
					<Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
						<Row>
							<Col sm={3}>
								<Nav variant="pills" className="flex-column mt-2">
									<Nav.Item>
										<Nav.Link eventKey="first">Python</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link eventKey="second">Django</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link eventKey="third">React</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link eventKey="four">Ruby</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link eventKey="five">Node.js</Nav.Link>
									</Nav.Item>
								</Nav>
							</Col>
							<Col sm={9}>
								<Tab.Content className="mt-2">
									<TabContent
										eventKey="first"
										imgSrc={python}
										text="Python — высокоуровневый язык программирования общего назначения с динамической строгой типизацией и автоматическим управлением памятью, \
									ориентированный на повышение производительности разработчика, читаемости кода и его качества, а также на обеспечение переносимости написанных на нём программ."
									/>
									<TabContent
										eventKey="second"
										imgSrc={django}
										text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque elementum laoreet. Maecenas volutpat lorem ac posuere efficitur. Etiam lacus dui, feugiat pharetra velit ac."
									/>
									<TabContent
										eventKey="third"
										imgSrc={react}
										text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque elementum laoreet. Maecenas volutpat lorem ac posuere efficitur. Etiam lacus dui, feugiat pharetra velit ac."
									/>
									<TabContent
										eventKey="four"
										imgSrc={ruby}
										text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque elementum laoreet. Maecenas volutpat lorem ac posuere efficitur. Etiam lacus dui, feugiat pharetra velit ac."
									/>
									<TabContent
										eventKey="five"
										imgSrc={node}
										text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque elementum laoreet. Maecenas volutpat lorem ac posuere efficitur. Etiam lacus dui, feugiat pharetra velit ac."
									/>
								</Tab.Content>
							</Col>
						</Row>
					</Tab.Container>
				</Container>
				<Footer />
			</>
		)
	}
}