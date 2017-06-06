import React, { Component } from 'react';
import './FeedProduct.css';
import getImage from '../../lib/utils.js';

import ButtonShare from '../ButtonShare';
import ButtonWishlist from '../ButtonWishlist';

var FeedProduct = React.createClass({
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
  openDetailPage: function() {
    window.location = '/feed-detail.pl';
  },
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
          {
            this.props.productCount > 1 ?
            <div className='feed-product__seller-share'>
              <ButtonShare />
            </div> :
            <div className='feed-product__seller-buy'>
              <button className='btn'>
                Beli
              </button>
            </div>
          }
        </div>

        <div className='feed-product__content'>		

          {
            this.props.productCount === 1 ?
            <div>
              <div className='row-fluid'
                onMouseEnter={() => this.showWishlist(1)}
                onMouseLeave={() => this.hideWishlist(1)}
                onClick={() => this.openDetailPage()}>
                <div className='span6 feed-product__items feed-product__items--border-bottom'>
                  <img src={getImage('product-0.jpg')} className='feed-product__image'/>
                </div>
                <div className='span6 feed-product__items feed-product__items--border-bottom'>
                    { this.state.isShowWishlist1 && <ButtonWishlist checked={false} />}
                  <img src="http://placehold.it/300x300" className='feed-product__image'/>
                </div>
              </div>
              <div className='row-fluid'>
                <div className='span12 feed-product__items pt-0'>
                  <div className='feed-product__details'>
                    <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                      <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                      Sajadah Travel Tiara 024 Blue - Ramadhan Fashion
                      </div>
                    </div>
                    <div className='feed-product__items--price'>
                      <label className='fs-12 fw-600 orange-red'>Rp 89.100</label>
                    </div>
                  </div>
                </div>
              </div>
            </div> :
            this.props.productCount === 2 ?
            <div className='row-fluid'
              onClick={() => this.openDetailPage()}>
              <div className='span6 feed-product__items'
                onMouseEnter={() => this.showWishlist(1)}
                onMouseLeave={() => this.hideWishlist(1)}>
                { this.state.isShowWishlist1 && <ButtonWishlist checked={false} />}
                <img src={getImage('product-1.jpg')} className='feed-product__image'/>
                <div className='feed-product__details'>
                  <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                    <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                    Bantex Mouse Pad Blue #1788 01
                    </div>
                  </div>
                  <div className='feed-product__items--price'>
                    <label className='fs-12 fw-600 orange-red'>Rp 24.970</label>
                  </div>
                </div>
              </div>
              <div className='span6 feed-product__items'
                onMouseEnter={() => this.showWishlist(2)}
                onMouseLeave={() => this.hideWishlist(2)}>
                { this.state.isShowWishlist2 && <ButtonWishlist checked={false} />}
                <img src={getImage('product-2.jpg')} className='feed-product__image'/>
                <div className='feed-product__details'>
                  <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                    <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                    Linex Drawing Tube DT 74 40cm (74cm) Black #4884 10
                    </div>
                  </div>
                  <div className='feed-product__items--price'>
                    <label className='fs-12 fw-600 orange-red'>Rp 170.390</label>
                  </div>
                </div>
              </div>
            </div> :
            this.props.productCount === 3 ?
            <div className='row-fluid'
              onClick={() => this.openDetailPage()}>
              <div className='span4 feed-product__items'
                onMouseEnter={() => this.showWishlist(1)}
                onMouseLeave={() => this.hideWishlist(1)}>
                { this.state.isShowWishlist1 && <ButtonWishlist checked={false} />}
                <img src={getImage('product-3.jpg')} className='feed-product__image'/>
                <div className='feed-product__details'>
                  <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                    <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                    Bantex Stitching Artist Portfolio A1 Black #8006 10
                    </div>
                  </div>
                  <div className='feed-product__items--price'>
                    <label className='fs-12 fw-600 orange-red'>Rp 448.470</label>
                  </div>
                </div>
              </div>
              <div className='span4 feed-product__items'
                onMouseEnter={() => this.showWishlist(2)}
                onMouseLeave={() => this.hideWishlist(2)}>
                { this.state.isShowWishlist2 && <ButtonWishlist checked={false} />}
                <img src={getImage('product-4.jpg')} className='feed-product__image'/>
                <div className='feed-product__details'>
                  <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                    <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                    Bantex Stitching Artist Portfolio A1 Black #8005 10
                    </div>
                  </div>
                  <div className='feed-product__items--price'>
                    <label className='fs-12 fw-600 orange-red'>Rp 341.220</label>
                  </div>
                </div>
              </div>
              <div className='span4 feed-product__items'
                onMouseEnter={() => this.showWishlist(3)}
                onMouseLeave={() => this.hideWishlist(3)}>
                { this.state.isShowWishlist3 && <ButtonWishlist checked={false} />}
                <img src={getImage('product-5.jpg')} className='feed-product__image'/>
                <div className='feed-product__details'>
                  <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                    <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                     Bantex Stitching Artist Portfolio A1 Black #8003 10
                    </div>
                  </div>
                  <div className='feed-product__items--price'>
                    <label className='fs-12 fw-600 orange-red'>Rp 289.520</label>
                  </div>
                </div>
              </div>
            </div> :
            this.props.productCount === 4 ?
            <div>
              <div className='row-fluid'
                onClick={() => this.openDetailPage()}>
                <div className='span6 feed-product__items'
                  onMouseEnter={() => this.showWishlist(1)}
                  onMouseLeave={() => this.hideWishlist(1)}>
                  { this.state.isShowWishlist1 && <ButtonWishlist checked={false} />}
                  <img src={getImage('product-6.jpg')} className='feed-product__image'/>
                  <div className='feed-product__details'>
                    <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                      <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                      Bantex Ink Jet Photo Paper A4 Premium (10 sheets) 225gr
                      </div>
                    </div>
                    <div className='feed-product__items--price'>
                      <label className='fs-12 fw-600 orange-red'>Rp 74.030</label>
                    </div>
                  </div>
                </div>
                <div className='span6 feed-product__items'
                  onMouseEnter={() => this.showWishlist(2)}
                  onMouseLeave={() => this.hideWishlist(2)}>
                  { this.state.isShowWishlist2 && <ButtonWishlist checked={false} />}
                  <img src={getImage('product-7.jpg')} className='feed-product__image'/>
                  <div className='feed-product__details'>
                    <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                      <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                      Bantex Ink Jet Photo Paper A3 Premium (10 sheets) 225gr
                      </div>
                    </div>
                    <div className='feed-product__items--price'>
                      <label className='fs-12 fw-600 orange-red'>Rp 157.850</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row-fluid'
                onClick={() => this.openDetailPage()}>
                <div className='span6 feed-product__items feed-product__items--border-top'
                  onMouseEnter={() => this.showWishlist(3)}
                  onMouseLeave={() => this.hideWishlist(3)}>
                  { this.state.isShowWishlist3 && <ButtonWishlist checked={false} />}
                  <img src={getImage('product-8.jpg')} className='feed-product__image'/>
                  <div className='feed-product__details'>
                    <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                      <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                      Bantex Ink Jet Photo Paper A4 Glossy (10 sheets) 180gr #8001
                      </div>
                    </div>
                    <div className='feed-product__items--price'>
                      <label className='fs-12 fw-600 orange-red'>Rp 53.750</label>
                    </div>
                  </div>
                </div>
                <div className='span6 feed-product__items feed-product__items--border-top'
                  onMouseEnter={() => this.showWishlist(4)}
                  onMouseLeave={() => this.hideWishlist(4)}>
                  { this.state.isShowWishlist4 && <ButtonWishlist checked={true} />}
                  <img src={getImage('product-9.jpg')} className='feed-product__image'/>
                  <div className='feed-product__details'>
                    <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                      <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                      Bantex Matt Coated Ink Jet Paper A4(60 sheets) 95gr
                      </div>
                    </div>
                    <div className='feed-product__items--price'>
                      <label className='fs-12 fw-600 orange-red'>Rp 95.370</label>
                    </div>
                  </div>
                </div>
              </div>
            </div> :
            this.props.productCount === 5 ?
            <div>
              <div className='row-fluid'
                onClick={() => this.openDetailPage()}>
                <div className='span6 feed-product__items'
                  onMouseEnter={() => this.showWishlist(1)}
                  onMouseLeave={() => this.hideWishlist(1)}>
                  { this.state.isShowWishlist1 && <ButtonWishlist checked={false} />}
                  <img src={getImage('product-10.jpg')} className='feed-product__image'/>
                  <div className='feed-product__details'>
                    <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                      <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                      Bantex Matt Coated Ink Jet Paper A4(30 sheets) 95gr #8001
                      </div>
                    </div>
                    <div className='feed-product__items--price'>
                      <label className='fs-12 fw-600 orange-red'>Rp 59.510</label>
                    </div>
                  </div>
                </div>
                <div className='span6 feed-product__items'
                  onMouseEnter={() => this.showWishlist(2)}
                  onMouseLeave={() => this.hideWishlist(2)}>
                  { this.state.isShowWishlist2 && <ButtonWishlist checked={false} />}
                  <img src={getImage('product-11.jpg')} className='feed-product__image'/>
                  <div className='feed-product__details'>
                    <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                      <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                      Linex Drawing Tube DT 124 70cm (124cm) Black #4848 10
                      </div>
                    </div>
                    <div className='feed-product__items--price'>
                      <label className='fs-12 fw-600 orange-red'>Rp 281.490</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row-fluid'
                onClick={() => this.openDetailPage()}>
                <div className='span4 feed-product__items feed-product__items--border-top'
                  onMouseEnter={() => this.showWishlist(3)}
                  onMouseLeave={() => this.hideWishlist(3)}>
                  { this.state.isShowWishlist3 && <ButtonWishlist checked={false} />}
                  <img src={getImage('product-12.jpg')} className='feed-product__image'/>
                  <div className='feed-product__details'>
                    <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                      <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                      Bantex Slanted Sign Holder A8 Transparent #8857 08
                      </div>
                    </div>
                    <div className='feed-product__items--price'>
                      <label className='fs-12 fw-600 orange-red'>Rp 11.770</label>
                    </div>
                  </div>
                </div>
                <div className='span4 feed-product__items feed-product__items--border-top'
                  onMouseEnter={() => this.showWishlist(4)}
                  onMouseLeave={() => this.hideWishlist(4)}>
                  { this.state.isShowWishlist4 && <ButtonWishlist checked={true} />}
                  <img src={getImage('product-13.jpg')} className='feed-product__image'/>
                  <div className='feed-product__details'>
                    <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                      <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                      Bantex Slanted Holder Transparent #8856 08
                      </div>
                    </div>
                    <div className='feed-product__items--price'>
                      <label className='fs-12 fw-600 orange-red'>Rp 34.320</label>
                    </div>
                  </div>
                </div>
                <div className='span4 feed-product__items feed-product__items--border-top'
                  onMouseEnter={() => this.showWishlist(5)}
                  onMouseLeave={() => this.hideWishlist(5)}>
                  { this.state.isShowWishlist5 && <ButtonWishlist checked={false} />}
                  <img src={getImage('product-14.jpg')} className='feed-product__image'/>
                  <div className='feed-product__details'>
                    <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                      <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                      Bantex Stand Holder A4 Transparent #8854 08
                      </div>
                    </div>
                    <div className='feed-product__items--price'>
                      <label className='fs-12 fw-600 orange-red'>Rp 87.890</label>
                    </div>
                  </div>
                </div>
              </div>
            </div> :
            this.props.productCount >= 6 ?
            <div>
              <div className='row-fluid'
                onClick={() => this.openDetailPage()}>
                <div className='span4 feed-product__items'
                  onMouseEnter={() => this.showWishlist(1)}
                  onMouseLeave={() => this.hideWishlist(1)}>
                  { this.state.isShowWishlist1 && <ButtonWishlist checked={false} />}
                  <img src={getImage('product-15.jpg')} className='feed-product__image'/>
                  <div className='feed-product__details'>
                    <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                      <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                      Bantex Slanted Sign Holder A5 Transparent #8853 08
                      </div>
                    </div>
                    <div className='feed-product__items--price'>
                      <label className='fs-12 fw-600 orange-red'>Rp 48.480</label>
                    </div>
                  </div>
                </div>
                <div className='span4 feed-product__items'
                  onMouseEnter={() => this.showWishlist(2)}
                  onMouseLeave={() => this.hideWishlist(2)}>
                  { this.state.isShowWishlist2 && <ButtonWishlist checked={false} />}
                  <img src={getImage('product-16.jpg')} className='feed-product__image'/>
                  <div className='feed-product__details'>
                    <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                      <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                      Bantex Slanted Sign Holder A4 Transparent #8852 08
                      </div>
                    </div>
                    <div className='feed-product__items--price'>
                      <label className='fs-12 fw-600 orange-red'>Rp 75.240</label>
                    </div>
                  </div>
                </div>
                <div className='span4 feed-product__items'
                  onMouseEnter={() => this.showWishlist(3)}
                  onMouseLeave={() => this.hideWishlist(3)}>
                  { this.state.isShowWishlist3 && <ButtonWishlist checked={false} />}
                  <img src={getImage('product-17.jpg')} className='feed-product__image'/>
                  <div className='feed-product__details'>
                    <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                      <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                      Bantex Adhesive A4 Pocket (5pcs/pack) #8877 00
                      </div>
                    </div>
                    <div className='feed-product__items--price'>
                      <label className='fs-12 fw-600 orange-red'>Rp 97.020</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row-fluid'
                onClick={() => this.openDetailPage()}>
                <div className='span4 feed-product__items feed-product__items--border-top'
                  onMouseEnter={() => this.showWishlist(4)}
                  onMouseLeave={() => this.hideWishlist(4)}>
                  { this.state.isShowWishlist4 && <ButtonWishlist checked={true} />}
                  <img src={getImage('product-18.jpg')} className='feed-product__image'/>
                  <div className='feed-product__details'>
                    <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                      <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                      Bantex Adhesive Business Card (10 pcs/pack) #8876 00
                      </div>
                    </div>
                    <div className='feed-product__items--price'>
                      <label className='fs-12 fw-600 orange-red'>Rp 27.830</label>
                    </div>
                  </div>
                </div>
                <div className='span4 feed-product__items feed-product__items--border-top'
                  onMouseEnter={() => this.showWishlist(5)}
                  onMouseLeave={() => this.hideWishlist(5)}>
                  { this.state.isShowWishlist5 && <ButtonWishlist checked={false} />}
                  <img src={getImage('product-19.jpg')} className='feed-product__image'/>
                  <div className='feed-product__details'>
                    <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                      <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                      Bantex Slanted Sign Holder A8 Transparent #8875 08
                      </div>
                    </div>
                    <div className='feed-product__items--price'>
                      <label className='fs-12 fw-600 orange-red'>Rp 30.712</label>
                    </div>
                  </div>
                </div>
                <div className='span4 feed-product__items feed-product__items--border-top'
                    onMouseEnter={() => this.showWishlist(6)}
                    onMouseLeave={() => this.hideWishlist(6)}>
                  {
                    this.props.productCount > 6 ?
                    <div className='feed-product__items--overlay'>
                      <span>+{ (this.props.productCount - 6) }</span>
                    </div> :
                    this.state.isShowWishlist6 && <ButtonWishlist checked={false} />
                  }
                  <img src={getImage('product-20.jpg')} className='feed-product__image'/>
                  <div className='feed-product__details'>
                    <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                      <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                      Bantex Adhesive Filling Strips (10pcs/pack) #8875 00
                      </div>
                    </div>
                    <div className='feed-product__items--price'>
                      <label className='fs-12 fw-600 orange-red'>Rp 23.650</label>
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
