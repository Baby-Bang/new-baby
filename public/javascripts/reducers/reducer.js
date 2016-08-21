const reducer =  (state = {hello: ''}, action) => {
  switch (action.type) {
    case 'GETHELLOWORLD':
      return {
        hello: action.text
      };
    default:
      return state;
  }
};

module.exports = reducer;
