import React, { Component } from 'react';
import { Tab, Button } from 'react-bootstrap';

export default class TabContent extends Component {
	render() {
		const imgStyle = {
			maxHeight: "400px",
			height: "auto"
		};
		
		let bColor = "";
		if (this.props.eventKey == 'first') {
			bColor = "warning";
		} else if (this.props.eventKey == 'second') {
			bColor = "success";
		} else if (this.props.eventKey == 'third') {
			bColor = "primary";
		} else if (this.props.eventKey == 'four') {
			bColor = "danger";
		} else if (this.props.eventKey == 'five') {
			bColor = "info";
		}

		return (
			<Tab.Pane eventKey={this.props.eventKey}>
				<img className="w-100" src={this.props.imgSrc} style={imgStyle} />
				<p className="mt-4">{this.props.text}</p>
				<Button className="mb-4" variant={bColor}>Купить курс</Button>
			</Tab.Pane>
		)
	}
}