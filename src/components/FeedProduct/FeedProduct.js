import React, { Component } from 'react';
import './FeedProduct.css';
import getImage from '../../lib/utils.js';

var FeedProduct = React.createClass({
  render: function() {
    return (
      <div className='feed-product'>
        <div className='feed-product__header'>
          <div className='feed-product__seller-photo'>
            <img alt='' src={getImage('tokopedia-avatar-square.png')} />
          </div>
          <div className='feed-product__seller-activity'>
            <span className='fw-600'>Nana Shop Ekstraordinari </span>
            ubah <span className='fw-600'>{this.props.productCount} produk</span>
            <div className='feed-product__seller-activity--time'>3 jam</div>
          </div>
          <div className='feed-product__seller-share'></div>
        </div>

        <div className='feed-product__content'>		

          {
            this.props.productCount <= 2 ?
            <div className='row-fluid'>
              <div className='span6 feed-product__items'>
                <img src="http://placehold.it/300x300" className='feed-product__image'/>
                <div className='feed-product__details'>
                  <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                    <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                    Dr.Kevin Stylish and Comfortable Men Sne
                    </div>
                  </div>
                  <div className='feed-product__items--price'>
                    <label className='fs-12 fw-600 orange-red'>Rp 249.950</label>
                  </div>
                </div>
              </div>
              <div className='span6 feed-product__items'>
                <img src="http://placehold.it/300x300" className='feed-product__image'/>
                <div className='feed-product__details'>
                  <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                    <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                    Dr.Kevin Stylish and Comfortable Men Sne
                    </div>
                  </div>
                  <div className='feed-product__items--price'>
                    <label className='fs-12 fw-600 orange-red'>Rp 249.950</label>
                  </div>
                </div>
              </div>
            </div> :
            this.props.productCount === 3 ?
            <div className='row-fluid'>
              <div className='span4 feed-product__items'>
                <img src="http://placehold.it/300x300" className='feed-product__image'/>
                <div className='feed-product__details'>
                  <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                    <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                    Dr.Kevin Stylish and Comfortable Men Sne
                    </div>
                  </div>
                  <div className='feed-product__items--price'>
                    <label className='fs-12 fw-600 orange-red'>Rp 249.950</label>
                  </div>
                </div>
              </div>
              <div className='span4 feed-product__items'>
                <img src="http://placehold.it/300x300" className='feed-product__image'/>
                <div className='feed-product__details'>
                  <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                    <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                    Dr.Kevin Stylish and Comfortable Men Sne
                    </div>
                  </div>
                  <div className='feed-product__items--price'>
                    <label className='fs-12 fw-600 orange-red'>Rp 249.950</label>
                  </div>
                </div>
              </div>
              <div className='span4 feed-product__items'>
                <img src="http://placehold.it/300x300" className='feed-product__image'/>
                <div className='feed-product__details'>
                  <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                    <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                    Dr.Kevin Stylish and Comfortable Men Sne
                    </div>
                  </div>
                  <div className='feed-product__items--price'>
                    <label className='fs-12 fw-600 orange-red'>Rp 249.950</label>
                  </div>
                </div>
              </div>
            </div> :
            this.props.productCount === 4 ?
            <div>
              <div className='row-fluid'>
                <div className='span6 feed-product__items'>
                  <img src="http://placehold.it/300x300" className='feed-product__image'/>
                  <div className='feed-product__details'>
                    <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                      <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                      Dr.Kevin Stylish and Comfortable Men Sne
                      </div>
                    </div>
                    <div className='feed-product__items--price'>
                      <label className='fs-12 fw-600 orange-red'>Rp 249.950</label>
                    </div>
                  </div>
                </div>
                <div className='span6 feed-product__items'>
                  <img src="http://placehold.it/300x300" className='feed-product__image'/>
                  <div className='feed-product__details'>
                    <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                      <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                      Dr.Kevin Stylish and Comfortable Men Sne
                      </div>
                    </div>
                    <div className='feed-product__items--price'>
                      <label className='fs-12 fw-600 orange-red'>Rp 249.950</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row-fluid'>
                <div className='span6 feed-product__items feed-product__items--border-top'>
                  <img src="http://placehold.it/300x300" className='feed-product__image'/>
                  <div className='feed-product__details'>
                    <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                      <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                      Dr.Kevin Stylish and Comfortable Men Sne
                      </div>
                    </div>
                    <div className='feed-product__items--price'>
                      <label className='fs-12 fw-600 orange-red'>Rp 249.950</label>
                    </div>
                  </div>
                </div>
                <div className='span6 feed-product__items feed-product__items--border-top'>
                  <img src="http://placehold.it/300x300" className='feed-product__image'/>
                  <div className='feed-product__details'>
                    <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                      <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                      Dr.Kevin Stylish and Comfortable Men Sne
                      </div>
                    </div>
                    <div className='feed-product__items--price'>
                      <label className='fs-12 fw-600 orange-red'>Rp 249.950</label>
                    </div>
                  </div>
                </div>
              </div>
            </div> :
            this.props.productCount === 5 ?
            <div>
              <div className='row-fluid'>
                <div className='span6 feed-product__items'>
                  <img src="http://placehold.it/300x300" className='feed-product__image'/>
                  <div className='feed-product__details'>
                    <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                      <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                      Dr.Kevin Stylish and Comfortable Men Sne
                      </div>
                    </div>
                    <div className='feed-product__items--price'>
                      <label className='fs-12 fw-600 orange-red'>Rp 249.950</label>
                    </div>
                  </div>
                </div>
                <div className='span6 feed-product__items'>
                  <img src="http://placehold.it/300x300" className='feed-product__image'/>
                  <div className='feed-product__details'>
                    <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                      <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                      Dr.Kevin Stylish and Comfortable Men Sne
                      </div>
                    </div>
                    <div className='feed-product__items--price'>
                      <label className='fs-12 fw-600 orange-red'>Rp 249.950</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row-fluid'>
                <div className='span4 feed-product__items feed-product__items--border-top'>
                  <img src="http://placehold.it/300x300" className='feed-product__image'/>
                  <div className='feed-product__details'>
                    <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                      <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                      Dr.Kevin Stylish and Comfortable Men Sne
                      </div>
                    </div>
                    <div className='feed-product__items--price'>
                      <label className='fs-12 fw-600 orange-red'>Rp 249.950</label>
                    </div>
                  </div>
                </div>
                <div className='span4 feed-product__items feed-product__items--border-top'>
                  <img src="http://placehold.it/300x300" className='feed-product__image'/>
                  <div className='feed-product__details'>
                    <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                      <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                      Dr.Kevin Stylish and Comfortable Men Sne
                      </div>
                    </div>
                    <div className='feed-product__items--price'>
                      <label className='fs-12 fw-600 orange-red'>Rp 249.950</label>
                    </div>
                  </div>
                </div>
                <div className='span4 feed-product__items feed-product__items--border-top'>
                  <img src="http://placehold.it/300x300" className='feed-product__image'/>
                  <div className='feed-product__details'>
                    <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                      <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                      Dr.Kevin Stylish and Comfortable Men Sne
                      </div>
                    </div>
                    <div className='feed-product__items--price'>
                      <label className='fs-12 fw-600 orange-red'>Rp 249.950</label>
                    </div>
                  </div>
                </div>
              </div>
            </div> :
            this.props.productCount >= 6 ?
            <div>
              <div className='row-fluid'>
                <div className='span4 feed-product__items'>
                  <img src="http://placehold.it/300x300" className='feed-product__image'/>
                  <div className='feed-product__details'>
                    <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                      <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                      Dr.Kevin Stylish and Comfortable Men Sne
                      </div>
                    </div>
                    <div className='feed-product__items--price'>
                      <label className='fs-12 fw-600 orange-red'>Rp 249.950</label>
                    </div>
                  </div>
                </div>
                <div className='span4 feed-product__items'>
                  <img src="http://placehold.it/300x300" className='feed-product__image'/>
                  <div className='feed-product__details'>
                    <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                      <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                      Dr.Kevin Stylish and Comfortable Men Sne
                      </div>
                    </div>
                    <div className='feed-product__items--price'>
                      <label className='fs-12 fw-600 orange-red'>Rp 249.950</label>
                    </div>
                  </div>
                </div>
                <div className='span4 feed-product__items'>
                  <img src="http://placehold.it/300x300" className='feed-product__image'/>
                  <div className='feed-product__details'>
                    <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                      <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                      Dr.Kevin Stylish and Comfortable Men Sne
                      </div>
                    </div>
                    <div className='feed-product__items--price'>
                      <label className='fs-12 fw-600 orange-red'>Rp 249.950</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row-fluid'>
                <div className='span4 feed-product__items feed-product__items--border-top'>
                  <img src="http://placehold.it/300x300" className='feed-product__image'/>
                  <div className='feed-product__details'>
                    <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                      <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                      Dr.Kevin Stylish and Comfortable Men Sne
                      </div>
                    </div>
                    <div className='feed-product__items--price'>
                      <label className='fs-12 fw-600 orange-red'>Rp 249.950</label>
                    </div>
                  </div>
                </div>
                <div className='span4 feed-product__items feed-product__items--border-top'>
                  <img src="http://placehold.it/300x300" className='feed-product__image'/>
                  <div className='feed-product__details'>
                    <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                      <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                      Dr.Kevin Stylish and Comfortable Men Sne
                      </div>
                    </div>
                    <div className='feed-product__items--price'>
                      <label className='fs-12 fw-600 orange-red'>Rp 249.950</label>
                    </div>
                  </div>
                </div>
                <div className='span4 feed-product__items feed-product__items--border-top'>
                  {
                    this.props.productCount > 6 &&
                    <div className='feed-product__items--overlay'>
                      <span>+{ (this.props.productCount - 6) }</span>
                    </div>
                  }
                  <img src="http://placehold.it/300x300" className='feed-product__image'/>
                  <div className='feed-product__details'>
                    <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                      <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                      Dr.Kevin Stylish and Comfortable Men Sne
                      </div>
                    </div>
                    <div className='feed-product__items--price'>
                      <label className='fs-12 fw-600 orange-red'>Rp 249.950</label>
                    </div>
                  </div>
                </div>
              </div>
            </div> :
            <div></div>
          }			
          
        </div>
      </div>
    );
  }
})

export default FeedProduct;
