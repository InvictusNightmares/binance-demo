import React, { Component } from 'react';
import TradeItem from '../components/TradeItem';
import Request from '../api/request';

class Trade extends Component {

  constructor (props) {
    super(props);

    this.state = {
      tradeInfo: ''
    }
  }

  componentWillMount () {
    Request.getTradeInfo('ETHBTC').then((response) => {
      if (response.status === 200) {
        this.setState({tradeInfo: response.data})
      }
    })
  }

  render() {
    const listData = this.state.tradeInfo;
    return (
      <div>
        {
          listData && listData.map(data => <TradeItem key={data.id} props={data}></TradeItem>)
        }
      </div>
    );
  }
}

export default Trade;
