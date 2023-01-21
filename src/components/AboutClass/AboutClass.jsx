import React, { Component } from 'react';

export default class AboutClass extends Component {
  constructor(props) {
    super(props);
    console.log('>>>>> this', this);
    this.state = {
      count: 0,
    };
    console.log('>>>>> inside constructor');
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      console.log('>>> Namaste!!');
    }, 1000);
    console.log('>>>>> inside componentDidMount');
    this.setState({
      count: 1,
    });
  }

  componentDidUpdate() {
    console.log('>>>>> inside componentDidUpdate');
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log('>>>>> componentWillUnmount');
  }

  render() {
    console.log('>>>>> inside render');
    return <div>AboutClass: {this.state.count}</div>;
  }
}
