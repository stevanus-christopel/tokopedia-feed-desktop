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
    if(!this.state.isShowPopover) {
      document.onclick = this.togglePopover;
    } else {
      document.onclick = null;
    }

    this.setState({
      isShowPopover: !this.state.isShowPopover
    });
  },
  render: function() {
    return (
      <div>
        <button className='btn button-share' onClick={() => this.togglePopover()}>
            <img className='button-share--icon' alt='' src={getImage('icon-btn-share.png')} /> Bagikan
        </button>
        {
          this.state.isShowPopover === true &&
          <div className='button-share__icon-container'>
            <img className='button-share--arrow' alt='' src={getImage('arrow-up.png')} />
            <img className='button-share--link' alt='' src={getImage('icon-fb.png')} />
            <img className='button-share--link' alt='' src={getImage('icon-twitter.png')} />
            <img className='button-share--link' alt='' src={getImage('icon-g.png')} />
            <img className='button-share--link' alt='' src={getImage('icon-wa.png')} />
            <img className='button-share--link' alt='' src={getImage('icon-line.png')} />
            <img className='button-share--link' alt='' src={getImage('icon-link.png')} />
          </div>
        }
      </div>
    );
  }
})

export default ButtonShare;