import React, { Component } from 'react';

class CatchErrors extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>ERROR! Page did not render. Please refresh to try again.</h1>;
    }
    return this.props.children;
  }
}

export default CatchErrors;
