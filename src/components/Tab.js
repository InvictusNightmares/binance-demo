import React, { Component } from 'react';

class Tab extends Component {

  constructor (props) {

    super(props);

    this.state = {
      currentIndex: 0
    }
  }

  select= select => this.setState({ currentIndex:select })

  render () {
    const {currentIndex} = this.state;
    return (
      <div>
        <div className="button-container">
          {
            React.Children.map(this.props.children, (ele, index) =>
            <div onClick={this.select.bind(this,index)} className="button">{ele.props.name}</div>)
          }
        </div>
        <div>
          {
            React.Children.map(this.props.children, (ele,index) => currentIndex === index && ele)
          }
        </div>
      </div>
    );
  }
}

export default Tab;
