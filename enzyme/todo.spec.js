import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Todo from '../src/containers/Todo';

describe('<Todo />', function() {
  it('Renders with default props', function() {
    const tasks = [{ desc: 'Do Enzyme Tests', isDone: false }, { desc: 'Do Mocha Tests', isDone: false }]
    const wrapper = mount(<Todo defaultTasks={tasks} />);
    expect(wrapper.find('li')).to.have.lengthOf(tasks.length);
  })
})
