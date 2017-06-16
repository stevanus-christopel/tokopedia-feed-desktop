import React, { Component } from 'react';
import './FeedError.css';
import getImage from '../../lib/utils.js';

var FeedError = React.createClass({
  render: function() {
    return (
      <div className='feed-error mb-20'>
          <p>Mohon maaf terjadi kendala, silakan coba lagi.</p>
          <button className='btn btn-action'>Coba Lagi</button>
      </div>
    );
  }
})

export default FeedError;
