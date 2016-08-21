const getHello = () => {
  return {
    type: 'GETHELLO'
  };
};

const getHelloWorld = (text) => {
  return {
    type: 'GETHELLOWORLD',
    text
  };
};

module.exports = {
  getHello,
  getHelloWorld
};
