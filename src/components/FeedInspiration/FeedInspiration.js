import React, { Component } from 'react';
import './FeedInspiration.css';
import getImage from '../../lib/utils.js';

import ButtonWishlist from '../ButtonWishlist';

var FeedInspiration = React.createClass({
  render: function() {
    return (
      <div className='feed-inspiration'>
        <div className='feed-inspiration__header'>
          Inspirasi dari Minat Anda
        </div>

        <div className='feed-inspiration__content'>					
          <div className='row-fluid'>
            <div className='span4 feed-inspiration__items feed-inspiration__items--border-bottom'>
              <ButtonWishlist checked={false} />
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

            <div className='span4 feed-inspiration__items feed-inspiration__items--border-bottom'>
              <ButtonWishlist checked={false} />
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

            <div className='span4 feed-inspiration__items feed-inspiration__items--border-bottom'>
              <ButtonWishlist checked={true} />
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
            <div className='span4 feed-inspiration__items'>
              <ButtonWishlist checked={false} />
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

            <div className='span4 feed-inspiration__items'>
              <ButtonWishlist checked={false} />
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

            <div className='span4 feed-inspiration__items'>
              <ButtonWishlist checked={false} />
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
