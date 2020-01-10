import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import ConfirmButton from '../../src/components/ConfirmButton';

describe('<ConfirmButton />', function() {

  it('Executes the Callback on confirm', function() {
    const callback = sinon.spy();
    const wrapper = mount(<ConfirmButton callback={callback} />);
    wrapper.find('.ConfirmButton').simulate('click');
    wrapper.find('.ConfirmButtonConfirm').simulate('click');
    sinon.assert.calledOnce(callback);
  });

  it('Does not Execute the Callback on cancel', function() {
    const callback = sinon.spy();
    const wrapper = mount(<ConfirmButton callback={callback} />);
    wrapper.find('.ConfirmButton').simulate('click');
    wrapper.find('.ConfirmButtonCancel').simulate('click');
    sinon.assert.notCalled(callback);
  });

  it('Changes displayOpts State when Button is clicked', function() {
    const callback = sinon.spy();
    const wrapper = mount(<ConfirmButton callback={callback} />);
    expect(wrapper.state('displayOpts')).to.be.false;
    wrapper.find('.ConfirmButton').simulate('click');
    expect(wrapper.state('displayOpts')).to.be.true;
  });
});
