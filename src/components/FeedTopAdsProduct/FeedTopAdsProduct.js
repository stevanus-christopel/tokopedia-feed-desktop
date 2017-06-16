import React, { Component } from 'react';
import './FeedTopAdsProduct.css';
import getImage from '../../lib/utils.js';

import ButtonWishlist from '../ButtonWishlist';

var FeedTopAdsProduct = React.createClass({
  getInitialState: function() {
    return {
      isShowPopOver: false,
      isShowWishlist1: false,
      isShowWishlist2: false,
      isShowWishlist3: false,
      isShowWishlist4: false,
      isShowWishlist5: false,
      isShowWishlist6: false
    };
  },
  showWishlist: function(elementNumber) {
    switch(elementNumber){
      case 1:
        this.setState({
          isShowWishlist1: true
        });
        break;
      case 2:
        this.setState({
          isShowWishlist2: true
        });
        break;
      case 3:
        this.setState({
          isShowWishlist3: true
        });
        break;
      case 4:
        this.setState({
          isShowWishlist4: true
        });
        break;
      case 5:
        this.setState({
          isShowWishlist5: true
        });
        break;
      case 6:
        this.setState({
          isShowWishlist6: true
        });
        break;
    }
  },
  hideWishlist: function(elementNumber) {
    switch(elementNumber){
      case 1:
        this.setState({
          isShowWishlist1: false
        });
        break;
      case 2:
        this.setState({
          isShowWishlist2: false
        });
        break;
      case 3:
        this.setState({
          isShowWishlist3: false
        });
        break;
      case 4:
        this.setState({
          isShowWishlist4: false
        });
        break;
      case 5:
        this.setState({
          isShowWishlist5: false
        });
        break;
      case 6:
        this.setState({
          isShowWishlist6: false
        });
        break;
    }
  },
  componentDidMount: function() {
    this.embedTopads.setAttribute('trigger', this.props.trigger)
    this.embedTopads.setAttribute('is_userinfo_rcmd', this.props.isUserinfoRcmd)
    this.embedTopads.setAttribute('ep', this.props.ep)
    this.embedTopads.setAttribute('item', this.props.item)
    this.embedTopads.setAttribute('device', this.props.device)
    this.embedTopads.setAttribute('template', 'm_feed_plus')
    this.embedTopads.setAttribute('page', this.props.page)
    // this.embedTopads.setAttribute('token', this.props.token)
    this.embedTopads.setAttribute('user_id', this.props.userID)
    this.embedTopads.setAttribute('ad_url', 'http://ta.ar-antonius.ndvl')

    taHandler.pushStates([{ id: `promo-${this.props.page}` }]) // eslint-disable-line no-undef
  },
  render: function() {
    return (
      <div
        ref={node => (this.embedTopads = node)}
        className='ta-inventory'
        id={`promo-${this.props.page}`}
      />
    );
  }
})

export default FeedTopAdsProduct;
