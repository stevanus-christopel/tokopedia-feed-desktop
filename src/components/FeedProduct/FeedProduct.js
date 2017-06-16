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
  openPage: function(url) {
    window.location = url;
  },
  openDetailPage: function() {
    window.location = 'http://new.sh-steve.ndvl/feed-detail.pl';
  },
  render: function() {
    return (
      <div className='feed-product' id={`feedplus-container-${this.props.feed.id}`}>
        <div className='feed-product__header'>
          <div className='feed-product__seller-photo'>
            <img alt='' src={this.props.feed.source.shop.avatar} />
          </div>
          <div className='feed-product__seller-activity'>
            <div className='feed-product__seller-activity--text'>
              <span className='fw-600 feed-product__seller-activity--text-shop'
              onClick={() => this.openPage(this.props.feed.source.shop.url)}>{this.props.feed.source.shop.name} </span>
            { this.props.feed.content.status_activity.activity + ' ' } 
            <span className='fw-600 feed-product__seller-activity--text-product'
            onClick={() => this.openDetailPage()}>
              { this.props.feed.content.status_activity.amount + ' produk' }
            </span>
            </div>
            <div className='feed-product__seller-activity--time'>3 jam</div>
          </div>
          {
            this.props.feed.content.total_product > 1 ?
            <div className='feed-product__seller-share'>
              <ButtonShare item={ this.props.feed } />
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
            this.props.feed.content.total_product === 1 ?
            <div>
              <div className='row-fluid'
                onMouseEnter={() => this.showWishlist(1)}
                onMouseLeave={() => this.hideWishlist(1)}
                onClick={() => this.openPage(this.props.feed.content.products[0].url)}>
                <div className='span6 feed-product__items feed-product__items--border-bottom feed-product__items--no-border-right'>
                  <img src={this.props.feed.content.products[0].image_single} className='feed-product__image'/>
                </div>
                <div className='span6 feed-product__items feed-product__items--border-bottom'>
                    { this.state.isShowWishlist1 && <ButtonWishlist checked={this.props.feed.content.products[0].wishlist} />}
                  <div className='feed-product__items--empty'>
                    <img src={getImage('no-image-available.png')} />
                    <div>Foto lain tidak tersedia</div>
                  </div>
                </div>
              </div>
              <div className='row-fluid'>
                <div className='span12 feed-product__items pt-0'>
                  <div className='feed-product__details'>
                    <div className='fs-13 fw-600 lh-17 feed-product__items--name'>
                      <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                      {this.props.feed.content.products[0].name}
                      </div>
                    </div>
                    <div className='feed-product__items--price'>
                      <label className='fs-13 fw-600 orange-red'>{this.props.feed.content.products[0].price}</label>
                    </div>
                  </div>
                </div>
              </div>
            </div> :
            this.props.feed.content.total_product === 2 ?
            <div className='row-fluid'>
              <div className='span6 feed-product__items'
                onMouseEnter={() => this.showWishlist(1)}
                onMouseLeave={() => this.hideWishlist(1)}
                onClick={() => this.openPage(this.props.feed.content.products[0].url)}>
                { this.state.isShowWishlist1 && <ButtonWishlist checked={this.props.feed.content.products[0].wishlist} />}
                <img src={this.props.feed.content.products[0].image_single} className='feed-product__image'/>
                <div className='feed-product__details'>
                  <div className='fs-13 fw-600 lh-17 feed-product__items--name'>
                    <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                    {this.props.feed.content.products[0].name}
                    </div>
                  </div>
                  <div className='feed-product__items--price'>
                    <label className='fs-13 fw-600 orange-red'>{this.props.feed.content.products[0].price}</label>
                  </div>
                </div>
              </div>
              <div className='span6 feed-product__items'
                onMouseEnter={() => this.showWishlist(2)}
                onMouseLeave={() => this.hideWishlist(2)}
                onClick={() => this.openPage(this.props.feed.content.products[1].url)}>
                { this.state.isShowWishlist2 && <ButtonWishlist checked={this.props.feed.content.products[1].wishlist} />}
                <img src={this.props.feed.content.products[1].image_single} className='feed-product__image'/>
                <div className='feed-product__details'>
                  <div className='fs-13 fw-600 lh-17 feed-product__items--name'>
                    <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                    {this.props.feed.content.products[1].name}
                    </div>
                  </div>
                  <div className='feed-product__items--price'>
                    <label className='fs-13 fw-600 orange-red'>{this.props.feed.content.products[1].price}</label>
                  </div>
                </div>
              </div>
            </div> :
            this.props.feed.content.total_product === 3 ?
            <div className='row-fluid'>
              <div className='span4 feed-product__items'
                onMouseEnter={() => this.showWishlist(1)}
                onMouseLeave={() => this.hideWishlist(1)}
                onClick={() => this.openPage(this.props.feed.content.products[0].url)}>
                { this.state.isShowWishlist1 && <ButtonWishlist checked={this.props.feed.content.products[0].wishlist} />}
                <img src={this.props.feed.content.products[0].image} className='feed-product__image'/>
                <div className='feed-product__details'>
                  <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                    <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                    {this.props.feed.content.products[0].name}
                    </div>
                  </div>
                  <div className='feed-product__items--price'>
                    <label className='fs-12 fw-600 orange-red'>{this.props.feed.content.products[0].price}</label>
                  </div>
                </div>
              </div>
              <div className='span4 feed-product__items'
                onMouseEnter={() => this.showWishlist(2)}
                onMouseLeave={() => this.hideWishlist(2)}
                onClick={() => this.openPage(this.props.feed.content.products[1].url)}>
                { this.state.isShowWishlist2 && <ButtonWishlist checked={this.props.feed.content.products[1].wishlist} />}
                <img src={this.props.feed.content.products[1].image} className='feed-product__image'/>
                <div className='feed-product__details'>
                  <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                    <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                    {this.props.feed.content.products[1].name}
                    </div>
                  </div>
                  <div className='feed-product__items--price'>
                    <label className='fs-12 fw-600 orange-red'>{this.props.feed.content.products[1].price}</label>
                  </div>
                </div>
              </div>
              <div className='span4 feed-product__items'
                onMouseEnter={() => this.showWishlist(3)}
                onMouseLeave={() => this.hideWishlist(3)}
                onClick={() => this.openPage(this.props.feed.content.products[2].url)}>
                { this.state.isShowWishlist3 && <ButtonWishlist checked={this.props.feed.content.products[2].wishlist} />}
                <img src={this.props.feed.content.products[2].image} className='feed-product__image'/>
                <div className='feed-product__details'>
                  <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                    <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                     {this.props.feed.content.products[2].name}
                    </div>
                  </div>
                  <div className='feed-product__items--price'>
                    <label className='fs-12 fw-600 orange-red'>{this.props.feed.content.products[2].price}</label>
                  </div>
                </div>
              </div>
            </div> :
            this.props.feed.content.total_product === 4 ?
            <div>
              <div className='row-fluid'>
                <div className='span6 feed-product__items'
                  onMouseEnter={() => this.showWishlist(1)}
                  onMouseLeave={() => this.hideWishlist(1)}
                  onClick={() => this.openPage(this.props.feed.content.products[0].url)}>
                  { this.state.isShowWishlist1 && <ButtonWishlist checked={this.props.feed.content.products[0].wishlist} />}
                  <img src={this.props.feed.content.products[0].image_single} className='feed-product__image'/>
                  <div className='feed-product__details'>
                    <div className='fs-13 fw-600 lh-17 feed-product__items--name'>
                      <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                      {this.props.feed.content.products[0].name}
                      </div>
                    </div>
                    <div className='feed-product__items--price'>
                      <label className='fs-13 fw-600 orange-red'>{this.props.feed.content.products[0].price}</label>
                    </div>
                  </div>
                </div>
                <div className='span6 feed-product__items'
                  onMouseEnter={() => this.showWishlist(2)}
                  onMouseLeave={() => this.hideWishlist(2)}
                  onClick={() => this.openPage(this.props.feed.content.products[1].url)}>
                  { this.state.isShowWishlist2 && <ButtonWishlist checked={this.props.feed.content.products[1].wishlist} />}
                  <img src={this.props.feed.content.products[1].image_single} className='feed-product__image'/>
                  <div className='feed-product__details'>
                    <div className='fs-13 fw-600 lh-17 feed-product__items--name'>
                      <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                      {this.props.feed.content.products[1].name}
                      </div>
                    </div>
                    <div className='feed-product__items--price'>
                      <label className='fs-13 fw-600 orange-red'>{this.props.feed.content.products[1].price}</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row-fluid'>
                <div className='span6 feed-product__items feed-product__items--border-top'
                  onMouseEnter={() => this.showWishlist(3)}
                  onMouseLeave={() => this.hideWishlist(3)}
                  onClick={() => this.openPage(this.props.feed.content.products[2].url)}>
                  { this.state.isShowWishlist3 && <ButtonWishlist checked={this.props.feed.content.products[2].wishlist} />}
                  <img src={this.props.feed.content.products[2].image_single} className='feed-product__image'/>
                  <div className='feed-product__details'>
                    <div className='fs-13 fw-600 lh-17 feed-product__items--name'>
                      <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                      {this.props.feed.content.products[2].name}
                      </div>
                    </div>
                    <div className='feed-product__items--price'>
                      <label className='fs-13 fw-600 orange-red'>{this.props.feed.content.products[2].price}</label>
                    </div>
                  </div>
                </div>
                <div className='span6 feed-product__items feed-product__items--border-top'
                  onMouseEnter={() => this.showWishlist(4)}
                  onMouseLeave={() => this.hideWishlist(4)}
                  onClick={() => this.openPage(this.props.feed.content.products[3].url)}>
                  { this.state.isShowWishlist4 && <ButtonWishlist checked={this.props.feed.content.products[3].wishlist} />}
                  <img src={this.props.feed.content.products[3].image_single} className='feed-product__image'/>
                  <div className='feed-product__details'>
                    <div className='fs-13 fw-600 lh-17 feed-product__items--name'>
                      <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                      {this.props.feed.content.products[3].name}
                      </div>
                    </div>
                    <div className='feed-product__items--price'>
                      <label className='fs-13 fw-600 orange-red'>{this.props.feed.content.products[3].price}</label>
                    </div>
                  </div>
                </div>
              </div>
            </div> :
            this.props.feed.content.total_product === 5 ?
            <div>
              <div className='row-fluid'>
                <div className='span6 feed-product__items'
                  onMouseEnter={() => this.showWishlist(1)}
                  onMouseLeave={() => this.hideWishlist(1)}
                  onClick={() => this.openPage(this.props.feed.content.products[0].url)}>
                  { this.state.isShowWishlist1 && <ButtonWishlist checked={this.props.feed.content.products[0].wishlist} />}
                  <img src={this.props.feed.content.products[0].image_single} className='feed-product__image'/>
                  <div className='feed-product__details'>
                    <div className='fs-13 fw-600 lh-17 feed-product__items--name'>
                      <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                      {this.props.feed.content.products[0].name}
                      </div>
                    </div>
                    <div className='feed-product__items--price'>
                      <label className='fs-13 fw-600 orange-red'>{this.props.feed.content.products[0].price}</label>
                    </div>
                  </div>
                </div>
                <div className='span6 feed-product__items'
                  onMouseEnter={() => this.showWishlist(2)}
                  onMouseLeave={() => this.hideWishlist(2)}
                  onClick={() => this.openPage(this.props.feed.content.products[1].url)}>
                  { this.state.isShowWishlist2 && <ButtonWishlist checked={this.props.feed.content.products[1].wishlist} />}
                  <img src={this.props.feed.content.products[1].image_single} className='feed-product__image'/>
                  <div className='feed-product__details'>
                    <div className='fs-13 fw-600 lh-17 feed-product__items--name'>
                      <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                      {this.props.feed.content.products[1].name}
                      </div>
                    </div>
                    <div className='feed-product__items--price'>
                      <label className='fs-13 fw-600 orange-red'>{this.props.feed.content.products[1].price}</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row-fluid'>
                <div className='span4 feed-product__items feed-product__items--border-top'
                  onMouseEnter={() => this.showWishlist(3)}
                  onMouseLeave={() => this.hideWishlist(3)}
                  onClick={() => this.openPage(this.props.feed.content.products[2].url)}>
                  { this.state.isShowWishlist3 && <ButtonWishlist checked={this.props.feed.content.products[2].wishlist} />}
                  <img src={this.props.feed.content.products[2].image} className='feed-product__image'/>
                  <div className='feed-product__details'>
                    <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                      <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                      {this.props.feed.content.products[2].name}
                      </div>
                    </div>
                    <div className='feed-product__items--price'>
                      <label className='fs-12 fw-600 orange-red'>{this.props.feed.content.products[2].price}</label>
                    </div>
                  </div>
                </div>
                <div className='span4 feed-product__items feed-product__items--border-top'
                  onMouseEnter={() => this.showWishlist(4)}
                  onMouseLeave={() => this.hideWishlist(4)}
                  onClick={() => this.openPage(this.props.feed.content.products[3].url)}>
                  { this.state.isShowWishlist4 && <ButtonWishlist checked={this.props.feed.content.products[3].wishlist} />}
                  <img src={this.props.feed.content.products[3].image} className='feed-product__image'/>
                  <div className='feed-product__details'>
                    <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                      <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                      {this.props.feed.content.products[3].name}
                      </div>
                    </div>
                    <div className='feed-product__items--price'>
                      <label className='fs-12 fw-600 orange-red'>{this.props.feed.content.products[3].price}</label>
                    </div>
                  </div>
                </div>
                <div className='span4 feed-product__items feed-product__items--border-top'
                  onMouseEnter={() => this.showWishlist(5)}
                  onMouseLeave={() => this.hideWishlist(5)}
                  onClick={() => this.openPage(this.props.feed.content.products[4].url)}>
                  { this.state.isShowWishlist5 && <ButtonWishlist checked={this.props.feed.content.products[4].wishlist} />}
                  <img src={this.props.feed.content.products[4].image} className='feed-product__image'/>
                  <div className='feed-product__details'>
                    <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                      <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                      {this.props.feed.content.products[4].name}
                      </div>
                    </div>
                    <div className='feed-product__items--price'>
                      <label className='fs-12 fw-600 orange-red'>{this.props.feed.content.products[4].price}</label>
                    </div>
                  </div>
                </div>
              </div>
            </div> :
            this.props.feed.content.total_product >= 6 ?
            <div>
              <div className='row-fluid'>
                <div className='span4 feed-product__items'
                  onMouseEnter={() => this.showWishlist(1)}
                  onMouseLeave={() => this.hideWishlist(1)}
                  onClick={() => this.openPage(this.props.feed.content.products[0].url)}>
                  { this.state.isShowWishlist1 && <ButtonWishlist checked={this.props.feed.content.products[0].wishlist} />}
                  <img src={this.props.feed.content.products[0].image} className='feed-product__image'/>
                  <div className='feed-product__details'>
                    <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                      <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                      {this.props.feed.content.products[0].name}
                      </div>
                    </div>
                    <div className='feed-product__items--price'>
                      <label className='fs-12 fw-600 orange-red'>{this.props.feed.content.products[0].price}</label>
                    </div>
                  </div>
                </div>
                <div className='span4 feed-product__items'
                  onMouseEnter={() => this.showWishlist(2)}
                  onMouseLeave={() => this.hideWishlist(2)}
                  onClick={() => this.openPage(this.props.feed.content.products[1].url)}>
                  { this.state.isShowWishlist2 && <ButtonWishlist checked={this.props.feed.content.products[1].wishlist} />}
                  <img src={this.props.feed.content.products[1].image} className='feed-product__image'/>
                  <div className='feed-product__details'>
                    <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                      <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                      {this.props.feed.content.products[1].name}
                      </div>
                    </div>
                    <div className='feed-product__items--price'>
                      <label className='fs-12 fw-600 orange-red'>{this.props.feed.content.products[1].price}</label>
                    </div>
                  </div>
                </div>
                <div className='span4 feed-product__items'
                  onMouseEnter={() => this.showWishlist(3)}
                  onMouseLeave={() => this.hideWishlist(3)}
                  onClick={() => this.openPage(this.props.feed.content.products[2].url)}>
                  { this.state.isShowWishlist3 && <ButtonWishlist checked={this.props.feed.content.products[2].wishlist} />}
                  <img src={this.props.feed.content.products[2].image} className='feed-product__image'/>
                  <div className='feed-product__details'>
                    <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                      <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                      {this.props.feed.content.products[2].name}
                      </div>
                    </div>
                    <div className='feed-product__items--price'>
                      <label className='fs-12 fw-600 orange-red'>{this.props.feed.content.products[2].price}</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row-fluid'>
                <div className='span4 feed-product__items feed-product__items--border-top'
                  onMouseEnter={() => this.showWishlist(4)}
                  onMouseLeave={() => this.hideWishlist(4)}
                  onClick={() => this.openPage(this.props.feed.content.products[3].url)}>
                  { this.state.isShowWishlist4 && <ButtonWishlist checked={this.props.feed.content.products[3].wishlist} />}
                  <img src={this.props.feed.content.products[3].image} className='feed-product__image'/>
                  <div className='feed-product__details'>
                    <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                      <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                      {this.props.feed.content.products[3].name}
                      </div>
                    </div>
                    <div className='feed-product__items--price'>
                      <label className='fs-12 fw-600 orange-red'>{this.props.feed.content.products[3].price}</label>
                    </div>
                  </div>
                </div>
                <div className='span4 feed-product__items feed-product__items--border-top'
                  onMouseEnter={() => this.showWishlist(5)}
                  onMouseLeave={() => this.hideWishlist(5)}
                  onClick={() => this.openPage(this.props.feed.content.products[4].url)}>
                  { this.state.isShowWishlist5 && <ButtonWishlist checked={this.props.feed.content.products[4].wishlist} />}
                  <img src={this.props.feed.content.products[4].image} className='feed-product__image'/>
                  <div className='feed-product__details'>
                    <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                      <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                      {this.props.feed.content.products[4].name}
                      </div>
                    </div>
                    <div className='feed-product__items--price'>
                      <label className='fs-12 fw-600 orange-red'>{this.props.feed.content.products[4].price}</label>
                    </div>
                  </div>
                </div>
                <div className='span4 feed-product__items feed-product__items--border-top'
                    onMouseEnter={() => this.showWishlist(6)}
                    onMouseLeave={() => this.hideWishlist(6)}>
                  {
                    this.props.feed.content.total_product > 6 ?
                    <div className='feed-product__items--overlay'
                    onClick={() => this.openDetailPage()}>
                      <span>+{ (this.props.feed.content.total_product - 6) }</span>
                    </div> :
                    this.state.isShowWishlist6 && <ButtonWishlist checked={this.props.feed.content.products[5].wishlist} />
                  }
                  <img src={this.props.feed.content.products[5].image} className='feed-product__image'
                  onClick={() => this.openPage(this.props.feed.content.products[5].url)}/>
                  <div className='feed-product__details'>
                    <div className='fs-12 fw-600 lh-17 feed-product__items--name'>
                      <div className="detail__name js-ellipsis" data-js-ellipsis-limit="15">
                      {this.props.feed.content.products[5].name}
                      </div>
                    </div>
                    <div className='feed-product__items--price'>
                      <label className='fs-12 fw-600 orange-red'>{this.props.feed.content.products[5].price}</label>
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
