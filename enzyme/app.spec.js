import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from '../src/app';

describe('<App />', function() {
  it('Renders Router', function() {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Routes')).to.have.lengthOf(1);
  })
})
