import React, { Component } from 'react';
import './ButtonWishlist.css';
import getImage from '../../lib/utils.js';

var ButtonWishlist = React.createClass({
  getInitialState: function() {
    return {
      checked: this.props.checked
    };
  },
  toggleCheck: function(e) {
    this.setState({
      checked: !this.state.checked
    });
    console.log(e);
    e.stopPropagation();
    e.preventDefault();
  },
  render: function() {
    return (
      <img className='button-wishlist' alt='' onClick={(e) => this.toggleCheck(e)} src={
          this.state.checked === true ?
          getImage('wishlist.png') :
          getImage('wishlist-empty.png')
      } />
    );
  }
})

export default ButtonWishlist;