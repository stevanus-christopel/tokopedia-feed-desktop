



var FeedView = React.createClass({
  displayName: 'FeedView',

  getParameterByName: function (name, url) {
    var self = this;
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  },
  componentDidMount: function () {
    var obj = { "limit": 3, "userID": 5510345, "cursor": "" };
    this.fetchData(obj);
  },
  fetchData: function (obj) {
    var self = this;
    let header = new Headers({
      'Content-Type': 'application/jsonp',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    return fetch('http://localhost:3000/graphql', {
      method: 'post',
      mode: 'cors',
      headers: header,
      body: JSON.stringify({
        query: FeedQuery,
        variable: obj
      }),
      credentials: 'include'
    }).then(response => response.json()).then(response => {
      console.log('hello');
    });
  },
  render: function () {
    return React.createElement(
      'div',
      { className: 'feed' },
      React.createElement(
        'div',
        { className: 'feed__main-content' },
        this.getParameterByName('p') === 'empty' ? React.createElement(
          'div',
          null,
          React.createElement(FeedEmpty, null),
          React.createElement(FeedTopAdsShop, null),
          React.createElement(FeedTopAdsShop, null),
          React.createElement(FeedTopAdsShop, null)
        ) : this.getParameterByName('p') === 'less' ? React.createElement(
          'div',
          null,
          React.createElement(FeedSearchShop, null),
          React.createElement(FeedTopAdsShop, null),
          React.createElement(FeedProduct, { productCount: 1 }),
          React.createElement(FeedProduct, { productCount: 2 }),
          React.createElement(FeedOfficialStoreProduct, null),
          React.createElement(FeedTopAdsShop, null),
          React.createElement(FeedTopAdsShop, null)
        ) : React.createElement(
          'div',
          null,
          React.createElement(FeedProduct, { productCount: 1 }),
          React.createElement(FeedProduct, { productCount: 2 }),
          React.createElement(FeedOfficialStoreProduct, null),
          React.createElement(FeedProduct, { productCount: 3 }),
          React.createElement(FeedMarketingPromo, null),
          React.createElement(FeedProduct, { productCount: 4 }),
          React.createElement(FeedProduct, { productCount: 5 }),
          React.createElement(FeedProduct, { productCount: 6 }),
          React.createElement(FeedProduct, { productCount: 7 }),
          React.createElement(FeedOfficialStore, null),
          React.createElement(FeedInspiration, null),
          React.createElement(FeedTopAdsProduct, null)
        ),
        React.createElement(FeedTokopediaStory, null),
        React.createElement(FeedSellerStory, null)
      ),
      React.createElement(
        'div',
        { className: 'feed__right-sidebar' },
        React.createElement(FeedHotList, null)
      )
    );
  }
});



var FeedDetailView = React.createClass({
  displayName: 'FeedDetailView',

  render: function () {
    return React.createElement(
      'div',
      { className: 'feed-detail' },
      React.createElement(
        'div',
        { className: 'mr-40 feed-detail__left-sidebar' },
        React.createElement(
          'a',
          { href: 'javascript:window.history.back()' },
          React.createElement('img', { className: 'feed-detail__back-icon', src: getImage('arrow-hijau.png'), alt: '' }),
          React.createElement(
            'span',
            { className: 'fs-12 va-middle green' },
            'Kembali ke Feed'
          )
        )
      ),
      React.createElement(
        'div',
        { className: 'feed-detail__main-content' },
        React.createElement(FeedProductDetail, null)
      ),
      React.createElement(
        'div',
        { className: 'feed-detail__right-sidebar' },
        React.createElement(FeedHotList, null)
      )
    );
  }
});


var ButtonShare = React.createClass({
  displayName: 'ButtonShare',

  getInitialState: function () {
    return {
      isShowPopover: false
    };
  },
  isPopoverShowed: function () {
    if (this.state.isShowPopover === true) {
      this.setState({ isShowPopover: false });
    }
  },
  // togglePopover: function() {
  //   if(!this.state.isShowPopover) {
  //     document.getElementsByClassName('button-share__icon-container').onmouseover = this.togglePopover;
  //   } else {
  //     document.getElementsByClassName('button-share__icon-container').onmouseover = null;
  //   }

  //   this.setState({
  //     isShowPopover: !this.state.isShowPopover
  //   });
  // },
  render: function () {
    return React.createElement(
      'div',
      { onMouseLeave: () => this.setState({ isShowPopover: false }) },
      React.createElement(
        'button',
        { className: 'btn button-share', onClick: () => this.isPopoverShowed(), onMouseOver: () => this.setState({ isShowPopover: true }) },
        React.createElement('img', { className: 'button-share--icon', alt: '', src: getImage('icon-btn-share.png') }),
        ' Bagikan'
      ),
      this.state.isShowPopover === true && React.createElement(
        'div',
        { className: 'button-share__icon-container' },
        React.createElement('img', { className: 'button-share--arrow', alt: '', src: getImage('arrow-up.png') }),
        React.createElement('img', { className: 'button-share--link', alt: '', src: getImage('icon-fb.png') }),
        React.createElement('img', { className: 'button-share--link', alt: '', src: getImage('icon-twitter.png') }),
        React.createElement('img', { className: 'button-share--link', alt: '', src: getImage('icon-g.png') }),
        React.createElement('img', { className: 'button-share--link', alt: '', src: getImage('icon-wa.png') }),
        React.createElement('img', { className: 'button-share--link', alt: '', src: getImage('icon-line.png') }),
        React.createElement('img', { className: 'button-share--link', alt: '', src: getImage('icon-link.png') })
      )
    );
  }
});



var ButtonWishlist = React.createClass({
  displayName: 'ButtonWishlist',

  getInitialState: function () {
    return {
      checked: this.props.checked
    };
  },
  toggleCheck: function (e) {
    this.setState({
      checked: !this.state.checked
    });
    console.log(e);
    e.stopPropagation();
    e.preventDefault();
  },
  render: function () {
    return React.createElement('img', { className: 'button-wishlist', alt: '', onClick: e => this.toggleCheck(e), src: this.state.checked === true ? getImage('wishlist.png') : getImage('wishlist-empty.png') });
  }
});



var FeedEmpty = React.createClass({
  displayName: 'FeedEmpty',

  render: function () {
    return React.createElement(
      'div',
      { className: 'feed-empty' },
      React.createElement(
        'div',
        { className: 'feed-empty__image' },
        React.createElement('img', { alt: '', src: getImage('empty-state.png') })
      ),
      React.createElement(
        'div',
        { className: 'feed-empty__text' },
        React.createElement(
          'h5',
          { className: 'fs-14 fw-600' },
          'Oops, feed masih kosong'
        ),
        React.createElement(
          'p',
          { className: 'fs-12' },
          'Segera favoritkan toko yang Anda sukai untuk mendapatkan update produk terbaru disini.'
        ),
        React.createElement(
          'button',
          { type: 'button', className: 'btn btn-action' },
          'Cari Toko'
        )
      )
    );
  }
});



var FeedHotList = React.createClass({
	displayName: 'FeedHotList',

	render: function () {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'div',
				{ className: 'feed-hot-lists-full' },
				React.createElement(
					'div',
					{ className: 'row-fluid feed-hot-lists__top-banner' },
					React.createElement('img', { src: getImage('ramadhan-hotlist.png') })
				),
				React.createElement(
					'div',
					{ className: 'row-fluid feed-hot-lists-showcases' },
					React.createElement(
						'div',
						{ className: 'span6 m-0 feed-hot-lists__items' },
						React.createElement('img', { src: getImage('sunglasses-hl.png') })
					),
					React.createElement(
						'div',
						{ className: 'span6 m-0 feed-hot-lists__items' },
						React.createElement('img', { src: getImage('makeup-hl.png') })
					)
				),
				React.createElement(
					'div',
					{ className: 'row-fluid feed-hot-lists-showcases' },
					React.createElement(
						'div',
						{ className: 'span6 m-0 feed-hot-lists__items' },
						React.createElement('img', { src: getImage('pashmina-hl.png') })
					),
					React.createElement(
						'div',
						{ className: 'span6 m-0 feed-hot-lists__items' },
						React.createElement('img', { src: getImage('aksesoris-hl.png') })
					)
				)
			),
			React.createElement(
				'div',
				{ className: 'row-fluid feed-hot-lists__top-banner' },
				React.createElement('img', { src: getImage('kongkow-hotlist.png'), className: 'pt-20' })
			),
			React.createElement(
				'div',
				{ className: 'row-fluid feed-hot-lists__top-banner' },
				React.createElement('img', { src: getImage('tampil-hotlist.png'), className: 'pt-20' })
			)
		);
	}
});




var FeedInspiration = React.createClass({
  displayName: 'FeedInspiration',

  getInitialState: function () {
    return {
      isShowWishlist1: false,
      isShowWishlist2: false,
      isShowWishlist3: false,
      isShowWishlist4: false,
      isShowWishlist5: false,
      isShowWishlist6: false
    };
  },
  showWishlist: function (elementNumber) {
    switch (elementNumber) {
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
  hideWishlist: function (elementNumber) {
    switch (elementNumber) {
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
  render: function () {
    return React.createElement(
      'div',
      { className: 'feed-inspiration' },
      React.createElement(
        'div',
        { className: 'feed-inspiration__header' },
        'Inspirasi dari Minat Anda'
      ),
      React.createElement(
        'div',
        { className: 'feed-inspiration__content' },
        React.createElement(
          'div',
          { className: 'row-fluid' },
          React.createElement(
            'div',
            { className: 'span4 feed-inspiration__items feed-inspiration__items--border-bottom',
              onMouseEnter: () => this.showWishlist(1),
              onMouseLeave: () => this.hideWishlist(1) },
            this.state.isShowWishlist1 && React.createElement(ButtonWishlist, { checked: true }),
            React.createElement('img', { src: getImage('inspiration-1.jpg'), className: 'feed-inspiration__image' }),
            React.createElement(
              'div',
              { className: 'feed-inspiration__details' },
              React.createElement(
                'div',
                { className: 'fs-12 fw-600 lh-17 feed-inspiration__items--name' },
                React.createElement(
                  'div',
                  { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                  'Jetta Shoes'
                )
              ),
              React.createElement(
                'div',
                { className: 'feed-inspiration__items--price' },
                React.createElement(
                  'label',
                  { className: 'fs-12 fw-600 orange-red' },
                  'Rp 349.000'
                )
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'span4 feed-inspiration__items feed-inspiration__items--border-bottom',
              onMouseEnter: () => this.showWishlist(2),
              onMouseLeave: () => this.hideWishlist(2) },
            this.state.isShowWishlist2 && React.createElement(ButtonWishlist, { checked: false }),
            React.createElement('img', { src: getImage('inspiration-2.jpg'), className: 'feed-inspiration__image' }),
            React.createElement(
              'div',
              { className: 'feed-inspiration__details' },
              React.createElement(
                'div',
                { className: 'fs-12 fw-600 lh-17 feed-inspiration__items--name' },
                React.createElement(
                  'div',
                  { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                  'Azura Shoes'
                )
              ),
              React.createElement(
                'div',
                { className: 'feed-inspiration__items--price' },
                React.createElement(
                  'label',
                  { className: 'fs-12 fw-600 orange-red' },
                  'Rp 349.000'
                )
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'span4 feed-inspiration__items feed-inspiration__items--border-bottom',
              onMouseEnter: () => this.showWishlist(3),
              onMouseLeave: () => this.hideWishlist(3) },
            this.state.isShowWishlist3 && React.createElement(ButtonWishlist, { checked: false }),
            React.createElement('img', { src: getImage('inspiration-3.jpg'), className: 'feed-inspiration__image' }),
            React.createElement(
              'div',
              { className: 'feed-inspiration__details' },
              React.createElement(
                'div',
                { className: 'fs-12 fw-600 lh-17 feed-inspiration__items--name' },
                React.createElement(
                  'div',
                  { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                  'Digger Cap'
                )
              ),
              React.createElement(
                'div',
                { className: 'feed-inspiration__items--price' },
                React.createElement(
                  'label',
                  { className: 'fs-12 fw-600 orange-red' },
                  'Rp 199.000'
                )
              )
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'row-fluid' },
          React.createElement(
            'div',
            { className: 'span4 feed-inspiration__items',
              onMouseEnter: () => this.showWishlist(4),
              onMouseLeave: () => this.hideWishlist(4) },
            this.state.isShowWishlist4 && React.createElement(ButtonWishlist, { checked: false }),
            React.createElement('img', { src: getImage('inspiration-4.jpg'), className: 'feed-inspiration__image' }),
            React.createElement(
              'div',
              { className: 'feed-inspiration__details' },
              React.createElement(
                'div',
                { className: 'fs-12 fw-600 lh-17 feed-inspiration__items--name' },
                React.createElement(
                  'div',
                  { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                  'Katana Cap'
                )
              ),
              React.createElement(
                'div',
                { className: 'feed-inspiration__items--price' },
                React.createElement(
                  'label',
                  { className: 'fs-12 fw-600 orange-red' },
                  'Rp 199.000'
                )
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'span4 feed-inspiration__items',
              onMouseEnter: () => this.showWishlist(5),
              onMouseLeave: () => this.hideWishlist(5) },
            this.state.isShowWishlist5 && React.createElement(ButtonWishlist, { checked: true }),
            React.createElement('img', { src: getImage('inspiration-5.jpg'), className: 'feed-inspiration__image' }),
            React.createElement(
              'div',
              { className: 'feed-inspiration__details' },
              React.createElement(
                'div',
                { className: 'fs-12 fw-600 lh-17 feed-inspiration__items--name' },
                React.createElement(
                  'div',
                  { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                  'Classic Women T-Shirt Jetta Maroon'
                )
              ),
              React.createElement(
                'div',
                { className: 'feed-inspiration__items--price' },
                React.createElement(
                  'label',
                  { className: 'fs-12 fw-600 orange-red' },
                  'Rp 239.000'
                )
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'span4 feed-inspiration__items',
              onMouseEnter: () => this.showWishlist(6),
              onMouseLeave: () => this.hideWishlist(6) },
            this.state.isShowWishlist6 && React.createElement(ButtonWishlist, { checked: false }),
            React.createElement('img', { src: getImage('inspiration-6.jpg'), className: 'feed-inspiration__image' }),
            React.createElement(
              'div',
              { className: 'feed-inspiration__details' },
              React.createElement(
                'div',
                { className: 'fs-12 fw-600 lh-17 feed-inspiration__items--name' },
                React.createElement(
                  'div',
                  { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                  'Classic Women T-Shirt Carnelian Red'
                )
              ),
              React.createElement(
                'div',
                { className: 'feed-inspiration__items--price' },
                React.createElement(
                  'label',
                  { className: 'fs-12 fw-600 orange-red' },
                  'Rp 239.000'
                )
              )
            )
          )
        )
      )
    );
  }
});



var marketingPromoContainer = document.getElementsByClassName('feed-marketing-promo__content');
var marketingPromoItems = document.getElementsByClassName('feed-marketing-promo__content-items');

const SLIDE_CONTAINER = document.getElementsByClassName('feed-marketing-promo__content');
const MARKETING_PROMO_TOAST_CONTAINER = document.getElementsByClassName('feed-marketing-promo__toast-container');
var FeedMarketingPromo = React.createClass({
	displayName: 'FeedMarketingPromo',

	getInitialState: function () {
		return {
			isCopyCode: false
		};
	},
	copyPromoCode: function () {
		MARKETING_PROMO_TOAST_CONTAINER[0].classList.add('show');
		setTimeout(() => {
			MARKETING_PROMO_TOAST_CONTAINER[0].classList.remove('show');
		}, 2000);
	},
	render: function () {
		return React.createElement(
			'div',
			{ className: 'mb-20 feed-marketing-promo' },
			React.createElement(
				'div',
				{ className: 'feed-marketing-promo__toast-container' },
				React.createElement(
					'div',
					{ className: 'fs-12 inline-block' },
					'Kode anda telah disalin'
				)
			),
			React.createElement(
				'div',
				{ className: 'p-10 feed-marketing-promo__header' },
				React.createElement(
					'div',
					{ className: 'va-middle inline-block feed-marketing-promo__seller-photo' },
					React.createElement('img', { src: getImage('tokopedia-avatar-square.png') })
				),
				React.createElement(
					'div',
					{ className: 'va-middle feed-marketing-promo__seller-activity' },
					React.createElement(
						'span',
						{ className: 'fw-600' },
						'Tokopedia '
					),
					React.createElement(
						'div',
						{ className: 'fs-11 feed-marketing-promo__seller-activity--time' },
						'Promo'
					)
				),
				React.createElement('div', { className: 'feed-marketing-promo__seller-share' }),
				React.createElement(
					'div',
					{ className: 'feed-marketing-promo__arrow--left hidden' },
					React.createElement('img', { src: getImage('arrow-promo.png') })
				),
				React.createElement(
					'div',
					{ className: 'feed-marketing-promo__arrow--right' },
					React.createElement('img', { src: getImage('group-32.png') })
				)
			),
			React.createElement(
				'div',
				{ className: 'feed-marketing-promo__content' },
				React.createElement(
					'div',
					{ className: 'row-fluid feed-marketing-promo__content-items' },
					React.createElement(
						'div',
						{ className: 'feed-marketing-promo__content-container' },
						React.createElement(
							'div',
							{ className: 'feed-marketing-promo__content-frame' },
							React.createElement(
								'div',
								{ className: 'feed-marketing-promo__content-list' },
								React.createElement('img', { src: getImage('promo-banner.jpg'), className: 'feed-marketing-promo__content-image' }),
								React.createElement(
									'div',
									{ className: 'row-fluid' },
									React.createElement(
										'div',
										{ className: 'pull-left feed-marketing-promo__content-details' },
										React.createElement(
											'div',
											{ className: 'fs-13 lh-20 fw-normal m-0 pb-10 feed-marketing-promo__content-title' },
											'Beli paket data XL di Tokopedia assad lebih sdsi hemat, diskon hingga 41%'
										),
										React.createElement(
											'h3',
											{ className: 'fs-12 fw-normal feed-marketing-promo__content-promo' },
											React.createElement(
												'span',
												null,
												'Periode: '
											),
											'25 Januari 2017'
										)
									),
									React.createElement(
										'div',
										{ className: 'pull-left pt-15 pl-10 feed-marketing-promo__code-container' },
										React.createElement(
											'span',
											{ className: 'fs-12 fw-normal' },
											'Kode :'
										),
										React.createElement(
											'div',
											{ className: 'feed-marketing-promo__code-box' },
											React.createElement(
												'span',
												{ className: 'fs-13 fw-600 feed-marketing-promo__code-text' },
												'XLPROMO41A'
											)
										)
									),
									React.createElement(
										'div',
										{ className: 'pull-left feed-marketing-promo__btn-container' },
										React.createElement(
											'button',
											{ className: 'btn btn-action feed-marketing-promo__btn-save-promo', onClick: () => this.copyPromoCode() },
											'Salin'
										)
									)
								)
							)
						)
					)
				),
				React.createElement(
					'div',
					{ className: 'row-fluid feed-marketing-promo__content-items' },
					React.createElement(
						'div',
						{ className: 'feed-marketing-promo__content-container' },
						React.createElement(
							'div',
							{ className: 'feed-marketing-promo__content-frame' },
							React.createElement(
								'div',
								{ className: 'feed-marketing-promo__content-list' },
								React.createElement('img', { src: getImage('banner-149.jpg'), className: 'feed-marketing-promo__content-image' }),
								React.createElement(
									'div',
									{ className: 'row-fluid' },
									React.createElement(
										'div',
										{ className: 'pull-left feed-marketing-promo__content-details' },
										React.createElement(
											'div',
											{ className: 'fs-13 lh-20 fw-normal m-0 pb-10 feed-marketing-promo__content-title' },
											'Beli paket data XL di Tokopedia assad lebih sdsi hemat, diskon hingga 41%'
										),
										React.createElement(
											'h3',
											{ className: 'fs-12 fw-normal feed-marketing-promo__content-promo' },
											React.createElement(
												'span',
												null,
												'Periode: '
											),
											'25 Januari 2017'
										)
									),
									React.createElement(
										'div',
										{ className: 'pull-left pt-15 pl-15 feed-marketing-promo__code-container' },
										React.createElement(
											'span',
											{ className: 'fs-12 fw-normal' },
											'Kode :'
										),
										React.createElement(
											'div',
											{ className: 'feed-marketing-promo__code-box' },
											React.createElement(
												'span',
												{ className: 'fs-13 fw-600 feed-marketing-promo__code-text' },
												'XLPROMO41A'
											)
										)
									),
									React.createElement(
										'div',
										{ className: 'pull-left feed-marketing-promo__btn-container' },
										React.createElement(
											'button',
											{ className: 'btn btn-action feed-marketing-promo__btn-save-promo' },
											'Salin'
										)
									)
								)
							)
						)
					)
				)
			),
			React.createElement(
				'div',
				{ className: 'ta-center p-10 feed-marketing-promo__footer' },
				React.createElement(
					'a',
					{ href: '#' },
					'Lihat semua promo'
				)
			)
		);
	}
});



var FeedOfficialStore = React.createClass({
	displayName: 'FeedOfficialStore',

	render: function () {
		return React.createElement(
			'div',
			{ className: 'feed-official-store mb-20' },
			React.createElement(
				'h1',
				{ className: 'fw-600 fs-16 lh-16 feed-official-store__title' },
				'Official Store'
			),
			React.createElement(
				'div',
				{ className: 'row-fluid feed-official-store__showcase' },
				React.createElement(
					'div',
					{ className: 'span4 feed-official-store__items' },
					React.createElement('img', { src: getImage('lg-logo.png'), className: 'feed-official-store__items-image' })
				),
				React.createElement(
					'div',
					{ className: 'span4 feed-official-store__items' },
					React.createElement('img', { src: getImage('garnier-logo.png'), className: 'feed-official-store__items-image' })
				),
				React.createElement(
					'div',
					{ className: 'span4 feed-official-store__items' },
					React.createElement('img', { src: getImage('garmin-logo.png'), className: 'feed-official-store__items-image' })
				)
			),
			React.createElement(
				'div',
				{ className: 'row-fluid feed-official-store__showcase' },
				React.createElement(
					'div',
					{ className: 'span4 feed-official-store__items' },
					React.createElement('img', { src: getImage('microsoft-logo.png'), className: 'feed-official-store__items-image' })
				),
				React.createElement(
					'div',
					{ className: 'span4 feed-official-store__items' },
					React.createElement('img', { src: getImage('momnbab-logo.png'), className: 'feed-official-store__items-image' })
				),
				React.createElement(
					'div',
					{ className: 'span4 feed-official-store__items' },
					React.createElement('img', { src: getImage('makarizo-logo.png'), className: 'feed-official-store__items-image' })
				)
			),
			React.createElement(
				'div',
				{ className: 'ta-center row-fluid feed-official-store__link-more' },
				React.createElement(
					'a',
					{ href: '#' },
					'Lihat Semua'
				)
			)
		);
	}
});



var FeedOfficialStoreProduct = React.createClass({
	displayName: 'FeedOfficialStoreProduct',

	render: function () {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'div',
				{ className: 'feed-official-store-product__banner-image-container' },
				React.createElement('img', { className: 'feed-official-store-product__banner-image', src: getImage('banner-149.jpg'), alt: '' })
			),
			React.createElement(
				'div',
				{ className: 'pt-0 mb-20 feed-official-store-product mb-20' },
				React.createElement(
					'div',
					{ className: 'feed-official-store-product__frame' },
					React.createElement(
						'div',
						{ className: 'feed-official-store-product__content' },
						React.createElement(
							'div',
							{ className: 'row-fluid feed-official-store-product__row' },
							React.createElement(
								'div',
								{ className: 'span4 feed-official-store-product__items' },
								React.createElement(
									'div',
									{ className: 'feed-official-store-product__items-details' },
									React.createElement('img', { src: getImage('topi-toped.jpg'), className: 'feed-official-store-product__image' }),
									React.createElement(
										'div',
										{ className: 'feed-official-store-product__details' },
										React.createElement(
											'div',
											{ className: 'fs-12 fw-600 lh-17 feed-official-store-product__items--name' },
											React.createElement(
												'div',
												{ className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
												'Topi Tokopedia - Model Topi Baseball'
											)
										),
										React.createElement(
											'div',
											{ className: 'pb-20 feed-official-store-product__items--price' },
											React.createElement(
												'label',
												{ className: 'fs-12 fw-600 orange-red' },
												'Rp 25.000'
											)
										)
									)
								),
								React.createElement(
									'div',
									{ className: 'feed-official-store-product__items--store' },
									React.createElement(
										'div',
										{ className: 'span3 feed-official-store-product__image-container-store' },
										React.createElement('img', { src: getImage('tokopedia-avatar-square.png'), className: 'feed-official-store-product__image-store' })
									),
									React.createElement(
										'div',
										{ className: 'span8 pt-15 feed-official-store-product__text' },
										React.createElement(
											'label',
											{ className: 'fs-11 text-black07' },
											' Tokopedia'
										)
									)
								)
							),
							React.createElement(
								'div',
								{ className: 'span4 feed-official-store-product__items' },
								React.createElement(
									'div',
									{ className: 'feed-official-store-product__items-details' },
									React.createElement('img', { src: getImage('topintotebag-toped.jpg'), className: 'feed-official-store-product__image' }),
									React.createElement(
										'div',
										{ className: 'feed-official-store-product__details' },
										React.createElement(
											'div',
											{ className: 'fs-12 fw-600 lh-17 feed-official-store-product__items--name' },
											'Paket Topi & Tote Bag Tokopedia'
										),
										React.createElement(
											'div',
											{ className: 'pb-20 feed-official-store-product__items--price' },
											React.createElement(
												'label',
												{ className: 'fs-12 fw-600 orange-red' },
												'Rp 90.500'
											)
										)
									)
								),
								React.createElement(
									'div',
									{ className: 'feed-official-store-product__items--store' },
									React.createElement(
										'div',
										{ className: 'span3 feed-official-store-product__image-container-store' },
										React.createElement('img', { src: getImage('tokopedia-avatar-square.png'), className: 'feed-official-store-product__image-store' })
									),
									React.createElement(
										'div',
										{ className: 'span8 pt-15 feed-official-store-product__text' },
										React.createElement(
											'label',
											{ className: 'fs-11 text-black07' },
											' Tokopedia'
										)
									)
								)
							),
							React.createElement(
								'div',
								{ className: 'span4 feed-official-store-product__items' },
								React.createElement(
									'div',
									{ className: 'feed-official-store-product__items-details' },
									React.createElement('img', { src: getImage('btlsofa-toped.jpg'), className: 'feed-official-store-product__image' }),
									React.createElement(
										'div',
										{ className: 'feed-official-store-product__details' },
										React.createElement(
											'div',
											{ className: 'fs-12 fw-600 lh-17 feed-official-store-product__items--name' },
											'Bantal Sofa Tokopedia'
										),
										React.createElement(
											'div',
											{ className: 'pb-20 feed-official-store-product__items--price' },
											React.createElement(
												'label',
												{ className: 'fs-12 fw-600 orange-red' },
												'Rp 65.500'
											)
										)
									)
								),
								React.createElement(
									'div',
									{ className: 'feed-official-store-product__items--store' },
									React.createElement(
										'div',
										{ className: 'span3 feed-official-store-product__image-container-store' },
										React.createElement('img', { src: getImage('tokopedia-avatar-square.png'), className: 'feed-official-store-product__image-store' })
									),
									React.createElement(
										'div',
										{ className: 'span8 pt-15 feed-official-store-product__text' },
										React.createElement(
											'label',
											{ className: 'fs-11 text-black07' },
											' Tokopedia'
										)
									)
								)
							)
						),
						React.createElement(
							'div',
							{ className: 'row-fluid feed-official-store-product__row' },
							React.createElement(
								'div',
								{ className: 'span4 feed-official-store-product__items' },
								React.createElement(
									'div',
									{ className: 'feed-official-store-product__items-details' },
									React.createElement('img', { src: getImage('usb-toped.jpg'), className: 'feed-official-store-product__image' }),
									React.createElement(
										'div',
										{ className: 'feed-official-store-product__details' },
										React.createElement(
											'div',
											{ className: 'fs-12 fw-600 lh-17 feed-official-store-product__items--name' },
											React.createElement(
												'div',
												{ className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
												'USB Flashdisk Tokopedia - 8GB'
											)
										),
										React.createElement(
											'div',
											{ className: 'pb-20 feed-official-store-product__items--price' },
											React.createElement(
												'label',
												{ className: 'fs-12 fw-600 orange-red' },
												'Rp 65.000'
											)
										)
									)
								),
								React.createElement(
									'div',
									{ className: 'feed-official-store-product__items--store' },
									React.createElement(
										'div',
										{ className: 'span3 feed-official-store-product__image-container-store' },
										React.createElement('img', { src: getImage('tokopedia-avatar-square.png'), className: 'feed-official-store-product__image-store' })
									),
									React.createElement(
										'div',
										{ className: 'span8 pt-15 feed-official-store-product__text' },
										React.createElement(
											'label',
											{ className: 'fs-11 text-black07' },
											' Tokopedia'
										)
									)
								)
							),
							React.createElement(
								'div',
								{ className: 'span4 feed-official-store-product__items' },
								React.createElement(
									'div',
									{ className: 'feed-official-store-product__items-details' },
									React.createElement('img', { src: getImage('totebag-toped.jpg'), className: 'feed-official-store-product__image' }),
									React.createElement(
										'div',
										{ className: 'feed-official-store-product__details' },
										React.createElement(
											'div',
											{ className: 'fs-12 fw-600 lh-17 feed-official-store-product__items--name' },
											'Tas Totebag Tokopedia'
										),
										React.createElement(
											'div',
											{ className: 'pb-20 feed-official-store-product__items--price' },
											React.createElement(
												'label',
												{ className: 'fs-12 fw-600 orange-red' },
												'Rp 80.500'
											)
										)
									)
								),
								React.createElement(
									'div',
									{ className: 'feed-official-store-product__items--store' },
									React.createElement(
										'div',
										{ className: 'span3 feed-official-store-product__image-container-store' },
										React.createElement('img', { src: getImage('tokopedia-avatar-square.png'), className: 'feed-official-store-product__image-store' })
									),
									React.createElement(
										'div',
										{ className: 'span8 pt-15 feed-official-store-product__text' },
										React.createElement(
											'label',
											{ className: 'fs-11 text-black07' },
											' Tokopedia'
										)
									)
								)
							),
							React.createElement(
								'div',
								{ className: 'span4 feed-official-store-product__items' },
								React.createElement(
									'div',
									{ className: 'feed-official-store-product__items-details' },
									React.createElement('img', { src: getImage('paket-toped.jpg'), className: 'feed-official-store-product__image' }),
									React.createElement(
										'div',
										{ className: 'feed-official-store-product__details' },
										React.createElement(
											'div',
											{ className: 'fs-12 fw-600 lh-17 feed-official-store-product__items--name' },
											'Paket Merchandise Tokopedia (Semua Produk)'
										),
										React.createElement(
											'div',
											{ className: 'pb-20 feed-official-store-product__items--price' },
											React.createElement(
												'label',
												{ className: 'fs-12 fw-600 orange-red' },
												'Rp 225.000'
											)
										)
									)
								),
								React.createElement(
									'div',
									{ className: 'feed-official-store-product__items--store' },
									React.createElement(
										'div',
										{ className: 'span3 feed-official-store-product__image-container-store' },
										React.createElement('img', { src: getImage('tokopedia-avatar-square.png'), className: 'feed-official-store-product__image-store' })
									),
									React.createElement(
										'div',
										{ className: 'span8 pt-15 feed-official-store-product__text' },
										React.createElement(
											'label',
											{ className: 'fs-11 text-black07' },
											' Tokopedia'
										)
									)
								)
							)
						),
						React.createElement(
							'div',
							{ className: 'ta-center row-fluid feed-official-store-product__link-more' },
							React.createElement(
								'a',
								{ href: '#' },
								'Lihat Semua'
							)
						)
					)
				)
			)
		);
	}
});




var FeedProduct = React.createClass({
  displayName: 'FeedProduct',

  getInitialState: function () {
    return {
      isShowWishlist1: false,
      isShowWishlist2: false,
      isShowWishlist3: false,
      isShowWishlist4: false,
      isShowWishlist5: false,
      isShowWishlist6: false
    };
  },
  showWishlist: function (elementNumber) {
    switch (elementNumber) {
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
  hideWishlist: function (elementNumber) {
    switch (elementNumber) {
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
  openDetailPage: function () {
    window.location = '/feed-detail.pl';
  },
  render: function () {
    return React.createElement(
      'div',
      { className: 'feed-product' },
      React.createElement(
        'div',
        { className: 'feed-product__header' },
        React.createElement(
          'div',
          { className: 'feed-product__seller-photo' },
          React.createElement('img', { alt: '', src: getImage('tokopedia-avatar-square.png') })
        ),
        React.createElement(
          'div',
          { className: 'feed-product__seller-activity' },
          React.createElement(
            'div',
            { className: 'feed-product__seller-activity--text' },
            React.createElement(
              'span',
              { className: 'fw-600' },
              'Nana Shop Ekstraordinari '
            ),
            'ubah ',
            React.createElement(
              'span',
              { className: 'fw-600' },
              this.props.productCount,
              ' produk'
            )
          ),
          React.createElement(
            'div',
            { className: 'feed-product__seller-activity--time' },
            '3 jam'
          )
        ),
        this.props.productCount > 1 ? React.createElement(
          'div',
          { className: 'feed-product__seller-share' },
          React.createElement(ButtonShare, null)
        ) : React.createElement(
          'div',
          { className: 'feed-product__seller-buy' },
          React.createElement(
            'button',
            { className: 'btn' },
            'Beli'
          )
        )
      ),
      React.createElement(
        'div',
        { className: 'feed-product__content' },
        this.props.productCount === 1 ? React.createElement(
          'div',
          null,
          React.createElement(
            'div',
            { className: 'row-fluid',
              onMouseEnter: () => this.showWishlist(1),
              onMouseLeave: () => this.hideWishlist(1),
              onClick: () => this.openDetailPage() },
            React.createElement(
              'div',
              { className: 'span6 feed-product__items feed-product__items--border-bottom feed-product__items--no-border-right' },
              React.createElement('img', { src: getImage('product-0.jpg'), className: 'feed-product__image' })
            ),
            React.createElement(
              'div',
              { className: 'span6 feed-product__items feed-product__items--border-bottom' },
              this.state.isShowWishlist1 && React.createElement(ButtonWishlist, { checked: false }),
              React.createElement('img', { src: 'http://placehold.it/300x300', className: 'feed-product__image' })
            )
          ),
          React.createElement(
            'div',
            { className: 'row-fluid' },
            React.createElement(
              'div',
              { className: 'span12 feed-product__items pt-0' },
              React.createElement(
                'div',
                { className: 'feed-product__details' },
                React.createElement(
                  'div',
                  { className: 'fs-13 fw-600 lh-17 feed-product__items--name' },
                  React.createElement(
                    'div',
                    { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                    'Sajadah Travel Tiara 024 Blue - Ramadhan Fashion'
                  )
                ),
                React.createElement(
                  'div',
                  { className: 'feed-product__items--price' },
                  React.createElement(
                    'label',
                    { className: 'fs-13 fw-600 orange-red' },
                    'Rp 89.100'
                  )
                )
              )
            )
          )
        ) : this.props.productCount === 2 ? React.createElement(
          'div',
          { className: 'row-fluid',
            onClick: () => this.openDetailPage() },
          React.createElement(
            'div',
            { className: 'span6 feed-product__items',
              onMouseEnter: () => this.showWishlist(1),
              onMouseLeave: () => this.hideWishlist(1) },
            this.state.isShowWishlist1 && React.createElement(ButtonWishlist, { checked: false }),
            React.createElement('img', { src: getImage('product-1.jpg'), className: 'feed-product__image' }),
            React.createElement(
              'div',
              { className: 'feed-product__details' },
              React.createElement(
                'div',
                { className: 'fs-13 fw-600 lh-17 feed-product__items--name' },
                React.createElement(
                  'div',
                  { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                  'Bantex Mouse Pad Blue #1788 01'
                )
              ),
              React.createElement(
                'div',
                { className: 'feed-product__items--price' },
                React.createElement(
                  'label',
                  { className: 'fs-13 fw-600 orange-red' },
                  'Rp 24.970'
                )
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'span6 feed-product__items',
              onMouseEnter: () => this.showWishlist(2),
              onMouseLeave: () => this.hideWishlist(2) },
            this.state.isShowWishlist2 && React.createElement(ButtonWishlist, { checked: false }),
            React.createElement('img', { src: getImage('product-2.jpg'), className: 'feed-product__image' }),
            React.createElement(
              'div',
              { className: 'feed-product__details' },
              React.createElement(
                'div',
                { className: 'fs-13 fw-600 lh-17 feed-product__items--name' },
                React.createElement(
                  'div',
                  { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                  'Linex Drawing Tube DT 74 40cm (74cm) Black #4884 10'
                )
              ),
              React.createElement(
                'div',
                { className: 'feed-product__items--price' },
                React.createElement(
                  'label',
                  { className: 'fs-13 fw-600 orange-red' },
                  'Rp 170.390'
                )
              )
            )
          )
        ) : this.props.productCount === 3 ? React.createElement(
          'div',
          { className: 'row-fluid',
            onClick: () => this.openDetailPage() },
          React.createElement(
            'div',
            { className: 'span4 feed-product__items',
              onMouseEnter: () => this.showWishlist(1),
              onMouseLeave: () => this.hideWishlist(1) },
            this.state.isShowWishlist1 && React.createElement(ButtonWishlist, { checked: false }),
            React.createElement('img', { src: getImage('product-3.jpg'), className: 'feed-product__image' }),
            React.createElement(
              'div',
              { className: 'feed-product__details' },
              React.createElement(
                'div',
                { className: 'fs-12 fw-600 lh-17 feed-product__items--name' },
                React.createElement(
                  'div',
                  { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                  'Bantex Stitching Artist Portfolio A1 Black #8006 10'
                )
              ),
              React.createElement(
                'div',
                { className: 'feed-product__items--price' },
                React.createElement(
                  'label',
                  { className: 'fs-12 fw-600 orange-red' },
                  'Rp 448.470'
                )
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'span4 feed-product__items',
              onMouseEnter: () => this.showWishlist(2),
              onMouseLeave: () => this.hideWishlist(2) },
            this.state.isShowWishlist2 && React.createElement(ButtonWishlist, { checked: false }),
            React.createElement('img', { src: getImage('product-4.jpg'), className: 'feed-product__image' }),
            React.createElement(
              'div',
              { className: 'feed-product__details' },
              React.createElement(
                'div',
                { className: 'fs-12 fw-600 lh-17 feed-product__items--name' },
                React.createElement(
                  'div',
                  { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                  'Bantex Stitching Artist Portfolio A1 Black #8005 10'
                )
              ),
              React.createElement(
                'div',
                { className: 'feed-product__items--price' },
                React.createElement(
                  'label',
                  { className: 'fs-12 fw-600 orange-red' },
                  'Rp 341.220'
                )
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'span4 feed-product__items',
              onMouseEnter: () => this.showWishlist(3),
              onMouseLeave: () => this.hideWishlist(3) },
            this.state.isShowWishlist3 && React.createElement(ButtonWishlist, { checked: false }),
            React.createElement('img', { src: getImage('product-5.jpg'), className: 'feed-product__image' }),
            React.createElement(
              'div',
              { className: 'feed-product__details' },
              React.createElement(
                'div',
                { className: 'fs-12 fw-600 lh-17 feed-product__items--name' },
                React.createElement(
                  'div',
                  { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                  'Bantex Stitching Artist Portfolio A1 Black #8003 10'
                )
              ),
              React.createElement(
                'div',
                { className: 'feed-product__items--price' },
                React.createElement(
                  'label',
                  { className: 'fs-12 fw-600 orange-red' },
                  'Rp 289.520'
                )
              )
            )
          )
        ) : this.props.productCount === 4 ? React.createElement(
          'div',
          null,
          React.createElement(
            'div',
            { className: 'row-fluid',
              onClick: () => this.openDetailPage() },
            React.createElement(
              'div',
              { className: 'span6 feed-product__items',
                onMouseEnter: () => this.showWishlist(1),
                onMouseLeave: () => this.hideWishlist(1) },
              this.state.isShowWishlist1 && React.createElement(ButtonWishlist, { checked: false }),
              React.createElement('img', { src: getImage('product-6.jpg'), className: 'feed-product__image' }),
              React.createElement(
                'div',
                { className: 'feed-product__details' },
                React.createElement(
                  'div',
                  { className: 'fs-13 fw-600 lh-17 feed-product__items--name' },
                  React.createElement(
                    'div',
                    { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                    'Bantex Ink Jet Photo Paper A4 Premium (10 sheets) 225gr'
                  )
                ),
                React.createElement(
                  'div',
                  { className: 'feed-product__items--price' },
                  React.createElement(
                    'label',
                    { className: 'fs-13 fw-600 orange-red' },
                    'Rp 74.030'
                  )
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'span6 feed-product__items',
                onMouseEnter: () => this.showWishlist(2),
                onMouseLeave: () => this.hideWishlist(2) },
              this.state.isShowWishlist2 && React.createElement(ButtonWishlist, { checked: false }),
              React.createElement('img', { src: getImage('product-7.jpg'), className: 'feed-product__image' }),
              React.createElement(
                'div',
                { className: 'feed-product__details' },
                React.createElement(
                  'div',
                  { className: 'fs-13 fw-600 lh-17 feed-product__items--name' },
                  React.createElement(
                    'div',
                    { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                    'Bantex Ink Jet Photo Paper A3 Premium (10 sheets) 225gr'
                  )
                ),
                React.createElement(
                  'div',
                  { className: 'feed-product__items--price' },
                  React.createElement(
                    'label',
                    { className: 'fs-13 fw-600 orange-red' },
                    'Rp 157.850'
                  )
                )
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'row-fluid',
              onClick: () => this.openDetailPage() },
            React.createElement(
              'div',
              { className: 'span6 feed-product__items feed-product__items--border-top',
                onMouseEnter: () => this.showWishlist(3),
                onMouseLeave: () => this.hideWishlist(3) },
              this.state.isShowWishlist3 && React.createElement(ButtonWishlist, { checked: false }),
              React.createElement('img', { src: getImage('product-8.jpg'), className: 'feed-product__image' }),
              React.createElement(
                'div',
                { className: 'feed-product__details' },
                React.createElement(
                  'div',
                  { className: 'fs-13 fw-600 lh-17 feed-product__items--name' },
                  React.createElement(
                    'div',
                    { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                    'Bantex Ink Jet Photo Paper A4 Glossy (10 sheets) 180gr #8001'
                  )
                ),
                React.createElement(
                  'div',
                  { className: 'feed-product__items--price' },
                  React.createElement(
                    'label',
                    { className: 'fs-13 fw-600 orange-red' },
                    'Rp 53.750'
                  )
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'span6 feed-product__items feed-product__items--border-top',
                onMouseEnter: () => this.showWishlist(4),
                onMouseLeave: () => this.hideWishlist(4) },
              this.state.isShowWishlist4 && React.createElement(ButtonWishlist, { checked: true }),
              React.createElement('img', { src: getImage('product-9.jpg'), className: 'feed-product__image' }),
              React.createElement(
                'div',
                { className: 'feed-product__details' },
                React.createElement(
                  'div',
                  { className: 'fs-13 fw-600 lh-17 feed-product__items--name' },
                  React.createElement(
                    'div',
                    { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                    'Bantex Matt Coated Ink Jet Paper A4(60 sheets) 95gr'
                  )
                ),
                React.createElement(
                  'div',
                  { className: 'feed-product__items--price' },
                  React.createElement(
                    'label',
                    { className: 'fs-13 fw-600 orange-red' },
                    'Rp 95.370'
                  )
                )
              )
            )
          )
        ) : this.props.productCount === 5 ? React.createElement(
          'div',
          null,
          React.createElement(
            'div',
            { className: 'row-fluid',
              onClick: () => this.openDetailPage() },
            React.createElement(
              'div',
              { className: 'span6 feed-product__items',
                onMouseEnter: () => this.showWishlist(1),
                onMouseLeave: () => this.hideWishlist(1) },
              this.state.isShowWishlist1 && React.createElement(ButtonWishlist, { checked: false }),
              React.createElement('img', { src: getImage('product-10.jpg'), className: 'feed-product__image' }),
              React.createElement(
                'div',
                { className: 'feed-product__details' },
                React.createElement(
                  'div',
                  { className: 'fs-13 fw-600 lh-17 feed-product__items--name' },
                  React.createElement(
                    'div',
                    { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                    'Bantex Matt Coated Ink Jet Paper A4(30 sheets) 95gr #8001'
                  )
                ),
                React.createElement(
                  'div',
                  { className: 'feed-product__items--price' },
                  React.createElement(
                    'label',
                    { className: 'fs-13 fw-600 orange-red' },
                    'Rp 59.510'
                  )
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'span6 feed-product__items',
                onMouseEnter: () => this.showWishlist(2),
                onMouseLeave: () => this.hideWishlist(2) },
              this.state.isShowWishlist2 && React.createElement(ButtonWishlist, { checked: false }),
              React.createElement('img', { src: getImage('product-11.jpg'), className: 'feed-product__image' }),
              React.createElement(
                'div',
                { className: 'feed-product__details' },
                React.createElement(
                  'div',
                  { className: 'fs-13 fw-600 lh-17 feed-product__items--name' },
                  React.createElement(
                    'div',
                    { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                    'Linex Drawing Tube DT 124 70cm (124cm) Black #4848 10'
                  )
                ),
                React.createElement(
                  'div',
                  { className: 'feed-product__items--price' },
                  React.createElement(
                    'label',
                    { className: 'fs-13 fw-600 orange-red' },
                    'Rp 281.490'
                  )
                )
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'row-fluid',
              onClick: () => this.openDetailPage() },
            React.createElement(
              'div',
              { className: 'span4 feed-product__items feed-product__items--border-top',
                onMouseEnter: () => this.showWishlist(3),
                onMouseLeave: () => this.hideWishlist(3) },
              this.state.isShowWishlist3 && React.createElement(ButtonWishlist, { checked: false }),
              React.createElement('img', { src: getImage('product-12.jpg'), className: 'feed-product__image' }),
              React.createElement(
                'div',
                { className: 'feed-product__details' },
                React.createElement(
                  'div',
                  { className: 'fs-12 fw-600 lh-17 feed-product__items--name' },
                  React.createElement(
                    'div',
                    { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                    'Bantex Slanted Sign Holder A8 Transparent #8857 08'
                  )
                ),
                React.createElement(
                  'div',
                  { className: 'feed-product__items--price' },
                  React.createElement(
                    'label',
                    { className: 'fs-12 fw-600 orange-red' },
                    'Rp 11.770'
                  )
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'span4 feed-product__items feed-product__items--border-top',
                onMouseEnter: () => this.showWishlist(4),
                onMouseLeave: () => this.hideWishlist(4) },
              this.state.isShowWishlist4 && React.createElement(ButtonWishlist, { checked: true }),
              React.createElement('img', { src: getImage('product-13.jpg'), className: 'feed-product__image' }),
              React.createElement(
                'div',
                { className: 'feed-product__details' },
                React.createElement(
                  'div',
                  { className: 'fs-12 fw-600 lh-17 feed-product__items--name' },
                  React.createElement(
                    'div',
                    { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                    'Bantex Slanted Holder Transparent #8856 08'
                  )
                ),
                React.createElement(
                  'div',
                  { className: 'feed-product__items--price' },
                  React.createElement(
                    'label',
                    { className: 'fs-12 fw-600 orange-red' },
                    'Rp 34.320'
                  )
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'span4 feed-product__items feed-product__items--border-top',
                onMouseEnter: () => this.showWishlist(5),
                onMouseLeave: () => this.hideWishlist(5) },
              this.state.isShowWishlist5 && React.createElement(ButtonWishlist, { checked: false }),
              React.createElement('img', { src: getImage('product-14.jpg'), className: 'feed-product__image' }),
              React.createElement(
                'div',
                { className: 'feed-product__details' },
                React.createElement(
                  'div',
                  { className: 'fs-12 fw-600 lh-17 feed-product__items--name' },
                  React.createElement(
                    'div',
                    { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                    'Bantex Stand Holder A4 Transparent #8854 08'
                  )
                ),
                React.createElement(
                  'div',
                  { className: 'feed-product__items--price' },
                  React.createElement(
                    'label',
                    { className: 'fs-12 fw-600 orange-red' },
                    'Rp 87.890'
                  )
                )
              )
            )
          )
        ) : this.props.productCount >= 6 ? React.createElement(
          'div',
          null,
          React.createElement(
            'div',
            { className: 'row-fluid',
              onClick: () => this.openDetailPage() },
            React.createElement(
              'div',
              { className: 'span4 feed-product__items',
                onMouseEnter: () => this.showWishlist(1),
                onMouseLeave: () => this.hideWishlist(1) },
              this.state.isShowWishlist1 && React.createElement(ButtonWishlist, { checked: false }),
              React.createElement('img', { src: getImage('product-15.jpg'), className: 'feed-product__image' }),
              React.createElement(
                'div',
                { className: 'feed-product__details' },
                React.createElement(
                  'div',
                  { className: 'fs-12 fw-600 lh-17 feed-product__items--name' },
                  React.createElement(
                    'div',
                    { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                    'Bantex Slanted Sign Holder A5 Transparent #8853 08'
                  )
                ),
                React.createElement(
                  'div',
                  { className: 'feed-product__items--price' },
                  React.createElement(
                    'label',
                    { className: 'fs-12 fw-600 orange-red' },
                    'Rp 48.480'
                  )
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'span4 feed-product__items',
                onMouseEnter: () => this.showWishlist(2),
                onMouseLeave: () => this.hideWishlist(2) },
              this.state.isShowWishlist2 && React.createElement(ButtonWishlist, { checked: false }),
              React.createElement('img', { src: getImage('product-16.jpg'), className: 'feed-product__image' }),
              React.createElement(
                'div',
                { className: 'feed-product__details' },
                React.createElement(
                  'div',
                  { className: 'fs-12 fw-600 lh-17 feed-product__items--name' },
                  React.createElement(
                    'div',
                    { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                    'Bantex Slanted Sign Holder A4 Transparent #8852 08'
                  )
                ),
                React.createElement(
                  'div',
                  { className: 'feed-product__items--price' },
                  React.createElement(
                    'label',
                    { className: 'fs-12 fw-600 orange-red' },
                    'Rp 75.240'
                  )
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'span4 feed-product__items',
                onMouseEnter: () => this.showWishlist(3),
                onMouseLeave: () => this.hideWishlist(3) },
              this.state.isShowWishlist3 && React.createElement(ButtonWishlist, { checked: false }),
              React.createElement('img', { src: getImage('product-17.jpg'), className: 'feed-product__image' }),
              React.createElement(
                'div',
                { className: 'feed-product__details' },
                React.createElement(
                  'div',
                  { className: 'fs-12 fw-600 lh-17 feed-product__items--name' },
                  React.createElement(
                    'div',
                    { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                    'Bantex Adhesive A4 Pocket (5pcs/pack) #8877 00'
                  )
                ),
                React.createElement(
                  'div',
                  { className: 'feed-product__items--price' },
                  React.createElement(
                    'label',
                    { className: 'fs-12 fw-600 orange-red' },
                    'Rp 97.020'
                  )
                )
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'row-fluid',
              onClick: () => this.openDetailPage() },
            React.createElement(
              'div',
              { className: 'span4 feed-product__items feed-product__items--border-top',
                onMouseEnter: () => this.showWishlist(4),
                onMouseLeave: () => this.hideWishlist(4) },
              this.state.isShowWishlist4 && React.createElement(ButtonWishlist, { checked: true }),
              React.createElement('img', { src: getImage('product-18.jpg'), className: 'feed-product__image' }),
              React.createElement(
                'div',
                { className: 'feed-product__details' },
                React.createElement(
                  'div',
                  { className: 'fs-12 fw-600 lh-17 feed-product__items--name' },
                  React.createElement(
                    'div',
                    { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                    'Bantex Adhesive Business Card (10 pcs/pack) #8876 00'
                  )
                ),
                React.createElement(
                  'div',
                  { className: 'feed-product__items--price' },
                  React.createElement(
                    'label',
                    { className: 'fs-12 fw-600 orange-red' },
                    'Rp 27.830'
                  )
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'span4 feed-product__items feed-product__items--border-top',
                onMouseEnter: () => this.showWishlist(5),
                onMouseLeave: () => this.hideWishlist(5) },
              this.state.isShowWishlist5 && React.createElement(ButtonWishlist, { checked: false }),
              React.createElement('img', { src: getImage('product-19.jpg'), className: 'feed-product__image' }),
              React.createElement(
                'div',
                { className: 'feed-product__details' },
                React.createElement(
                  'div',
                  { className: 'fs-12 fw-600 lh-17 feed-product__items--name' },
                  React.createElement(
                    'div',
                    { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                    'Bantex Slanted Sign Holder A8 Transparent #8875 08'
                  )
                ),
                React.createElement(
                  'div',
                  { className: 'feed-product__items--price' },
                  React.createElement(
                    'label',
                    { className: 'fs-12 fw-600 orange-red' },
                    'Rp 30.712'
                  )
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'span4 feed-product__items feed-product__items--border-top',
                onMouseEnter: () => this.showWishlist(6),
                onMouseLeave: () => this.hideWishlist(6) },
              this.props.productCount > 6 ? React.createElement(
                'div',
                { className: 'feed-product__items--overlay' },
                React.createElement(
                  'span',
                  null,
                  '+',
                  this.props.productCount - 6
                )
              ) : this.state.isShowWishlist6 && React.createElement(ButtonWishlist, { checked: false }),
              React.createElement('img', { src: getImage('product-20.jpg'), className: 'feed-product__image' }),
              React.createElement(
                'div',
                { className: 'feed-product__details' },
                React.createElement(
                  'div',
                  { className: 'fs-12 fw-600 lh-17 feed-product__items--name' },
                  React.createElement(
                    'div',
                    { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                    'Bantex Adhesive Filling Strips (10pcs/pack) #8875 00'
                  )
                ),
                React.createElement(
                  'div',
                  { className: 'feed-product__items--price' },
                  React.createElement(
                    'label',
                    { className: 'fs-12 fw-600 orange-red' },
                    'Rp 23.650'
                  )
                )
              )
            )
          )
        ) : React.createElement('div', null)
      )
    );
  }
});





var FeedProductDetail = React.createClass({
  displayName: 'FeedProductDetail',

  render: function () {

    return React.createElement(
      'div',
      { className: 'feed-product-detail' },
      React.createElement(
        'div',
        { className: 'feed-product-detail__header' },
        React.createElement(
          'div',
          { className: 'feed-product-detail__header-information' },
          React.createElement(
            'div',
            { className: 'feed-product-detail__seller-photo' },
            React.createElement('img', { alt: '', src: getImage('tokopedia-avatar-square.png') })
          ),
          React.createElement(
            'div',
            { className: 'feed-product-detail__seller-activity' },
            React.createElement(
              'span',
              { className: 'fw-600' },
              'Nana Shop Ekstraordinari '
            ),
            'ubah ',
            React.createElement(
              'span',
              { className: 'fw-600' },
              '2 produk'
            ),
            React.createElement(
              'div',
              { className: 'feed-product-detail__seller-activity--time' },
              'Kemarin pukul 15.23'
            )
          ),
          React.createElement('div', { className: 'feed-product-detail__seller-share' })
        ),
        React.createElement(
          'div',
          { className: 'row-fluid clearfix feed-product-detail__button-container' },
          React.createElement(
            'button',
            { className: 'btn btn-action pull-left feed-product-detail__btn-open-store' },
            'Kunjungi Toko'
          ),
          React.createElement(ButtonShare, null)
        )
      ),
      React.createElement(
        'div',
        { className: 'feed-product-detail__content' },
        React.createElement(FeedProductDetailItem, {
          image: 'product-2.jpg',
          productName: 'Linex Drawing Tube DT 74 40cm (74cm) Black #4884 10',
          productPrice: '170.390',
          cashback: true,
          grosir: true,
          preorder: true,
          refund: true,
          rating: 3
        }),
        React.createElement(FeedProductDetailItem, {
          image: 'product-2.jpg',
          productName: 'Linex Drawing Tube DT 74 40cm (74cm) Black #4884 10',
          productPrice: '170.390',
          cashback: true,
          grosir: true,
          preorder: true,
          refund: true,
          rating: 1
        }),
        React.createElement(FeedProductDetailItem, {
          image: 'product-2.jpg',
          productName: 'Linex Drawing Tube DT 74 40cm (74cm) Black #4884 10',
          productPrice: '170.390',
          cashback: true,
          grosir: true,
          preorder: true,
          refund: true,
          rating: 3
        }),
        React.createElement(FeedProductDetailItem, {
          image: 'product-2.jpg',
          productName: 'Linex Drawing Tube DT 74 40cm (74cm) Black #4884 10',
          productPrice: '170.390',
          cashback: true,
          grosir: true,
          preorder: true,
          refund: true,
          rating: 3
        }),
        React.createElement(FeedProductDetailItem, {
          image: 'product-2.jpg',
          productName: 'Linex Drawing Tube DT 74 40cm (74cm) Black #4884 10',
          productPrice: '170.390',
          cashback: true,
          grosir: true,
          preorder: true,
          refund: true,
          rating: 5
        }),
        React.createElement(FeedProductDetailItem, {
          image: 'product-2.jpg',
          productName: 'Linex Drawing Tube DT 74 40cm (74cm) Black #4884 10',
          productPrice: '170.390',
          cashback: true,
          grosir: true,
          preorder: true,
          refund: true,
          rating: 4
        }),
        React.createElement(FeedProductDetailItem, {
          image: 'product-2.jpg',
          productName: 'Linex Drawing Tube DT 74 40cm (74cm) Black #4884 10',
          productPrice: '170.390',
          cashback: true,
          grosir: true,
          preorder: true,
          refund: true,
          rating: 3
        }),
        React.createElement(FeedProductDetailItem, {
          image: 'product-2.jpg',
          productName: 'Linex Drawing Tube DT 74 40cm (74cm) Black #4884 10',
          productPrice: '170.390',
          cashback: true,
          grosir: true,
          preorder: true,
          refund: true,
          rating: 3
        }),
        React.createElement(FeedProductDetailItem, {
          image: 'product-2.jpg',
          productName: 'Linex Drawing Tube DT 74 40cm (74cm) Black #4884 10',
          productPrice: '170.390',
          cashback: true,
          grosir: true,
          preorder: true,
          refund: true,
          rating: 1
        }),
        React.createElement(FeedProductDetailItem, {
          image: 'product-2.jpg',
          productName: 'Linex Drawing Tube DT 74 40cm (74cm) Black #4884 10',
          productPrice: '170.390',
          cashback: true,
          grosir: true,
          preorder: true,
          refund: true,
          rating: 2
        })
      )
    );
  }
});





const MAX_PRODUCT_RATING = 5;

var FeedProductDetailItem = React.createClass({
  displayName: 'FeedProductDetailItem',

  getInitialState: function () {
    return {
      image: this.props.image,
      productName: this.props.productName,
      productPrice: this.props.productPrice,
      cashback: this.props.cashback,
      grosir: this.props.grosir,
      preorder: this.props.preorder,
      refund: this.props.refund,
      rating: this.props.rating
    };
  },

  renderStars: function () {
    let products = [];
    const target = document.querySelectorAll('.feed-product-detail-items__product-rating');

    for (let i = 0; i < this.props.rating; i++) {
      products.push(React.createElement('img', { className: 'feed-product-detail-items__product-rating-stars', key: 'on-' + i, src: getImage('rating-on.png') }));
    }
    for (let i = 0; i < MAX_PRODUCT_RATING - this.props.rating; i++) {
      products.push(React.createElement('img', { className: 'feed-product-detail-items__product-rating-stars', key: 'off-' + i, src: getImage('rating-off.png') }));
    }

    return products;
  },

  render: function () {
    const isCashback = this.props.cashback == true;
    const isGrosir = this.props.grosir == true;
    const isPreOrderAble = this.props.preorder == true;
    const isRefundAble = this.props.refund == true;

    return React.createElement(
      'div',
      { className: 'feed-product-detail-frame' },
      React.createElement(
        'div',
        { className: 'row-fluid relative p-10 feed-product-detail-items' },
        React.createElement(
          'div',
          { className: 'pull-left mr-15 feed-product-detail-items__image-container' },
          React.createElement(ButtonWishlist, { checked: false }),
          React.createElement('img', { src: getImage(this.props.image), className: 'feed-product-detail-items__image' })
        ),
        React.createElement(
          'div',
          { className: 'feed-product-detail-items__detail-container' },
          React.createElement(
            'h2',
            { className: 'fw-600 lh-18 fs-13 mb-5 feed-product-detail-items__product-name' },
            this.props.productName
          ),
          React.createElement(
            'h2',
            { className: 'fw-600 lh-18 fs-13 mb-5 orange-red feed-product-detail-items__product-price' },
            'Rp. ',
            this.props.productPrice
          ),
          React.createElement(
            'div',
            { className: 'mb-5 feed-product-detail-items__product-rating' },
            this.renderStars()
          ),
          React.createElement(
            'div',
            { className: 'mb-5 feed-product-detail__product-options' },
            isCashback ? React.createElement(
              'span',
              { className: 'fs-10 lh-12 feed-product-detail-items__product-options--green' },
              'Cashback 14%'
            ) : '',
            isGrosir ? React.createElement(
              'span',
              { className: 'fs-10 lh-12 ml-5 feed-product-detail-items__product-options--white' },
              'Grosir'
            ) : '',
            isPreOrderAble ? React.createElement(
              'span',
              { className: 'fs-10 lh-12 ml-5 feed-product-detail-items__product-options--white' },
              'PO'
            ) : '',
            isRefundAble ? React.createElement(
              'span',
              { className: 'ml-5' },
              React.createElement('img', { src: getImage('refund.png'), className: 'feed-product-detail-items__product-options--refund' })
            ) : ''
          )
        )
      )
    );
  }
});



var FeedSearchShop = React.createClass({
  displayName: 'FeedSearchShop',

  render: function () {
    return React.createElement(
      'div',
      { className: 'feed-search-shop' },
      React.createElement(
        'div',
        { className: 'feed-search-shop__image' },
        React.createElement('img', { alt: '', src: getImage('search-shop.png') })
      ),
      React.createElement(
        'div',
        { className: 'feed-search-shop__text' },
        React.createElement(
          'h5',
          { className: 'fs-14 fw-600' },
          'Mau lihat update produk lebih banyak?'
        ),
        React.createElement(
          'p',
          { className: 'fs-12' },
          'Segera favoritkan toko yang Anda sukai.'
        ),
        React.createElement(
          'button',
          { type: 'button', className: 'btn btn-action' },
          'Cari Toko'
        )
      )
    );
  }
});




var FeedSellerStory = React.createClass({
  displayName: 'FeedSellerStory',

  render: function () {
    return React.createElement(
      'div',
      { className: 'feed-seller-story' },
      React.createElement(
        'div',
        { className: 'feed-seller-story__header' },
        'Kisah Sukses dari Penjual Tokopedia'
      ),
      React.createElement(
        'div',
        { className: 'feed-seller-story__image' },
        React.createElement('img', { alt: '', src: getImage('seller-story.png') })
      ),
      React.createElement(
        'div',
        { className: 'feed-seller-story__text' },
        React.createElement(
          'div',
          { className: 'feed-seller-story__text-left' },
          'Peter Chandra Mantan Pegawai Migas Beralih Menjadi Penjual Air Minum di Petamburan.'
        ),
        React.createElement(
          'div',
          { className: 'feed-seller-story__text-right' },
          React.createElement(ButtonShare, null)
        )
      )
    );
  }
});




var FeedTokopediaStory = React.createClass({
  displayName: 'FeedTokopediaStory',

  render: function () {
    return React.createElement(
      'div',
      { className: 'feed-tokopedia-story' },
      React.createElement(
        'div',
        { className: 'feed-tokopedia-story__header' },
        'Seputar Tokopedia'
      ),
      React.createElement(
        'div',
        { className: 'feed-tokopedia-story__card' },
        React.createElement(
          'div',
          { className: 'feed-tokopedia-story__image' },
          React.createElement('img', { alt: '', src: getImage('seputar-toped.png') })
        ),
        React.createElement(
          'div',
          { className: 'feed-tokopedia-story__text' },
          React.createElement(
            'div',
            { className: 'feed-tokopedia-story__text-left' },
            'Saat Generasi Bangsa Bergerak Menuju Perubahan yang Fantastik Gemilang Cahaya'
          ),
          React.createElement(
            'div',
            { className: 'feed-tokopedia-story__text-right' },
            React.createElement(ButtonShare, null)
          )
        )
      )
    );
  }
});




var FeedTopAdsProduct = React.createClass({
  displayName: 'FeedTopAdsProduct',

  getInitialState: function () {
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
  showWishlist: function (elementNumber) {
    switch (elementNumber) {
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
  hideWishlist: function (elementNumber) {
    switch (elementNumber) {
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
  togglePopOver: function () {
    if (!this.state.isShowPopOver) {
      document.onclick = this.togglePopOver;
    } else {
      document.onclick = null;
    }

    this.setState({
      isShowPopover: !this.state.isShowPopover
    });
  },
  render: function () {
    return React.createElement(
      'div',
      { className: 'feed-topads-product' },
      React.createElement(
        'div',
        { className: 'feed-topads-product__header' },
        React.createElement(
          'div',
          { className: 'fs-12 feed-topads-shop__text-promoted', onClick: () => this.togglePopOver() },
          'Promoted',
          React.createElement('img', { className: 'feed-topads-product__image-promoted', src: this.state.isShowPopover ? getImage('icon-info-ijo.png') : getImage('icon-info.png') }),
          this.state.isShowPopover === true && React.createElement(
            'div',
            { className: 'p-20 relative feed-topads-product__popover' },
            React.createElement('img', { className: 'feed-topads-product__popover--arrow', alt: '', src: getImage('arrow-left.png') }),
            React.createElement(
              'h2',
              { className: 'fs-13 fw-normal mb-15 feed-topads-product__popover-text' },
              'Promosi oleh TopAds yang muncul berdasarkan minat Anda.'
            ),
            React.createElement(
              'div',
              { className: 'feed-topads-product__popover-image-container' },
              React.createElement('img', { src: getImage('announcement.png'), className: 'feed-topads-product__popover-image' })
            ),
            React.createElement(
              'button',
              { className: 'btn btn-action fw-normal feed-topads-product__popover-button' },
              'Baca Selengkapnya'
            )
          )
        )
      ),
      React.createElement(
        'div',
        { className: 'feed-topads-product__content' },
        React.createElement(
          'div',
          { className: 'row-fluid' },
          React.createElement(
            'div',
            { className: 'span4 feed-topads-product__items feed-topads-product__items--border-bottom',
              onMouseEnter: () => this.showWishlist(1),
              onMouseLeave: () => this.hideWishlist(1) },
            this.state.isShowWishlist1 && React.createElement(ButtonWishlist, { checked: false }),
            React.createElement('img', { src: getImage('ta-1.jpg'), className: 'feed-topads-product__image' }),
            React.createElement(
              'div',
              { className: 'feed-topads-product__details' },
              React.createElement(
                'div',
                { className: 'fs-12 fw-600 lh-17 feed-topads-product__items--name' },
                React.createElement(
                  'div',
                  { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                  'Amarylis \'Snowflake\''
                )
              ),
              React.createElement(
                'div',
                { className: 'feed-topads-product__items--price' },
                React.createElement(
                  'label',
                  { className: 'fs-12 fw-600 orange-red' },
                  'Rp 45.000'
                )
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'span4 feed-topads-product__items feed-topads-product__items--border-bottom',
              onMouseEnter: () => this.showWishlist(2),
              onMouseLeave: () => this.hideWishlist(2) },
            this.state.isShowWishlist2 && React.createElement(ButtonWishlist, { checked: false }),
            React.createElement('img', { src: getImage('ta-2.jpg'), className: 'feed-topads-product__image' }),
            React.createElement(
              'div',
              { className: 'feed-topads-product__details' },
              React.createElement(
                'div',
                { className: 'fs-12 fw-600 lh-17 feed-topads-product__items--name' },
                React.createElement(
                  'div',
                  { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                  'Aloe Vera Jumbo'
                )
              ),
              React.createElement(
                'div',
                { className: 'feed-topads-product__items--price' },
                React.createElement(
                  'label',
                  { className: 'fs-12 fw-600 orange-red' },
                  'Rp 60.000'
                )
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'span4 feed-topads-product__items feed-topads-product__items--border-bottom',
              onMouseEnter: () => this.showWishlist(3),
              onMouseLeave: () => this.hideWishlist(3) },
            this.state.isShowWishlist3 && React.createElement(ButtonWishlist, { checked: false }),
            React.createElement('img', { src: getImage('ta-3.jpg'), className: 'feed-topads-product__image' }),
            React.createElement(
              'div',
              { className: 'feed-topads-product__details' },
              React.createElement(
                'div',
                { className: 'fs-12 fw-600 lh-17 feed-topads-product__items--name' },
                React.createElement(
                  'div',
                  { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                  'Acalypha Wilkesiana Blaze'
                )
              ),
              React.createElement(
                'div',
                { className: 'feed-topads-product__items--price' },
                React.createElement(
                  'label',
                  { className: 'fs-12 fw-600 orange-red' },
                  'Rp 45.000'
                )
              )
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'row-fluid' },
          React.createElement(
            'div',
            { className: 'span4 feed-topads-product__items',
              onMouseEnter: () => this.showWishlist(4),
              onMouseLeave: () => this.hideWishlist(4) },
            this.state.isShowWishlist4 && React.createElement(ButtonWishlist, { checked: true }),
            React.createElement('img', { src: getImage('ta-4.jpg'), className: 'feed-topads-product__image' }),
            React.createElement(
              'div',
              { className: 'feed-topads-product__details' },
              React.createElement(
                'div',
                { className: 'fs-12 fw-600 lh-17 feed-topads-product__items--name' },
                React.createElement(
                  'div',
                  { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                  'Srikaya Australia Jumbo 60cm'
                )
              ),
              React.createElement(
                'div',
                { className: 'feed-topads-product__items--price' },
                React.createElement(
                  'label',
                  { className: 'fs-12 fw-600 orange-red' },
                  'Rp 95.000'
                )
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'span4 feed-topads-product__items',
              onMouseEnter: () => this.showWishlist(5),
              onMouseLeave: () => this.hideWishlist(5) },
            this.state.isShowWishlist5 && React.createElement(ButtonWishlist, { checked: false }),
            React.createElement('img', { src: getImage('ta-5.jpg'), className: 'feed-topads-product__image' }),
            React.createElement(
              'div',
              { className: 'feed-topads-product__details' },
              React.createElement(
                'div',
                { className: 'fs-12 fw-600 lh-17 feed-topads-product__items--name' },
                React.createElement(
                  'div',
                  { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                  'Jambu Air Dalhari 60cm'
                )
              ),
              React.createElement(
                'div',
                { className: 'feed-topads-product__items--price' },
                React.createElement(
                  'label',
                  { className: 'fs-12 fw-600 orange-red' },
                  'Rp 75.000'
                )
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'span4 feed-topads-product__items',
              onMouseEnter: () => this.showWishlist(6),
              onMouseLeave: () => this.hideWishlist(6) },
            this.state.isShowWishlist6 && React.createElement(ButtonWishlist, { checked: false }),
            React.createElement('img', { src: getImage('ta-6.jpg'), className: 'feed-topads-product__image' }),
            React.createElement(
              'div',
              { className: 'feed-topads-product__details' },
              React.createElement(
                'div',
                { className: 'fs-12 fw-600 lh-17 feed-topads-product__items--name' },
                React.createElement(
                  'div',
                  { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                  'Gowok (Kupa) 150cm'
                )
              ),
              React.createElement(
                'div',
                { className: 'feed-topads-product__items--price' },
                React.createElement(
                  'label',
                  { className: 'fs-12 fw-600 orange-red' },
                  'Rp 915.000'
                )
              )
            )
          )
        )
      )
    );
  }
});



var FeedTopAdsShop = React.createClass({
  displayName: 'FeedTopAdsShop',

  getInitialState: function () {
    return {
      isShowPopOver: false
    };
  },
  togglePopOver: function () {
    if (!this.state.isShowPopOver) {
      document.onclick = this.togglePopOver;
    } else {
      document.onclick = null;
    }

    this.setState({
      isShowPopover: !this.state.isShowPopover
    });
  },

  render: function () {
    return React.createElement(
      'div',
      { className: 'mb-20 feed-topads-shop' },
      React.createElement(
        'div',
        { className: 'fs-12 pb-10 feed-topads-shop__header' },
        React.createElement(
          'div',
          { className: 'pb-10 feed-topads-shop__text-promoted', onClick: () => this.togglePopOver() },
          'Promoted',
          React.createElement('img', { className: 'feed-topads-shop__image-promoted', src: this.state.isShowPopover ? getImage('icon-info-ijo.png') : getImage('icon-info.png') }),
          this.state.isShowPopover === true && React.createElement(
            'div',
            { className: 'p-20 feed-topads-shop__popover' },
            React.createElement('img', { className: 'feed-topads-shop__popover--arrow', alt: '', src: getImage('arrow-left.png') }),
            React.createElement(
              'h2',
              { className: 'fs-13 fw-normal mb-15 feed-topads-shop__popover-text' },
              'Promosi oleh TopAds yang muncul berdasarkan minat Anda.'
            ),
            React.createElement(
              'div',
              { className: 'feed-topads-shop__popover-image-container' },
              React.createElement('img', { src: getImage('announcement.png'), className: 'feed-topads-shop__popover-image' })
            ),
            React.createElement(
              'button',
              { className: 'btn btn-action fw-normal feed-topads-shop__popover-button' },
              'Baca Selengkapnya'
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'va-middle inline-block feed-topads-shop__seller-photo' },
          React.createElement('img', { src: getImage('tokopedia-avatar-square.png') })
        ),
        React.createElement(
          'div',
          { className: 'va-middle feed-topads-shop__seller-activity' },
          React.createElement(
            'span',
            { className: 'fw-600' },
            'Makeup Forever '
          ),
          React.createElement(
            'div',
            { className: 'fs-11 feed-topads-shop__seller-activity--time' },
            'Bukan Produk Biasa'
          )
        ),
        React.createElement(
          'div',
          { className: 'feed-topads-shop__seller-favorite' },
          React.createElement(
            'button',
            { className: 'btn' },
            React.createElement('img', { alt: '', src: getImage('icon-plus.png') }),
            'Favoritkan'
          )
        )
      ),
      React.createElement(
        'div',
        { className: 'feed-topads-shop__content' },
        React.createElement(
          'div',
          { className: 'row-fluid' },
          React.createElement(
            'div',
            { className: 'span6 feed-topads-shop__items' },
            React.createElement('img', { src: getImage('tas-1.jpg'), className: 'feed-topads-shop__image feed-topads-shop__image--big' })
          ),
          React.createElement(
            'div',
            { className: 'span6 feed-topads-shop__showcases' },
            React.createElement(
              'div',
              { className: 'pb-5 row-fluid' },
              React.createElement(
                'div',
                { className: 'span6 feed-topads-shop__items' },
                React.createElement('img', { src: getImage('tas-2.jpg'), className: 'feed-topads-shop__image' })
              ),
              React.createElement(
                'div',
                { className: 'span6 feed-topads-shop__items' },
                React.createElement('img', { src: getImage('tas-3.jpg'), className: 'feed-topads-shop__image' })
              )
            ),
            React.createElement(
              'div',
              { className: 'row-fluid' },
              React.createElement(
                'div',
                { className: 'span6 feed-topads-shop__items' },
                React.createElement('img', { src: getImage('tas-4.jpg'), className: 'feed-topads-shop__image' })
              ),
              React.createElement(
                'div',
                { className: 'span6 feed-topads-shop__items' },
                React.createElement('img', { src: getImage('tas-5.jpg'), className: 'feed-topads-shop__image' })
              )
            )
          )
        )
      )
    );
  }
});

