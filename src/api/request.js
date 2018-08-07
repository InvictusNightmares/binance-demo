import axios from 'axios';

axios.defaults.baseURL = 'https://api.binance.com';

class Request {

  getMarketInfo () {
    return axios('/api/v1/exchangeInfo');
  }

  getTradeInfo (info) {
    return axios(`api/v1/trades?symbol=${info}`);
  }
}

export default new Request();
