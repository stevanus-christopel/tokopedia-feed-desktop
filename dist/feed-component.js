



var FeedView = React.createClass({
  displayName: 'FeedView',

  render: function () {
    return React.createElement(
      'div',
      { className: 'feed' },
      React.createElement(
        'div',
        { className: 'feed__main-content' },
        React.createElement(FeedEmpty, null),
        React.createElement(FeedProduct, { productCount: 2 }),
        React.createElement(FeedProduct, { productCount: 3 }),
        React.createElement(FeedOfficialStoreProduct, null),
        React.createElement(FeedMarketingPromo, null),
        React.createElement(FeedProduct, { productCount: 4 }),
        React.createElement(FeedProduct, { productCount: 5 }),
        React.createElement(FeedProduct, { productCount: 6 }),
        React.createElement(FeedSearchShop, null),
        React.createElement(FeedProduct, { productCount: 7 }),
        React.createElement(FeedOfficialStore, null),
        React.createElement(FeedInspiration, null),
        React.createElement(FeedTopAdsProduct, null),
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



var FeedHotlist = React.createClass({
	displayName: 'FeedHotlist',

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
            { className: 'span4 feed-inspiration__items feed-inspiration__items--border-bottom' },
            React.createElement('img', { src: 'http://placehold.it/300x300', className: 'feed-inspiration__image' }),
            React.createElement(
              'div',
              { className: 'feed-inspiration__details' },
              React.createElement(
                'div',
                { className: 'fs-12 fw-600 lh-17 feed-inspiration__items--name' },
                React.createElement(
                  'div',
                  { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                  'Dr.Kevin Stylish and Comfortable Men Sne'
                )
              ),
              React.createElement(
                'div',
                { className: 'feed-inspiration__items--price' },
                React.createElement(
                  'label',
                  { className: 'fs-12 fw-600 orange-red' },
                  'Rp 249.950'
                )
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'span4 feed-inspiration__items feed-inspiration__items--border-bottom' },
            React.createElement('img', { src: 'http://placehold.it/300x300', className: 'feed-inspiration__image' }),
            React.createElement(
              'div',
              { className: 'feed-inspiration__details' },
              React.createElement(
                'div',
                { className: 'fs-12 fw-600 lh-17 feed-inspiration__items--name' },
                React.createElement(
                  'div',
                  { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                  'Dr.Kevin Stylish and Comfortable Men Sne'
                )
              ),
              React.createElement(
                'div',
                { className: 'feed-inspiration__items--price' },
                React.createElement(
                  'label',
                  { className: 'fs-12 fw-600 orange-red' },
                  'Rp 249.950'
                )
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'span4 feed-inspiration__items feed-inspiration__items--border-bottom' },
            React.createElement('img', { src: 'http://placehold.it/300x300', className: 'feed-inspiration__image' }),
            React.createElement(
              'div',
              { className: 'feed-inspiration__details' },
              React.createElement(
                'div',
                { className: 'fs-12 fw-600 lh-17 feed-inspiration__items--name' },
                React.createElement(
                  'div',
                  { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                  'Dr.Kevin Stylish and Comfortable Men Sne'
                )
              ),
              React.createElement(
                'div',
                { className: 'feed-inspiration__items--price' },
                React.createElement(
                  'label',
                  { className: 'fs-12 fw-600 orange-red' },
                  'Rp 249.950'
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
            { className: 'span4 feed-inspiration__items' },
            React.createElement('img', { src: 'http://placehold.it/300x300', className: 'feed-inspiration__image' }),
            React.createElement(
              'div',
              { className: 'feed-inspiration__details' },
              React.createElement(
                'div',
                { className: 'fs-12 fw-600 lh-17 feed-inspiration__items--name' },
                React.createElement(
                  'div',
                  { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                  'Dr.Kevin Stylish and Comfortable Men Sne'
                )
              ),
              React.createElement(
                'div',
                { className: 'feed-inspiration__items--price' },
                React.createElement(
                  'label',
                  { className: 'fs-12 fw-600 orange-red' },
                  'Rp 249.950'
                )
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'span4 feed-inspiration__items' },
            React.createElement('img', { src: 'http://placehold.it/300x300', className: 'feed-inspiration__image' }),
            React.createElement(
              'div',
              { className: 'feed-inspiration__details' },
              React.createElement(
                'div',
                { className: 'fs-12 fw-600 lh-17 feed-inspiration__items--name' },
                React.createElement(
                  'div',
                  { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                  'Dr.Kevin Stylish and Comfortable Men Sne'
                )
              ),
              React.createElement(
                'div',
                { className: 'feed-inspiration__items--price' },
                React.createElement(
                  'label',
                  { className: 'fs-12 fw-600 orange-red' },
                  'Rp 249.950'
                )
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'span4 feed-inspiration__items' },
            React.createElement('img', { src: 'http://placehold.it/300x300', className: 'feed-inspiration__image' }),
            React.createElement(
              'div',
              { className: 'feed-inspiration__details' },
              React.createElement(
                'div',
                { className: 'fs-12 fw-600 lh-17 feed-inspiration__items--name' },
                React.createElement(
                  'div',
                  { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                  'Dr.Kevin Stylish and Comfortable Men Sne'
                )
              ),
              React.createElement(
                'div',
                { className: 'feed-inspiration__items--price' },
                React.createElement(
                  'label',
                  { className: 'fs-12 fw-600 orange-red' },
                  'Rp 249.950'
                )
              )
            )
          )
        )
      )
    );
  }
});




var FeedMarketingPromo = React.createClass({
	displayName: 'FeedMarketingPromo',

	render: function () {
		return React.createElement(
			'div',
			{ className: 'mb-20 feed-marketing-promo' },
			React.createElement(
				'div',
				{ className: 'p-10 feed-marketing-promo__header' },
				React.createElement(
					'div',
					{ className: 'va-middle inline-block feed-marketing-promo__seller-photo' },
					React.createElement('img', { src: tokopediaAvatar })
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
				React.createElement('div', { className: 'feed-marketing-promo__seller-share' })
			),
			React.createElement(
				'div',
				{ className: 'feed-marketing-promo__content' },
				React.createElement(
					'div',
					{ className: 'feed-marketing-promo__arrow--left' },
					React.createElement('img', { src: arrowRight })
				),
				React.createElement(
					'div',
					{ className: 'feed-marketing-promo__arrow--right' },
					React.createElement('img', { src: arrowRight })
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
										{ className: 'pull-left pt-20 pl-15 feed-marketing-promo__code-container' },
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
										{ className: 'pull-left pt-20 pl-15 feed-marketing-promo__code-container' },
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
										{ className: 'span4 feed-official-store-product__image-container-store' },
										React.createElement('img', { src: getImage('tokopedia-avatar-square.png'), className: 'feed-official-store-product__image-store' })
									),
									React.createElement(
										'div',
										{ className: 'span8 pt-15' },
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
										{ className: 'span4 feed-official-store-product__image-container-store' },
										React.createElement('img', { src: getImage('tokopedia-avatar-square.png'), className: 'feed-official-store-product__image-store' })
									),
									React.createElement(
										'div',
										{ className: 'span8 pt-15' },
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
										{ className: 'span4 feed-official-store-product__image-container-store' },
										React.createElement('img', { src: getImage('tokopedia-avatar-square.png'), className: 'feed-official-store-product__image-store' })
									),
									React.createElement(
										'div',
										{ className: 'span8 pt-15' },
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
										{ className: 'span4 feed-official-store-product__image-container-store' },
										React.createElement('img', { src: getImage('tokopedia-avatar-square.png'), className: 'feed-official-store-product__image-store' })
									),
									React.createElement(
										'div',
										{ className: 'span8 pt-15' },
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
										{ className: 'span4 feed-official-store-product__image-container-store' },
										React.createElement('img', { src: getImage('tokopedia-avatar-square.png'), className: 'feed-official-store-product__image-store' })
									),
									React.createElement(
										'div',
										{ className: 'span8 pt-15' },
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
										{ className: 'span4 feed-official-store-product__image-container-store' },
										React.createElement('img', { src: getImage('tokopedia-avatar-square.png'), className: 'feed-official-store-product__image-store' })
									),
									React.createElement(
										'div',
										{ className: 'span8 pt-15' },
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
          ),
          React.createElement(
            'div',
            { className: 'feed-product__seller-activity--time' },
            '3 jam'
          )
        ),
        React.createElement(
          'div',
          { className: 'feed-product__seller-share' },
          React.createElement('img', { alt: '', src: getImage('icon-btn-share.png') }),
          React.createElement(
            'button',
            { className: 'btn' },
            'Bagikan'
          )
        )
      ),
      React.createElement(
        'div',
        { className: 'feed-product__content' },
        this.props.productCount <= 2 ? React.createElement(
          'div',
          { className: 'row-fluid' },
          React.createElement(
            'div',
            { className: 'span6 feed-product__items' },
            React.createElement('img', { src: 'http://placehold.it/300x300', className: 'feed-product__image' }),
            React.createElement(
              'div',
              { className: 'feed-product__details' },
              React.createElement(
                'div',
                { className: 'fs-12 fw-600 lh-17 feed-product__items--name' },
                React.createElement(
                  'div',
                  { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                  'Dr.Kevin Stylish and Comfortable Men Sne'
                )
              ),
              React.createElement(
                'div',
                { className: 'feed-product__items--price' },
                React.createElement(
                  'label',
                  { className: 'fs-12 fw-600 orange-red' },
                  'Rp 249.950'
                )
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'span6 feed-product__items' },
            React.createElement('img', { src: 'http://placehold.it/300x300', className: 'feed-product__image' }),
            React.createElement(
              'div',
              { className: 'feed-product__details' },
              React.createElement(
                'div',
                { className: 'fs-12 fw-600 lh-17 feed-product__items--name' },
                React.createElement(
                  'div',
                  { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                  'Dr.Kevin Stylish and Comfortable Men Sne'
                )
              ),
              React.createElement(
                'div',
                { className: 'feed-product__items--price' },
                React.createElement(
                  'label',
                  { className: 'fs-12 fw-600 orange-red' },
                  'Rp 249.950'
                )
              )
            )
          )
        ) : this.props.productCount === 3 ? React.createElement(
          'div',
          { className: 'row-fluid' },
          React.createElement(
            'div',
            { className: 'span4 feed-product__items' },
            React.createElement('img', { src: 'http://placehold.it/300x300', className: 'feed-product__image' }),
            React.createElement(
              'div',
              { className: 'feed-product__details' },
              React.createElement(
                'div',
                { className: 'fs-12 fw-600 lh-17 feed-product__items--name' },
                React.createElement(
                  'div',
                  { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                  'Dr.Kevin Stylish and Comfortable Men Sne'
                )
              ),
              React.createElement(
                'div',
                { className: 'feed-product__items--price' },
                React.createElement(
                  'label',
                  { className: 'fs-12 fw-600 orange-red' },
                  'Rp 249.950'
                )
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'span4 feed-product__items' },
            React.createElement('img', { src: 'http://placehold.it/300x300', className: 'feed-product__image' }),
            React.createElement(
              'div',
              { className: 'feed-product__details' },
              React.createElement(
                'div',
                { className: 'fs-12 fw-600 lh-17 feed-product__items--name' },
                React.createElement(
                  'div',
                  { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                  'Dr.Kevin Stylish and Comfortable Men Sne'
                )
              ),
              React.createElement(
                'div',
                { className: 'feed-product__items--price' },
                React.createElement(
                  'label',
                  { className: 'fs-12 fw-600 orange-red' },
                  'Rp 249.950'
                )
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'span4 feed-product__items' },
            React.createElement('img', { src: 'http://placehold.it/300x300', className: 'feed-product__image' }),
            React.createElement(
              'div',
              { className: 'feed-product__details' },
              React.createElement(
                'div',
                { className: 'fs-12 fw-600 lh-17 feed-product__items--name' },
                React.createElement(
                  'div',
                  { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                  'Dr.Kevin Stylish and Comfortable Men Sne'
                )
              ),
              React.createElement(
                'div',
                { className: 'feed-product__items--price' },
                React.createElement(
                  'label',
                  { className: 'fs-12 fw-600 orange-red' },
                  'Rp 249.950'
                )
              )
            )
          )
        ) : this.props.productCount === 4 ? React.createElement(
          'div',
          null,
          React.createElement(
            'div',
            { className: 'row-fluid' },
            React.createElement(
              'div',
              { className: 'span6 feed-product__items' },
              React.createElement('img', { src: 'http://placehold.it/300x300', className: 'feed-product__image' }),
              React.createElement(
                'div',
                { className: 'feed-product__details' },
                React.createElement(
                  'div',
                  { className: 'fs-12 fw-600 lh-17 feed-product__items--name' },
                  React.createElement(
                    'div',
                    { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                    'Dr.Kevin Stylish and Comfortable Men Sne'
                  )
                ),
                React.createElement(
                  'div',
                  { className: 'feed-product__items--price' },
                  React.createElement(
                    'label',
                    { className: 'fs-12 fw-600 orange-red' },
                    'Rp 249.950'
                  )
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'span6 feed-product__items' },
              React.createElement('img', { src: 'http://placehold.it/300x300', className: 'feed-product__image' }),
              React.createElement(
                'div',
                { className: 'feed-product__details' },
                React.createElement(
                  'div',
                  { className: 'fs-12 fw-600 lh-17 feed-product__items--name' },
                  React.createElement(
                    'div',
                    { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                    'Dr.Kevin Stylish and Comfortable Men Sne'
                  )
                ),
                React.createElement(
                  'div',
                  { className: 'feed-product__items--price' },
                  React.createElement(
                    'label',
                    { className: 'fs-12 fw-600 orange-red' },
                    'Rp 249.950'
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
              { className: 'span6 feed-product__items feed-product__items--border-top' },
              React.createElement('img', { src: 'http://placehold.it/300x300', className: 'feed-product__image' }),
              React.createElement(
                'div',
                { className: 'feed-product__details' },
                React.createElement(
                  'div',
                  { className: 'fs-12 fw-600 lh-17 feed-product__items--name' },
                  React.createElement(
                    'div',
                    { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                    'Dr.Kevin Stylish and Comfortable Men Sne'
                  )
                ),
                React.createElement(
                  'div',
                  { className: 'feed-product__items--price' },
                  React.createElement(
                    'label',
                    { className: 'fs-12 fw-600 orange-red' },
                    'Rp 249.950'
                  )
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'span6 feed-product__items feed-product__items--border-top' },
              React.createElement('img', { src: 'http://placehold.it/300x300', className: 'feed-product__image' }),
              React.createElement(
                'div',
                { className: 'feed-product__details' },
                React.createElement(
                  'div',
                  { className: 'fs-12 fw-600 lh-17 feed-product__items--name' },
                  React.createElement(
                    'div',
                    { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                    'Dr.Kevin Stylish and Comfortable Men Sne'
                  )
                ),
                React.createElement(
                  'div',
                  { className: 'feed-product__items--price' },
                  React.createElement(
                    'label',
                    { className: 'fs-12 fw-600 orange-red' },
                    'Rp 249.950'
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
            { className: 'row-fluid' },
            React.createElement(
              'div',
              { className: 'span6 feed-product__items' },
              React.createElement('img', { src: 'http://placehold.it/300x300', className: 'feed-product__image' }),
              React.createElement(
                'div',
                { className: 'feed-product__details' },
                React.createElement(
                  'div',
                  { className: 'fs-12 fw-600 lh-17 feed-product__items--name' },
                  React.createElement(
                    'div',
                    { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                    'Dr.Kevin Stylish and Comfortable Men Sne'
                  )
                ),
                React.createElement(
                  'div',
                  { className: 'feed-product__items--price' },
                  React.createElement(
                    'label',
                    { className: 'fs-12 fw-600 orange-red' },
                    'Rp 249.950'
                  )
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'span6 feed-product__items' },
              React.createElement('img', { src: 'http://placehold.it/300x300', className: 'feed-product__image' }),
              React.createElement(
                'div',
                { className: 'feed-product__details' },
                React.createElement(
                  'div',
                  { className: 'fs-12 fw-600 lh-17 feed-product__items--name' },
                  React.createElement(
                    'div',
                    { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                    'Dr.Kevin Stylish and Comfortable Men Sne'
                  )
                ),
                React.createElement(
                  'div',
                  { className: 'feed-product__items--price' },
                  React.createElement(
                    'label',
                    { className: 'fs-12 fw-600 orange-red' },
                    'Rp 249.950'
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
              { className: 'span4 feed-product__items feed-product__items--border-top' },
              React.createElement('img', { src: 'http://placehold.it/300x300', className: 'feed-product__image' }),
              React.createElement(
                'div',
                { className: 'feed-product__details' },
                React.createElement(
                  'div',
                  { className: 'fs-12 fw-600 lh-17 feed-product__items--name' },
                  React.createElement(
                    'div',
                    { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                    'Dr.Kevin Stylish and Comfortable Men Sne'
                  )
                ),
                React.createElement(
                  'div',
                  { className: 'feed-product__items--price' },
                  React.createElement(
                    'label',
                    { className: 'fs-12 fw-600 orange-red' },
                    'Rp 249.950'
                  )
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'span4 feed-product__items feed-product__items--border-top' },
              React.createElement('img', { src: 'http://placehold.it/300x300', className: 'feed-product__image' }),
              React.createElement(
                'div',
                { className: 'feed-product__details' },
                React.createElement(
                  'div',
                  { className: 'fs-12 fw-600 lh-17 feed-product__items--name' },
                  React.createElement(
                    'div',
                    { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                    'Dr.Kevin Stylish and Comfortable Men Sne'
                  )
                ),
                React.createElement(
                  'div',
                  { className: 'feed-product__items--price' },
                  React.createElement(
                    'label',
                    { className: 'fs-12 fw-600 orange-red' },
                    'Rp 249.950'
                  )
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'span4 feed-product__items feed-product__items--border-top' },
              React.createElement('img', { src: 'http://placehold.it/300x300', className: 'feed-product__image' }),
              React.createElement(
                'div',
                { className: 'feed-product__details' },
                React.createElement(
                  'div',
                  { className: 'fs-12 fw-600 lh-17 feed-product__items--name' },
                  React.createElement(
                    'div',
                    { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                    'Dr.Kevin Stylish and Comfortable Men Sne'
                  )
                ),
                React.createElement(
                  'div',
                  { className: 'feed-product__items--price' },
                  React.createElement(
                    'label',
                    { className: 'fs-12 fw-600 orange-red' },
                    'Rp 249.950'
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
            { className: 'row-fluid' },
            React.createElement(
              'div',
              { className: 'span4 feed-product__items' },
              React.createElement('img', { src: 'http://placehold.it/300x300', className: 'feed-product__image' }),
              React.createElement(
                'div',
                { className: 'feed-product__details' },
                React.createElement(
                  'div',
                  { className: 'fs-12 fw-600 lh-17 feed-product__items--name' },
                  React.createElement(
                    'div',
                    { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                    'Dr.Kevin Stylish and Comfortable Men Sne'
                  )
                ),
                React.createElement(
                  'div',
                  { className: 'feed-product__items--price' },
                  React.createElement(
                    'label',
                    { className: 'fs-12 fw-600 orange-red' },
                    'Rp 249.950'
                  )
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'span4 feed-product__items' },
              React.createElement('img', { src: 'http://placehold.it/300x300', className: 'feed-product__image' }),
              React.createElement(
                'div',
                { className: 'feed-product__details' },
                React.createElement(
                  'div',
                  { className: 'fs-12 fw-600 lh-17 feed-product__items--name' },
                  React.createElement(
                    'div',
                    { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                    'Dr.Kevin Stylish and Comfortable Men Sne'
                  )
                ),
                React.createElement(
                  'div',
                  { className: 'feed-product__items--price' },
                  React.createElement(
                    'label',
                    { className: 'fs-12 fw-600 orange-red' },
                    'Rp 249.950'
                  )
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'span4 feed-product__items' },
              React.createElement('img', { src: 'http://placehold.it/300x300', className: 'feed-product__image' }),
              React.createElement(
                'div',
                { className: 'feed-product__details' },
                React.createElement(
                  'div',
                  { className: 'fs-12 fw-600 lh-17 feed-product__items--name' },
                  React.createElement(
                    'div',
                    { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                    'Dr.Kevin Stylish and Comfortable Men Sne'
                  )
                ),
                React.createElement(
                  'div',
                  { className: 'feed-product__items--price' },
                  React.createElement(
                    'label',
                    { className: 'fs-12 fw-600 orange-red' },
                    'Rp 249.950'
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
              { className: 'span4 feed-product__items feed-product__items--border-top' },
              React.createElement('img', { src: 'http://placehold.it/300x300', className: 'feed-product__image' }),
              React.createElement(
                'div',
                { className: 'feed-product__details' },
                React.createElement(
                  'div',
                  { className: 'fs-12 fw-600 lh-17 feed-product__items--name' },
                  React.createElement(
                    'div',
                    { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                    'Dr.Kevin Stylish and Comfortable Men Sne'
                  )
                ),
                React.createElement(
                  'div',
                  { className: 'feed-product__items--price' },
                  React.createElement(
                    'label',
                    { className: 'fs-12 fw-600 orange-red' },
                    'Rp 249.950'
                  )
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'span4 feed-product__items feed-product__items--border-top' },
              React.createElement('img', { src: 'http://placehold.it/300x300', className: 'feed-product__image' }),
              React.createElement(
                'div',
                { className: 'feed-product__details' },
                React.createElement(
                  'div',
                  { className: 'fs-12 fw-600 lh-17 feed-product__items--name' },
                  React.createElement(
                    'div',
                    { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                    'Dr.Kevin Stylish and Comfortable Men Sne'
                  )
                ),
                React.createElement(
                  'div',
                  { className: 'feed-product__items--price' },
                  React.createElement(
                    'label',
                    { className: 'fs-12 fw-600 orange-red' },
                    'Rp 249.950'
                  )
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'span4 feed-product__items feed-product__items--border-top' },
              this.props.productCount > 6 && React.createElement(
                'div',
                { className: 'feed-product__items--overlay' },
                React.createElement(
                  'span',
                  null,
                  '+',
                  this.props.productCount - 6
                )
              ),
              React.createElement('img', { src: 'http://placehold.it/300x300', className: 'feed-product__image' }),
              React.createElement(
                'div',
                { className: 'feed-product__details' },
                React.createElement(
                  'div',
                  { className: 'fs-12 fw-600 lh-17 feed-product__items--name' },
                  React.createElement(
                    'div',
                    { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                    'Dr.Kevin Stylish and Comfortable Men Sne'
                  )
                ),
                React.createElement(
                  'div',
                  { className: 'feed-product__items--price' },
                  React.createElement(
                    'label',
                    { className: 'fs-12 fw-600 orange-red' },
                    'Rp 249.950'
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
            '3 jam'
          )
        ),
        React.createElement('div', { className: 'feed-product-detail__seller-share' })
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
        React.createElement('div', { className: 'feed-seller-story__text-right' })
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
          React.createElement('div', { className: 'feed-tokopedia-story__text-right' })
        )
      )
    );
  }
});



var FeedTopAdsProduct = React.createClass({
    displayName: 'FeedTopAdsProduct',

    render: function () {
        return React.createElement(
            'div',
            { className: 'feed-topads-product' },
            React.createElement(
                'div',
                { className: 'feed-topads-product__header' },
                'Promoted',
                React.createElement('img', { alt: '', src: getImage('icon-info.png') })
            ),
            React.createElement(
                'div',
                { className: 'feed-topads-product__content' },
                React.createElement(
                    'div',
                    { className: 'row-fluid' },
                    React.createElement(
                        'div',
                        { className: 'span4 feed-topads-product__items feed-topads-product__items--border-bottom' },
                        React.createElement('img', { src: 'http://placehold.it/300x300', className: 'feed-topads-product__image' }),
                        React.createElement(
                            'div',
                            { className: 'feed-topads-product__details' },
                            React.createElement(
                                'div',
                                { className: 'fs-12 fw-600 lh-17 feed-topads-product__items--name' },
                                React.createElement(
                                    'div',
                                    { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                                    'Dr.Kevin Stylish and Comfortable Men Sne'
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'feed-topads-product__items--price' },
                                React.createElement(
                                    'label',
                                    { className: 'fs-12 fw-600 orange-red' },
                                    'Rp 249.950'
                                )
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'span4 feed-topads-product__items feed-topads-product__items--border-bottom' },
                        React.createElement('img', { src: 'http://placehold.it/300x300', className: 'feed-topads-product__image' }),
                        React.createElement(
                            'div',
                            { className: 'feed-topads-product__details' },
                            React.createElement(
                                'div',
                                { className: 'fs-12 fw-600 lh-17 feed-topads-product__items--name' },
                                React.createElement(
                                    'div',
                                    { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                                    'Dr.Kevin Stylish and Comfortable Men Sne'
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'feed-topads-product__items--price' },
                                React.createElement(
                                    'label',
                                    { className: 'fs-12 fw-600 orange-red' },
                                    'Rp 249.950'
                                )
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'span4 feed-topads-product__items feed-topads-product__items--border-bottom' },
                        React.createElement('img', { src: 'http://placehold.it/300x300', className: 'feed-topads-product__image' }),
                        React.createElement(
                            'div',
                            { className: 'feed-topads-product__details' },
                            React.createElement(
                                'div',
                                { className: 'fs-12 fw-600 lh-17 feed-topads-product__items--name' },
                                React.createElement(
                                    'div',
                                    { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                                    'Dr.Kevin Stylish and Comfortable Men Sne'
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'feed-topads-product__items--price' },
                                React.createElement(
                                    'label',
                                    { className: 'fs-12 fw-600 orange-red' },
                                    'Rp 249.950'
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
                        { className: 'span4 feed-topads-product__items' },
                        React.createElement('img', { src: 'http://placehold.it/300x300', className: 'feed-topads-product__image' }),
                        React.createElement(
                            'div',
                            { className: 'feed-topads-product__details' },
                            React.createElement(
                                'div',
                                { className: 'fs-12 fw-600 lh-17 feed-topads-product__items--name' },
                                React.createElement(
                                    'div',
                                    { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                                    'Dr.Kevin Stylish and Comfortable Men Sne'
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'feed-topads-product__items--price' },
                                React.createElement(
                                    'label',
                                    { className: 'fs-12 fw-600 orange-red' },
                                    'Rp 249.950'
                                )
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'span4 feed-topads-product__items' },
                        React.createElement('img', { src: 'http://placehold.it/300x300', className: 'feed-topads-product__image' }),
                        React.createElement(
                            'div',
                            { className: 'feed-topads-product__details' },
                            React.createElement(
                                'div',
                                { className: 'fs-12 fw-600 lh-17 feed-topads-product__items--name' },
                                React.createElement(
                                    'div',
                                    { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                                    'Dr.Kevin Stylish and Comfortable Men Sne'
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'feed-topads-product__items--price' },
                                React.createElement(
                                    'label',
                                    { className: 'fs-12 fw-600 orange-red' },
                                    'Rp 249.950'
                                )
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'span4 feed-topads-product__items' },
                        React.createElement('img', { src: 'http://placehold.it/300x300', className: 'feed-topads-product__image' }),
                        React.createElement(
                            'div',
                            { className: 'feed-topads-product__details' },
                            React.createElement(
                                'div',
                                { className: 'fs-12 fw-600 lh-17 feed-topads-product__items--name' },
                                React.createElement(
                                    'div',
                                    { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                                    'Dr.Kevin Stylish and Comfortable Men Sne'
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'feed-topads-product__items--price' },
                                React.createElement(
                                    'label',
                                    { className: 'fs-12 fw-600 orange-red' },
                                    'Rp 249.950'
                                )
                            )
                        )
                    )
                )
            )
        );
    }
});

