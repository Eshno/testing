import React, { Component } from 'react';
import { string, func } from 'prop-types';
import "../styles/ConfirmButton.css";

export default class ConfirmButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayOpts: false
    };
  }

  handleDisplay = () => {
    this.setState({ displayOpts: !this.state.displayOpts });
  }

  confirmResp = (resp) => {
    if (resp) this.props.callback();
    this.handleDisplay();
  }

  render() {
    return <div className="ConfirmButtonWrapper">
      <button className="ConfirmButton" onClick={() => this.handleDisplay()} style={{ display: this.state.displayOpts ? 'none' : 'block' }}>{this.props.msg}</button>
      <div style={{ display: this.state.displayOpts ? 'flex' : 'none' }}>
        <button className="ConfirmButtonCancel" onClick={() => this.confirmResp(false)}>Cancel</button>
        <button className="ConfirmButtonConfirm" onClick={() => this.confirmResp(true)}>Confirm</button>
      </div>
    </div>;
  }
}
ConfirmButton.propTypes = {
  msg: string,
  callback: func
};
ConfirmButton.defaultProps = {
  msg: '',
  callback: () => { }
};
