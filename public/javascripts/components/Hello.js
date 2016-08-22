import React from 'react';

export default class App extends React.Component {
  showHello() {
    this.props.onShow();
  }

  render() {
    return <div className="col-md-2 col-md-offset-5">
        <h1>{this.props.hello}</h1>
        <button className="btn-default" onClick={this.showHello.bind(this)}>show</button>
    </div>;
  }
}
