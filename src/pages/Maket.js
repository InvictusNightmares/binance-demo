import React, { Component } from 'react';
import MarketItem from '../components/MarketItem';
import Request from '../api/request';

class Market extends Component {

  constructor (props) {
    super(props);

    this.state = {
      marketInfo: ''
    }
  }

  componentWillMount () {
    Request.getMarketInfo().then((response) => {
      if (response.status === 200) {
        this.setState({marketInfo: response.data.symbols})
      }
    })
  }

  render() {
    const listData = this.state.marketInfo;
    return (
      <div>
        {
          listData && listData.map(data => <MarketItem key={data.symbol} props={data}></MarketItem>)
        }
      </div>
    );
  }
}

export default Market;
