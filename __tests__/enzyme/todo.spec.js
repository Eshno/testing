import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Todo from '../../src/containers/Todo';

describe('<Todo />', function() {

  it('Renders with default props', function() {
    const tasks = [{ desc: 'Do Enzyme Tests', isDone: false }, { desc: 'Do Mocha Tests', isDone: false }];
    const wrapper = mount(<Todo defaultTasks={tasks} />);
    expect(wrapper.find('li')).to.have.lengthOf(tasks.length);
  });

  it('Adds a Task when the Add Task Button is clicked', function() {
    const wrapper = mount(<Todo defaultTasks={[]} />);
    wrapper.find('.addButton').simulate('click');
    expect(wrapper.find('li')).to.have.lengthOf(1);
  });

  it('Deletes a Task when the Delete Task Button is clicked', function() {
    const tasks = [{ desc: 'Do Enzyme Tests', isDone: false }, { desc: 'Do Mocha Tests', isDone: false }];
    const wrapper = mount(<Todo defaultTasks={tasks} />);
    expect(wrapper.find('li')).to.have.lengthOf(2);
    wrapper.find('.deleteButton').first().simulate('click');
    wrapper.find('.ConfirmButtonConfirm').first().simulate('click');
    expect(wrapper.find('li')).to.have.lengthOf(1);
  });

  it('Displays when a task is done', function() {
    const tasks = [{ desc: 'Do Enzyme Tests', isDone: true }, { desc: 'Do Mocha Tests', isDone: false }];
    const wrapper = mount(<Todo defaultTasks={tasks} />);
    expect(wrapper.find('.TaskCompleted')).to.have.lengthOf(1);
    expect(wrapper.find('.TaskTextInput').get(0).props.style).to.have.property('textDecoration', 'line-through');
  });
});
