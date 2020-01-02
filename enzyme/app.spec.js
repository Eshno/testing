import React from 'react';
import { expect } from 'chai'
import { mount } from 'enzyme';
import App from '../src/app';

describe('<App />', function() {
  it('Renders', function() {
    const wrapper = mount(<App />);
    expect(wrapper.find('h1').text()).to.equal('Hey There!');
  })
})
