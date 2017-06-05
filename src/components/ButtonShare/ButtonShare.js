import React, { Component } from 'react';
import './ButtonShare.css';
import getImage from '../../lib/utils.js';

var ButtonShare = React.createClass({
  render: function() {
    return (
        <button className='btn button-share'>
            <img alt='' src={getImage('icon-btn-share.png')} /> Bagikan
        </button>
    );
  }
})

export default ButtonShare;