import React, { Component } from 'react';
import Tab from './components/Tab';
import Market from './pages/Maket';
import Trade from './pages/Trade';

class App extends Component {
  render() {
    return (
      <div>
        <Tab>
          <div name="市场列表">
          <Market></Market>
          </div>
          <div name="交易列表">
          <Trade></Trade>
          </div>
        </Tab>
      </div>
    );
  }
}

export default App;
