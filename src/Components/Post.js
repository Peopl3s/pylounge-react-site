import React, { Component } from 'react';
import { Media } from 'react-bootstrap';

export default class Post extends Component {
	render() {
		return (
			<Media className="m-5">
				<img
					width={250}
					height={250}
					className="mr-3"
					src={this.props.imgSrc}
				/>
				<Media.Body>
					<h5>{this.props.title}</h5>
					<p>{this.props.content}</p>
				</Media.Body>
			</Media>
		)
	}
}