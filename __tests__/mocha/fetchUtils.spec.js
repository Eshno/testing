import { getData } from '../../src/utils/fetch';
import { expect } from 'chai';

describe.skip('Fetch Utils', function() {
  it('Requests data correctly', function(done) {
    this.timeout(3000);
    getData('https://dog.ceo/api/breeds/image/random')
      .then(({ message }) => {
        expect(message).to.match(/https:\/\/images\.dog\.ceo\/breeds/gi);
        done();
      }).catch(err => done(err));
  });
});
