import React, { Component } from 'react';
import './FeedInspiration.css';
import getImage from '../../lib/utils.js';

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
              <img src="http://placehold.it/300x300" className='feed-inspiration__image'/>
              <div className='feed-inspiration__details'>
                <div className='fs-12 fw-600 lh-17 feed-inspiration__items--name'>
                  <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                  Dr.Kevin Stylish and Comfortable Men Sne
                  </div>
                </div>
                <div className='feed-inspiration__items--price'>
                  <label className='fs-12 fw-600 orange-red'>Rp 249.950</label>
                </div>
              </div>
            </div>

            <div className='span4 feed-inspiration__items feed-inspiration__items--border-bottom'>
              <img src="http://placehold.it/300x300" className='feed-inspiration__image'/>
              <div className='feed-inspiration__details'>
                <div className='fs-12 fw-600 lh-17 feed-inspiration__items--name'>
                  <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                  Dr.Kevin Stylish and Comfortable Men Sne
                  </div>
                </div>
                <div className='feed-inspiration__items--price'>
                  <label className='fs-12 fw-600 orange-red'>Rp 249.950</label>
                </div>
              </div>
            </div>

            <div className='span4 feed-inspiration__items feed-inspiration__items--border-bottom'>
              <img src="http://placehold.it/300x300" className='feed-inspiration__image'/>
              <div className='feed-inspiration__details'>
                <div className='fs-12 fw-600 lh-17 feed-inspiration__items--name'>
                  <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                  Dr.Kevin Stylish and Comfortable Men Sne
                  </div>
                </div>
                <div className='feed-inspiration__items--price'>
                  <label className='fs-12 fw-600 orange-red'>Rp 249.950</label>
                </div>
              </div>
            </div>
          </div>

          <div className='row-fluid'>
            <div className='span4 feed-inspiration__items'>
              <img src="http://placehold.it/300x300" className='feed-inspiration__image'/>
              <div className='feed-inspiration__details'>
                <div className='fs-12 fw-600 lh-17 feed-inspiration__items--name'>
                  <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                  Dr.Kevin Stylish and Comfortable Men Sne
                  </div>
                </div>
                <div className='feed-inspiration__items--price'>
                  <label className='fs-12 fw-600 orange-red'>Rp 249.950</label>
                </div>
              </div>
            </div>

            <div className='span4 feed-inspiration__items'>
              <img src="http://placehold.it/300x300" className='feed-inspiration__image'/>
              <div className='feed-inspiration__details'>
                <div className='fs-12 fw-600 lh-17 feed-inspiration__items--name'>
                  <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                  Dr.Kevin Stylish and Comfortable Men Sne
                  </div>
                </div>
                <div className='feed-inspiration__items--price'>
                  <label className='fs-12 fw-600 orange-red'>Rp 249.950</label>
                </div>
              </div>
            </div>

            <div className='span4 feed-inspiration__items'>
              <img src="http://placehold.it/300x300" className='feed-inspiration__image'/>
              <div className='feed-inspiration__details'>
                <div className='fs-12 fw-600 lh-17 feed-inspiration__items--name'>
                  <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                  Dr.Kevin Stylish and Comfortable Men Sne
                  </div>
                </div>
                <div className='feed-inspiration__items--price'>
                  <label className='fs-12 fw-600 orange-red'>Rp 249.950</label>
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
