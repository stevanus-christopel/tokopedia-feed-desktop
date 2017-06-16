import React, { Component } from 'react';
import './FeedInspiration.css';
import getImage from '../../lib/utils.js';

import ButtonWishlist from '../ButtonWishlist';

var FeedInspiration = React.createClass({
  getInitialState: function() {
    return {
      isShowWishlist: [false, false, false, false, false, false]
    };
  },
  showWishlist: function(elementNumber) {
    var localIsShowWishList = this.state.isShowWishlist;
    localIsShowWishList[elementNumber] = true;

    this.setState({
      isShowWishlist: localIsShowWishList
    });
  },
  hideWishlist: function(elementNumber) {
    var localIsShowWishList = this.state.isShowWishlist;
    localIsShowWishList[elementNumber] = false;

    this.setState({
      isShowWishlist: localIsShowWishList
    });
  },
  render: function() {
    return (
      <div className='feed-inspiration'>
        <div className='feed-inspiration__header'>
          Inspirasi dari Minat Anda
        </div>

        <div className='feed-inspiration__content'>					
          <div className='row-fluid'>

            {
              this.props.inspiration.recommendation.map(function(item, index) {
                return (
                  <div className={
                    (index === 2 || index === 5) ?
                    'span4 feed-inspiration__items feed-inspiration__items--white-border-right' :
                    'span4 feed-inspiration__items'
                  } key={ item.id }
                  onMouseEnter={() => this.showWishlist(index)}
                  onMouseLeave={() => this.hideWishlist(index)}>
                    { this.state.isShowWishlist[index] && <ButtonWishlist checked={this.state.isShowWishlist[index]} />}
                    <a href={item.url}>
                      <img src={item.image_url} className='feed-inspiration__image'/>
                    </a>
                    <div className='feed-inspiration__details'>
                      <div className='fs-12 fw-600 lh-17 feed-inspiration__items--name'>
                        <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                        <a href={item.url}>{ item.name }</a>
                        </div>
                      </div>
                      <div className='feed-inspiration__items--price'>
                        <label className='fs-12 fw-600'><a className='orange-red' href={item.url}>{ item.price }</a></label>
                      </div>
                    </div>
                  </div>
                )
              }, this)
            }

            <div className='span4 feed-inspiration__items'
            onMouseEnter={() => this.showWishlist(4)}
            onMouseLeave={() => this.hideWishlist(4)}>
              { this.state.isShowWishlist[4] && <ButtonWishlist checked={this.state.isShowWishlist[4]} />}
              <img src={getImage('inspiration.jpg')} className='feed-inspiration__image'/>
              <div className='feed-inspiration__details'>
                <div className='fs-12 fw-600 lh-17 feed-inspiration__items--name'>
                  <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                  Classic Women T-Shirt Jetta Maroon
                  </div>
                </div>
                <div className='feed-inspiration__items--price'>
                  <label className='fs-12 fw-600 orange-red'>Rp 239.000</label>
                </div>
              </div>
            </div>

            <div className='span4 feed-inspiration__items'
            onMouseEnter={() => this.showWishlist(5)}
            onMouseLeave={() => this.hideWishlist(5)}>
              { this.state.isShowWishlist[5] && <ButtonWishlist checked={this.state.isShowWishlist[5]} />}
              <img src={getImage('inspiration.jpg')} className='feed-inspiration__image'/>
              <div className='feed-inspiration__details'>
                <div className='fs-12 fw-600 lh-17 feed-inspiration__items--name'>
                  <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                  Classic Women T-Shirt Carnelian Red
                  </div>
                </div>
                <div className='feed-inspiration__items--price'>
                  <label className='fs-12 fw-600 orange-red'>Rp 239.000</label>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
})

export default FeedInspiration;
