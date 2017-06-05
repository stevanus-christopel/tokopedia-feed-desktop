import React, { Component } from 'react';
import './ButtonWishlist.css';
import getImage from '../../lib/utils.js';

var ButtonWishlist = React.createClass({
  getInitialState: function() {
    return {
      checked: this.props.checked
    };
  },
  toggleCheck: function() {
    this.setState({
      checked: !this.state.checked
    });
  },
  render: function() {
    return (
      <img className='button-wishlist' alt='' onClick={() => this.toggleCheck()} src={
          this.state.checked === true ?
          getImage('wishlist.png') :
          getImage('wishlist-empty.png')
      } />
    );
  }
})

export default ButtonWishlist;