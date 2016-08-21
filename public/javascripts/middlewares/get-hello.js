import request from 'superagent';
import getHello from '../actions/get-hello';

export default store => next => action => {
  if (action.type === 'GETHELLO') {
    request.get('/hello')
      .end((err,res) => {
        next(getHello.getHelloWorld(res.body));
      });
  } else {
    next(action);
  }
};
