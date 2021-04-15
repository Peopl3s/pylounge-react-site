import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

export default class CCard extends Component {
	render() {
		return (
			<Card>
				<Card.Img
					variant="top"
					src={this.props.imgSrc} />
				<Card.Body>
					<Card.Title>{this.props.title}</Card.Title>
					<Card.Text>d{this.props.text}</Card.Text>
					<p className="card-text"><small className="text-muted">Last updated {this.props.time}</small></p>
					<Button variant="primary">{this.props.buttonTxt}</Button>
				</Card.Body>
			</Card>
		)
	}
}