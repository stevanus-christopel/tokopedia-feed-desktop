import React, { Component } from 'react';
import './ButtonShare.css';
import getImage from '../../lib/utils.js';

var ButtonShare = React.createClass({
  getInitialState: function() {
    return {
      isShowPopover: false
    };
  },
  togglePopover: function() {
    this.setState({
      isShowPopover: !this.state.isShowPopover
    });
  },
  render: function() {
    return (
      <div>
        <button className='btn button-share' onClick={() => this.togglePopover()}>
            <img alt='' src={getImage('icon-btn-share.png')} /> Bagikan
        </button>
        {
          this.state.isShowPopover === true ?
          <span></span>
          :
          <span></span>
        }
      </div>
    );
  }
})

export default ButtonShare;