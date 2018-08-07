import React, { Component } from 'react';

class TradeItem extends Component {

	render () {
		return (
			<div className="item-container">
			<p>{this.props.props.price}</p>
			<p>{this.props.props.qty}</p>
		</div>
		);
	}
}

export default TradeItem;