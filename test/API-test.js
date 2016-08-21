const request = require('supertest');

describe('Get hello world', () => {
  beforeEach(function () {
    app = require('../app');
  });

  it('responds to get /hello', function testSlash(done) {
    request(app)
      .get('/hello')
      .expect(200, '"HelloWorld"', done);
  });
});
