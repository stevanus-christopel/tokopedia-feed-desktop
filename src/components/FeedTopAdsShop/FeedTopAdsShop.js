import React, { Component } from 'react';
import './FeedTopAdsShop.css';
import getImage from '../../lib/utils.js';

var FeedTopAdsShop = React.createClass({
  componentDidMount: function() {
    this.embedTopads.setAttribute('src', 'fav_product')
    this.embedTopads.setAttribute('trigger', this.props.trigger)
    this.embedTopads.setAttribute('is_userinfo_rcmd', this.props.isUserinfoRcmd)
    this.embedTopads.setAttribute('ep', this.props.ep)
    this.embedTopads.setAttribute('item', this.props.item)
    this.embedTopads.setAttribute('device', this.props.device)
    this.embedTopads.setAttribute('template', 'feed_plus')
    this.embedTopads.setAttribute('page', this.props.page)
    // this.embedTopads.setAttribute('token', this.props.token)
    this.embedTopads.setAttribute('user_id', this.props.userID)
    this.embedTopads.setAttribute('ad_url', 'http://172.32.5.46:8765')
    this.embedTopads.setAttribute('tome_url', 'https://tome.tokopedia.com')
    this.embedTopads.setAttribute('tkpd_url', 'https://www.tokopedia.com')

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

export default FeedTopAdsShop;
