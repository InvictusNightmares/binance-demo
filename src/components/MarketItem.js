import React, { Component } from 'react';

class MarketItem extends Component {

	render () {
		return (
			<div className="item-container">
			<p>{this.props.props.symbol}</p>
			<p>{this.props.props.filters[0].maxPrice}</p>
			<p>{this.props.props.filters[1].maxQty}</p>
		</div>
		);
	}
}

export default MarketItem;