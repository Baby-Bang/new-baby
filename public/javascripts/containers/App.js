import React from 'react';
import {Col, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import getHello from '../actions/get-hello';

class App extends React.Component {
  showHello() {
    this.props.onShow();
  }

  render() {
    return <div>
      <Col md={2} mdOffset={5}>
        <h1>{this.props.hello}</h1>
      </Col>
      <Col md={1} mdOffset={5}>
        <Button className="btn-default" onClick={this.showHello.bind(this)}>show</Button>
      </Col>
    </div>;
  }
}

const mapStateToProps = (state) => {
  return {
    hello: state.hello
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onShow: () => {
      dispatch(getHello.getHello());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
