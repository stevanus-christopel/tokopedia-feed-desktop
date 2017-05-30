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
					{ className: 'row-fluid' },
					React.createElement('img', { src: 'http://placehold.it/315x100' })
				),
				React.createElement(
					'div',
					{ className: 'row-fluid feed-hot-lists-showcases' },
					React.createElement(
						'div',
						{ className: 'span6 m-0 feed-hot-lists__items' },
						React.createElement('img', { src: 'http://placehold.it/157.5x157.5' })
					),
					React.createElement(
						'div',
						{ className: 'span6 m-0 feed-hot-lists__items' },
						React.createElement('img', { src: 'http://placehold.it/157.5x157.5' })
					)
				),
				React.createElement(
					'div',
					{ className: 'row-fluid feed-hot-lists-showcases' },
					React.createElement(
						'div',
						{ className: 'span6 m-0 feed-hot-lists__items' },
						React.createElement('img', { src: 'http://placehold.it/157.5x157.5' })
					),
					React.createElement(
						'div',
						{ className: 'span6 m-0 feed-hot-lists__items' },
						React.createElement('img', { src: 'http://placehold.it/157.5x157.5' })
					)
				)
			),
			React.createElement(
				'div',
				{ className: 'row-fluid' },
				React.createElement('img', { src: 'http://placehold.it/319x100', className: 'pt-20' })
			),
			React.createElement(
				'div',
				{ className: 'row-fluid' },
				React.createElement('img', { src: 'http://placehold.it/319x100', className: 'pt-20' })
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
					React.createElement('img', { src: 'http://placehold.it/170x170', className: 'feed-official-store__items-image' })
				),
				React.createElement(
					'div',
					{ className: 'span4 feed-official-store__items' },
					React.createElement('img', { src: 'http://placehold.it/170x170', className: 'feed-official-store__items-image' })
				),
				React.createElement(
					'div',
					{ className: 'span4 feed-official-store__items' },
					React.createElement('img', { src: 'http://placehold.it/170x170', className: 'feed-official-store__items-image' })
				)
			),
			React.createElement(
				'div',
				{ className: 'row-fluid feed-official-store__showcase' },
				React.createElement(
					'div',
					{ className: 'span4 feed-official-store__items' },
					React.createElement('img', { src: 'http://placehold.it/170x170', className: 'feed-official-store__items-image' })
				),
				React.createElement(
					'div',
					{ className: 'span4 feed-official-store__items' },
					React.createElement('img', { src: 'http://placehold.it/170x170', className: 'feed-official-store__items-image' })
				),
				React.createElement(
					'div',
					{ className: 'span4 feed-official-store__items' },
					React.createElement('img', { src: 'http://placehold.it/170x170', className: 'feed-official-store__items-image' })
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



var FeedOfficialStoreProduct = React.createClass({
	displayName: 'FeedOfficialStoreProduct',

	render: function () {
		return React.createElement(
			'div',
			{ className: 'feed-official-store-product mb-20' },
			React.createElement(
				'h1',
				{ className: 'fw-normal fs-16 lh-20 pt-50 feed-official-store-product__title--text' },
				'Produk Terpilih dari Official Store'
			),
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
								React.createElement('img', { src: 'http://placehold.it/300x300', className: 'feed-official-store-product__image' }),
								React.createElement(
									'div',
									{ className: 'feed-official-store-product__details' },
									React.createElement(
										'div',
										{ className: 'fs-12 fw-600 lh-17 feed-official-store-product__items--name' },
										React.createElement(
											'div',
											{ className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
											'Dr.Kevin Stylish and Comfortable Men Sne'
										)
									),
									React.createElement(
										'div',
										{ className: 'pb-20 feed-official-store-product__items--price' },
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
								{ className: 'feed-official-store-product__items--store' },
								React.createElement(
									'div',
									{ className: 'span4 feed-official-store-product__image-container-store' },
									React.createElement('img', { src: 'http://placehold.it/30x30', className: 'feed-official-store-product__image-store' })
								),
								React.createElement(
									'div',
									{ className: 'span8 pt-15' },
									React.createElement(
										'label',
										{ className: 'fs-11 text-black07' },
										' Dr. Kevin Shoes'
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
								React.createElement('img', { src: 'http://placehold.it/300x300', className: 'feed-official-store-product__image' }),
								React.createElement(
									'div',
									{ className: 'feed-official-store-product__details' },
									React.createElement(
										'div',
										{ className: 'fs-12 fw-600 lh-17 feed-official-store-product__items--name' },
										'Cincin tunangan kawin pernikahan berlian'
									),
									React.createElement(
										'div',
										{ className: 'pb-20 feed-official-store-product__items--price' },
										React.createElement(
											'label',
											{ className: 'fs-12 fw-600 orange-red' },
											'Rp 3.999.000'
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
									React.createElement('img', { src: 'http://placehold.it/30x30', className: 'feed-official-store-product__image-store' })
								),
								React.createElement(
									'div',
									{ className: 'span8 pt-15' },
									React.createElement(
										'label',
										{ className: 'fs-11 text-black07' },
										' Tiaria'
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
								React.createElement('img', { src: 'http://placehold.it/300x300', className: 'feed-official-store-product__image' }),
								React.createElement(
									'div',
									{ className: 'feed-official-store-product__details' },
									React.createElement(
										'div',
										{ className: 'fs-12 fw-600 lh-17 feed-official-store-product__items--name' },
										'Anker powercore 13400 mah premium black'
									),
									React.createElement(
										'div',
										{ className: 'pb-20 feed-official-store-product__items--price' },
										React.createElement(
											'label',
											{ className: 'fs-12 fw-600 orange-red' },
											'Rp 944.800'
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
									React.createElement('img', { src: 'http://placehold.it/30x30', className: 'feed-official-store-product__image-store' })
								),
								React.createElement(
									'div',
									{ className: 'span8 pt-15' },
									React.createElement(
										'label',
										{ className: 'fs-11 text-black07' },
										' Anker Indonesia'
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
								React.createElement('img', { src: 'http://placehold.it/300x300', className: 'feed-official-store-product__image' }),
								React.createElement(
									'div',
									{ className: 'feed-official-store-product__details' },
									React.createElement(
										'div',
										{ className: 'fs-12 fw-600 lh-17 feed-official-store-product__items--name' },
										React.createElement(
											'div',
											{ className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
											'Dr.Kevin Stylish and Comfortable Men Sne'
										)
									),
									React.createElement(
										'div',
										{ className: 'pb-20 feed-official-store-product__items--price' },
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
								{ className: 'feed-official-store-product__items--store' },
								React.createElement(
									'div',
									{ className: 'span4 feed-official-store-product__image-container-store' },
									React.createElement('img', { src: 'http://placehold.it/30x30', className: 'feed-official-store-product__image-store' })
								),
								React.createElement(
									'div',
									{ className: 'span8 pt-15' },
									React.createElement(
										'label',
										{ className: 'fs-11 text-black07' },
										' Dr. Kevin Shoes'
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
								React.createElement('img', { src: 'http://placehold.it/300x300', className: 'feed-official-store-product__image' }),
								React.createElement(
									'div',
									{ className: 'feed-official-store-product__details' },
									React.createElement(
										'div',
										{ className: 'fs-12 fw-600 lh-17 feed-official-store-product__items--name' },
										'Cincin tunangan kawin pernikahan berlian'
									),
									React.createElement(
										'div',
										{ className: 'pb-20 feed-official-store-product__items--price' },
										React.createElement(
											'label',
											{ className: 'fs-12 fw-600 orange-red' },
											'Rp 3.999.000'
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
									React.createElement('img', { src: 'http://placehold.it/30x30', className: 'feed-official-store-product__image-store' })
								),
								React.createElement(
									'div',
									{ className: 'span8 pt-15' },
									React.createElement(
										'label',
										{ className: 'fs-11 text-black07' },
										' Tiaria'
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
								React.createElement('img', { src: 'http://placehold.it/300x300', className: 'feed-official-store-product__image' }),
								React.createElement(
									'div',
									{ className: 'feed-official-store-product__details' },
									React.createElement(
										'div',
										{ className: 'fs-12 fw-600 lh-17 feed-official-store-product__items--name' },
										'Anker powercore 13400 mah premium black'
									),
									React.createElement(
										'div',
										{ className: 'pb-20 feed-official-store-product__items--price' },
										React.createElement(
											'label',
											{ className: 'fs-12 fw-600 orange-red' },
											'Rp 944.800'
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
									React.createElement('img', { src: 'http://placehold.it/30x30', className: 'feed-official-store-product__image-store' })
								),
								React.createElement(
									'div',
									{ className: 'span8 pt-15' },
									React.createElement(
										'label',
										{ className: 'fs-11 text-black07' },
										' Anker Indonesia'
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
            '2 produk'
          ),
          React.createElement(
            'div',
            { className: 'feed-product__seller-activity--time' },
            '3 jam'
          )
        ),
        React.createElement('div', { className: 'feed-product__seller-share' })
      ),
      React.createElement(
        'div',
        { className: 'feed-product__content' },
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
        )
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
        React.createElement('img', { alt: '', src: 'http://placehold.it/560x200' })
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
          React.createElement('img', { alt: '', src: 'http://placehold.it/560x200' })
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
        React.createElement(FeedProduct, null),
        React.createElement(FeedOfficialStoreProduct, null),
        React.createElement(FeedProduct, null),
        React.createElement(FeedSearchShop, null),
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