import React, { Component } from 'react';
import './FeedInspiration.css';
import getImage from '../../lib/utils.js';

import ButtonWishlist from '../ButtonWishlist';

var FeedInspiration = React.createClass({
  getInitialState: function() {
    return {
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
  render: function() {
    return (
      <div className='feed-inspiration'>
        <div className='feed-inspiration__header'>
          Inspirasi dari Minat Anda
        </div>

        <div className='feed-inspiration__content'>					
          <div className='row-fluid'>
            <div className='span4 feed-inspiration__items feed-inspiration__items--border-bottom'
            onMouseEnter={() => this.showWishlist(1)}
            onMouseLeave={() => this.hideWishlist(1)}>
              { this.state.isShowWishlist1 && <ButtonWishlist checked={true} />}
              <img src={getImage('inspiration-1.jpg')} className='feed-inspiration__image'/>
              <div className='feed-inspiration__details'>
                <div className='fs-12 fw-600 lh-17 feed-inspiration__items--name'>
                  <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                  Jetta Shoes
                  </div>
                </div>
                <div className='feed-inspiration__items--price'>
                  <label className='fs-12 fw-600 orange-red'>Rp 349.000</label>
                </div>
              </div>
            </div>

            <div className='span4 feed-inspiration__items feed-inspiration__items--border-bottom'
            onMouseEnter={() => this.showWishlist(2)}
            onMouseLeave={() => this.hideWishlist(2)}>
              { this.state.isShowWishlist2 && <ButtonWishlist checked={false} />}
              <img src={getImage('inspiration-2.jpg')} className='feed-inspiration__image'/>
              <div className='feed-inspiration__details'>
                <div className='fs-12 fw-600 lh-17 feed-inspiration__items--name'>
                  <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                  Azura Shoes
                  </div>
                </div>
                <div className='feed-inspiration__items--price'>
                  <label className='fs-12 fw-600 orange-red'>Rp 349.000</label>
                </div>
              </div>
            </div>

            <div className='span4 feed-inspiration__items feed-inspiration__items--border-bottom'
            onMouseEnter={() => this.showWishlist(3)}
            onMouseLeave={() => this.hideWishlist(3)}>
              { this.state.isShowWishlist3 && <ButtonWishlist checked={false} />}
              <img src={getImage('inspiration-3.jpg')} className='feed-inspiration__image'/>
              <div className='feed-inspiration__details'>
                <div className='fs-12 fw-600 lh-17 feed-inspiration__items--name'>
                  <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                  Digger Cap
                  </div>
                </div>
                <div className='feed-inspiration__items--price'>
                  <label className='fs-12 fw-600 orange-red'>Rp 199.000</label>
                </div>
              </div>
            </div>
          </div>

          <div className='row-fluid'>
            <div className='span4 feed-inspiration__items'
            onMouseEnter={() => this.showWishlist(4)}
            onMouseLeave={() => this.hideWishlist(4)}>
              { this.state.isShowWishlist4 && <ButtonWishlist checked={false} />}
              <img src={getImage('inspiration-4.jpg')} className='feed-inspiration__image'/>
              <div className='feed-inspiration__details'>
                <div className='fs-12 fw-600 lh-17 feed-inspiration__items--name'>
                  <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                  Katana Cap
                  </div>
                </div>
                <div className='feed-inspiration__items--price'>
                  <label className='fs-12 fw-600 orange-red'>Rp 199.000</label>
                </div>
              </div>
            </div>

            <div className='span4 feed-inspiration__items'
            onMouseEnter={() => this.showWishlist(5)}
            onMouseLeave={() => this.hideWishlist(5)}>
              { this.state.isShowWishlist5 && <ButtonWishlist checked={true} />}
              <img src={getImage('inspiration-5.jpg')} className='feed-inspiration__image'/>
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
            onMouseEnter={() => this.showWishlist(6)}
            onMouseLeave={() => this.hideWishlist(6)}>
              { this.state.isShowWishlist6 && <ButtonWishlist checked={false} />}
              <img src={getImage('inspiration-6.jpg')} className='feed-inspiration__image'/>
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
