import React, { Component } from 'react';
import './ButtonShare.css';
import getImage from '../../lib/utils.js';

var ButtonShare = React.createClass({
  getInitialState: function() {
    return {
      isShowPopover: false
    };
  },
  // togglePopover: function() {
  //   if(!this.state.isShowPopover) {
  //     document.getElementsByClassName('button-share__icon-container').onmouseover = this.togglePopover;
  //   } else {
  //     document.getElementsByClassName('button-share__icon-container').onmouseover = null;
  //   }

  //   this.setState({
  //     isShowPopover: !this.state.isShowPopover
  //   });
  // },
  render: function() {
    return (
      <div onMouseLeave={() => this.setState({isShowPopover: false})}>
        <button className='btn button-share' onMouseOver={() => this.setState({isShowPopover: true})}>
            <img className='button-share--icon' alt='' src={getImage('icon-btn-share.png')} /> Bagikan
        </button>
        {
          this.state.isShowPopover === true &&
          <div className='button-share__icon-container' >
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