const reducer = require('../../public/javascripts/reducers/reducer');
const expect = require('chai').expect;

describe('..', () => {
  it(',,,', () => {
    const store = {hello: ''};
    const action = {
      type: 'GETHELLOWORLD',
      text: 'HelloWorld'
    };
    const state = reducer(store, action);
    expect(state).to.be.deep.equal({hello: 'HelloWorld'});
  });
});
