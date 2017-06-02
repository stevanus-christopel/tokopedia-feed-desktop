import React, { Component } from 'react';
import './ButtonWishlist.css';
import getImage from '../../lib/utils.js';

var ButtonWishlist = React.createClass({
  render: function() {
    return (
      <img className='button-wishlist' alt='' src={
          this.props.checked === true ?
          getImage('wishlist.png') :
          getImage('wishlist-empty.png')
      } />
    );
  }
})

export default ButtonWishlist;