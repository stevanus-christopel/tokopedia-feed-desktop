



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
    var obj = { "limit": 3, "userID": 5510345, "cursor": "", "page": 1 };
    this.fetchData(obj);
  },
  fetchData: function (obj) {
    var self = this;
    fetch('https://2-feature-m-staging.tokopedia.com/graphql', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        query: FeedQuery,
        variables: obj
      })
    }).then(response => {
      console.log('berhasil');
      return response;
    });
  },
  renderFeed: function () {
    var feeds = this.getSampleData().data.feed;
    return feeds.data.map(function (item) {
      switch (item.content.type) {
        case 'new_product':
          return React.createElement(FeedProduct, { feed: item, key: item.id });
        case 'promotion':
          return React.createElement(FeedMarketingPromo, { feed: item, key: item.id });
        case 'official_store_brand':
          return React.createElement(FeedOfficialStore, { feed: item, key: item.id });
        case 'official_store_campaign':
          return React.createElement(FeedOfficialStoreProduct, { feed: item, key: item.id });
      }
    });
  },
  renderInspiration: function () {
    var inspiration = this.getSampleData().data.inspiration.data[0];
    return React.createElement(FeedInspiration, { inspiration: inspiration, key: inspiration.title });
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
          React.createElement(FeedOfficialStoreEmpty, null),
          React.createElement(FeedTopAdsShop, null),
          React.createElement(FeedTopAdsShop, null),
          React.createElement(FeedTopAdsProduct, null),
          React.createElement(FeedError, null)
        ) : this.getParameterByName('p') === 'less' ? React.createElement(
          'div',
          null,
          React.createElement(FeedTopAdsShop, null),
          React.createElement(FeedTopAdsShop, null),
          React.createElement(FeedTopAdsShop, null),
          React.createElement(FeedSearchShop, null),
          React.createElement(FeedTopAdsShop, null),
          React.createElement(FeedTopAdsShop, null),
          React.createElement(FeedTokopediaStory, null),
          React.createElement(FeedSellerStory, null)
        ) : React.createElement(
          'div',
          null,
          this.renderFeed(),
          this.renderInspiration()
        )
      ),
      React.createElement(
        'div',
        { className: 'feed__right-sidebar' },
        React.createElement(FeedHotList, null)
      )
    );
  },
  getSampleData: function () {
    return {
      "data": {
        "feed": {
          "data": [{
            "id": "1",
            "create_time": "0001-01-01T00:00:00Z",
            "type": "activity",
            "cursor": null,
            "source": {
              "type": 1,
              "shop": null
            },
            "content": {
              "type": "official_store_brand",
              "total_product": null,
              "products": null,
              "promotions": null,
              "status_activity": null,
              "official_store": [{
                "shop_id": 479394,
                "shop_defaultv3_url": "https://staging.tokopedia.com/unilever-id",
                "shop_mobile_url": "https://m-staging.tokopedia.com/unilever-id",
                "shop_apps_url": "tokopedia://shop/unilever-id",
                "shop_name": "Unilever Official Store",
                "logo_url": "https://imagerouter-staging.tokopedia.com/img/125-square/shops-1/2017/2/13/5484103/5484103_9898004f-b07b-4fc9-b2f7-7cbedf58a397.jpg",
                "microsite_url": "https://ecs7.tokopedia.net/img/official_store/microsite/unilever/unilever.png",
                "brand_img_url": "https://ecs7.tokopedia.net/img/official_store/microsite/unilever/unilever.jpg",
                "is_owner": false,
                "shop_tagline": "Unilever Official Store",
                "is_new": false,
                "title": null,
                "mobile_img_url": null,
                "feed_hexa_color": null,
                "products": null
              }, {
                "shop_id": 479420,
                "shop_defaultv3_url": "https://staging.tokopedia.com/perkakaskubosch",
                "shop_mobile_url": "https://m-staging.tokopedia.com/perkakaskubosch",
                "shop_apps_url": "tokopedia://shop/perkakaskubosch",
                "shop_name": "Perkakasku by Bosch",
                "logo_url": "https://imagerouter-staging.tokopedia.com/img/125-square/shops-1/2017/3/17/479420/479420_2bd48e8d-3e17-4d88-a9e8-e95a72c20376.png",
                "microsite_url": "https://ecs7.tokopedia.net/img/official_store/microsite/bosch/perkakasku.png",
                "brand_img_url": "https://ecs7.tokopedia.net/img/official_store/microsite/bosch/perkakasku.jpg",
                "is_owner": false,
                "shop_tagline": "Solusi Kebutuhan Perkakas Anda",
                "is_new": false,
                "title": null,
                "mobile_img_url": null,
                "feed_hexa_color": null,
                "products": null
              }, {
                "shop_id": 479154,
                "shop_defaultv3_url": "https://staging.tokopedia.com/mustika-ratu",
                "shop_mobile_url": "https://m-staging.tokopedia.com/mustika-ratu",
                "shop_apps_url": "tokopedia://shop/mustika-ratu",
                "shop_name": "Mustika Ratu QC",
                "logo_url": "https://imagerouter-staging.tokopedia.com/img/125-square/shops-1/2016/12/14/479154/479154_febffbc6-e162-4235-8e01-baa2926fb335.jpg",
                "microsite_url": "https://ecs7.tokopedia.net/img/official_store/microsite/mustika-ratu/mustika.png",
                "brand_img_url": "https://ecs7.tokopedia.net/img/official_store/microsite/mustika-ratu/mustika-ratu.jpg",
                "is_owner": false,
                "shop_tagline": "Pusaka Indonesia",
                "is_new": true,
                "title": null,
                "mobile_img_url": null,
                "feed_hexa_color": null,
                "products": null
              }, {
                "shop_id": 479664,
                "shop_defaultv3_url": "https://staging.tokopedia.com/kebunbibit-qc",
                "shop_mobile_url": "https://m-staging.tokopedia.com/kebunbibit-qc",
                "shop_apps_url": "tokopedia://shop/kebunbibit-qc",
                "shop_name": "kebunbibit-qc",
                "logo_url": "https://imagerouter-staging.tokopedia.com/img/125-square/shops-1/2017/4/25/479664/479664_23228014-ddaf-4180-b7c9-9a41a007ed7c.jpg",
                "microsite_url": "https://ecs7.tokopedia.net/img/cache/244/attachment/2017/5/10/5480066/5480066_f3d43066-5443-4481-bf54-511370da6de5.png",
                "brand_img_url": "https://ecs7.tokopedia.net/img/cache/500/attachment/2017/5/10/5480066/5480066_8148d0fb-2735-4661-8427-f008a5057b8e.jpg",
                "is_owner": false,
                "shop_tagline": "penuh dengan bunga",
                "is_new": true,
                "title": null,
                "mobile_img_url": null,
                "feed_hexa_color": null,
                "products": null
              }]
            }
          }, {
            "id": "1665",
            "create_time": "2017-05-10T15:52:54+07:00",
            "type": "activity",
            "cursor": "MTY2NQ==",
            "source": {
              "type": 2,
              "shop": {
                "id": 479548,
                "name": "Toko Patu !@#$%^&amp;*&#40;&#41;",
                "avatar": "https://imagerouter-staging.tokopedia.com/img/215-square/shops-1/2017/3/29/479548/479548_a138ce0c-f463-4b49-8b6a-c27b2b8f0fe6.jpg",
                "isOfficial": false,
                "isGold": false,
                "url": "https://staging.tokopedia.com/patupatu",
                "shopLink": "tokopedia://shop/479548",
                "shareLinkDescription": "Produk baru dari Toko Patu !@#$%^&amp;*&#40;&#41; di Tokopedia",
                "shareLinkURL": "https://m-staging.tokopedia.com/feedcommunicationdetail/1665"
              }
            },
            "content": {
              "type": "new_product",
              "total_product": 64,
              "products": [{
                "id": 14295998,
                "name": "Sepatu Converse Aja deh",
                "price": "Rp 222.222",
                "image": "https://imagerouter-staging.tokopedia.com/img/200-square/product-1/2017/4/4/5510296/5510296_0e15e802-9cbb-463f-8c0a-e7152bf5371c_1500_1053.jpg",
                "image_single": "https://imagerouter-staging.tokopedia.com/img/500-square/product-1/2017/4/4/5510296/5510296_0e15e802-9cbb-463f-8c0a-e7152bf5371c_1500_1053.jpg",
                "wholesale": [],
                "freereturns": true,
                "preorder": false,
                "cashback": "",
                "url": "https://staging.tokopedia.com/patupatu/sepatu-converse-aja-deh",
                "productLink": "tokopedia://product/14295998",
                "wishlist": true,
                "rating": 0
              }, {
                "id": 14295999,
                "name": "Sepatu Fila Puncak",
                "price": "Rp 333.333",
                "image": "https://imagerouter-staging.tokopedia.com/img/200-square/product-1/2017/4/4/5510296/5510296_74c18d63-afea-48da-9458-66944bd580dc_1500_749.jpg",
                "image_single": "https://imagerouter-staging.tokopedia.com/img/500-square/product-1/2017/4/4/5510296/5510296_74c18d63-afea-48da-9458-66944bd580dc_1500_749.jpg",
                "wholesale": [],
                "freereturns": true,
                "preorder": false,
                "cashback": "",
                "url": "https://staging.tokopedia.com/patupatu/sepatu-fila-puncak",
                "productLink": "tokopedia://product/14295999",
                "wishlist": true,
                "rating": 0
              }, {
                "id": 14296000,
                "name": "Sepatu Orang Bagus",
                "price": "Rp 111.121",
                "image": "https://imagerouter-staging.tokopedia.com/img/200-square/product-1/2017/4/4/5510296/5510296_ced5d68c-31e9-47fa-b888-f6b52abcbd86_1500_853.jpg",
                "image_single": "https://imagerouter-staging.tokopedia.com/img/500-square/product-1/2017/4/4/5510296/5510296_ced5d68c-31e9-47fa-b888-f6b52abcbd86_1500_853.jpg",
                "wholesale": [],
                "freereturns": true,
                "preorder": false,
                "cashback": "",
                "url": "https://staging.tokopedia.com/patupatu/sepatu-orang-bagus",
                "productLink": "tokopedia://product/14296000",
                "wishlist": false,
                "rating": 0
              }, {
                "id": 14296001,
                "name": "Sepatu Sparxling WaTER",
                "price": "Rp 112.312",
                "image": "https://imagerouter-staging.tokopedia.com/img/200-square/product-1/2017/4/4/5510296/5510296_6f5e201b-b72b-4c21-84f6-02f0470d2452_1500_682.jpg",
                "image_single": "https://imagerouter-staging.tokopedia.com/img/500-square/product-1/2017/4/4/5510296/5510296_6f5e201b-b72b-4c21-84f6-02f0470d2452_1500_682.jpg",
                "wholesale": [],
                "freereturns": true,
                "preorder": false,
                "cashback": "",
                "url": "https://staging.tokopedia.com/patupatu/sepatu-sparxling-water",
                "productLink": "tokopedia://product/14296001",
                "wishlist": false,
                "rating": 0
              }, {
                "id": 14296002,
                "name": "Sepatu Uhui AHAI",
                "price": "Rp 122.412",
                "image": "https://imagerouter-staging.tokopedia.com/img/200-square/product-1/2017/4/10/5510296/5510296_84edda0a-82f8-4ce9-9a1a-04643bc0ea1a_600_600.jpg",
                "image_single": "https://imagerouter-staging.tokopedia.com/img/500-square/product-1/2017/4/10/5510296/5510296_84edda0a-82f8-4ce9-9a1a-04643bc0ea1a_600_600.jpg",
                "wholesale": [],
                "freereturns": true,
                "preorder": false,
                "cashback": "",
                "url": "https://staging.tokopedia.com/patupatu/sepatu-uhui-ahai",
                "productLink": "tokopedia://product/14296002",
                "wishlist": false,
                "rating": 0
              }, {
                "id": 14296003,
                "name": "Sepatu Pait",
                "price": "Rp 1.111",
                "image": "https://imagerouter-staging.tokopedia.com/img/200-square/product-1/2017/4/11/5510296/5510296_eba86042-1c5e-4131-95a8-1ec1e0485b25_1920_1440.jpg",
                "image_single": "https://imagerouter-staging.tokopedia.com/img/500-square/product-1/2017/4/11/5510296/5510296_eba86042-1c5e-4131-95a8-1ec1e0485b25_1920_1440.jpg",
                "wholesale": [],
                "freereturns": false,
                "preorder": false,
                "cashback": "",
                "url": "https://staging.tokopedia.com/patupatu/sepatu-pait",
                "productLink": "tokopedia://product/14296003",
                "wishlist": false,
                "rating": 0
              }, {
                "id": 14296004,
                "name": "Sepatu Converse Norak",
                "price": "Rp 1.211",
                "image": "https://imagerouter-staging.tokopedia.com/img/200-square/product-1/2017/4/3/5510296/5510296_e3f9f529-52ff-4d97-8b4b-60fc2a809ec6_480_360.jpg",
                "image_single": "https://imagerouter-staging.tokopedia.com/img/500-square/product-1/2017/4/3/5510296/5510296_e3f9f529-52ff-4d97-8b4b-60fc2a809ec6_480_360.jpg",
                "wholesale": [{
                  "qty_min_fmt": "5"
                }],
                "freereturns": false,
                "preorder": false,
                "cashback": "",
                "url": "https://staging.tokopedia.com/patupatu/sepatu-converse-norak",
                "productLink": "tokopedia://product/14296004",
                "wishlist": false,
                "rating": 0
              }],
              "promotions": null,
              "status_activity": {
                "source": "Toko Patu !@#$%^&amp;*&#40;&#41;",
                "activity": "tambah",
                "amount": 64
              },
              "official_store": null
            }
          }, {
            "id": "0",
            "create_time": "0001-01-01T00:00:00Z",
            "type": "activity",
            "cursor": null,
            "source": {
              "type": 1,
              "shop": null
            },
            "content": {
              "type": "promotion",
              "total_product": null,
              "products": null,
              "promotions": [{
                "id": "2112",
                "name": "lucky-draw",
                "type": "promotion",
                "thumbnail": "https://ecs7.tokopedia.net/img/blog/promo/wp-content/uploads/2017/05/Thumbnail-301.jpg",
                "feature_image": "https://ecs7.tokopedia.net/img/blog/promo/wp-content/uploads/2017/05/Feature-Image-29.jpg",
                "description": "<p>Jadi yang tercepat &#038; menangkan Battle Pass (khusus jam 19.00-20.00 &#038; 21.00-22.00 WIB). Tersedia 2 hingga 4 Battle Pass yang dibagikan tiap harinya!</p>\n",
                "periode": "12 - 18 Juni 2017",
                "code": "BATTLEPASS",
                "url": "https://www.tokopedia.com/promo/lucky-draw/",
                "min_transcation": "Rp50.000"
              }, {
                "id": "4850",
                "name": "cashback-18",
                "type": "promotion",
                "thumbnail": "https://ecs7.tokopedia.net/img/blog/promo/wp-content/uploads/2017/06/Thumbnail-28.jpg",
                "feature_image": "https://ecs7.tokopedia.net/img/blog/promo/wp-content/uploads/2017/06/Feature-Image-26.jpg",
                "description": "<p>Ayo tangkap THR dari Tokopedia! Cashback hingga Rp30.000 ke TokoCash tiap top up pulsa / paket data!</p>\n",
                "periode": "12 - 19 Juni 2017",
                "code": "THR2017",
                "url": "https://www.tokopedia.com/promo/cashback-18/",
                "min_transcation": ""
              }, {
                "id": "4834",
                "name": "cashback-11",
                "type": "promotion",
                "thumbnail": "https://ecs7.tokopedia.net/img/blog/promo/wp-content/uploads/2017/06/Thumbnail-1.jpg",
                "feature_image": "https://ecs7.tokopedia.net/img/blog/promo/wp-content/uploads/2017/06/Feature-Image-1.jpg",
                "description": "<p>Sebelum mudik, ayo bayar tagihan HP pascabayar dan dapatkan cashback TokoCash Rp25.000!</p>\n",
                "periode": "12 - 30 Juni 2017",
                "code": "BAYARDULU",
                "url": "https://www.tokopedia.com/promo/cashback-11/",
                "min_transcation": "Rp125.000"
              }],
              "status_activity": null,
              "official_store": null
            }
          }, {
            "id": "1667",
            "create_time": "2017-05-10T15:22:25+07:00",
            "type": "activity",
            "cursor": "MTY2Nw==",
            "source": {
              "type": 2,
              "shop": {
                "id": 479102,
                "name": "Mouse Jerry Shop",
                "avatar": "https://imagerouter-staging.tokopedia.com/img/215-square/shops-1/2016/11/18/479102/479102_816a27ad-4cb1-41af-9619-908ed63e1090.jpg",
                "isOfficial": false,
                "isGold": false,
                "url": "https://staging.tokopedia.com/mousejerry",
                "shopLink": "tokopedia://shop/479102",
                "shareLinkDescription": "Produk baru dari Mouse Jerry Shop di Tokopedia",
                "shareLinkURL": "https://m-staging.tokopedia.com/feedcommunicationdetail/1667"
              }
            },
            "content": {
              "type": "new_product",
              "total_product": 12,
              "products": [{
                "id": 14296006,
                "name": "imajinasi tinggi",
                "price": "Rp 100",
                "image": "https://imagerouter-staging.tokopedia.com/img/200-square/product-1/2017/5/10/5480440/5480440_f658736c-af0c-473b-b75f-bb547c979143_480_360.jpg",
                "image_single": "https://imagerouter-staging.tokopedia.com/img/500-square/product-1/2017/5/10/5480440/5480440_f658736c-af0c-473b-b75f-bb547c979143_480_360.jpg",
                "wholesale": [],
                "freereturns": false,
                "preorder": false,
                "cashback": "",
                "url": "https://staging.tokopedia.com/mousejerry/imajinasi-tinggi",
                "productLink": "tokopedia://product/14296006",
                "wishlist": true,
                "rating": 0
              }, {
                "id": 14296007,
                "name": "waspada wisudahlah",
                "price": "Rp 100",
                "image": "https://imagerouter-staging.tokopedia.com/img/200-square/product-1/2017/5/10/5480440/5480440_9c724992-0799-486e-9d61-c9f750444380_474_518.jpg",
                "image_single": "https://imagerouter-staging.tokopedia.com/img/500-square/product-1/2017/5/10/5480440/5480440_9c724992-0799-486e-9d61-c9f750444380_474_518.jpg",
                "wholesale": [],
                "freereturns": false,
                "preorder": false,
                "cashback": "",
                "url": "https://staging.tokopedia.com/mousejerry/waspada-wisudahlah",
                "productLink": "tokopedia://product/14296007",
                "wishlist": true,
                "rating": 0
              }, {
                "id": 14296008,
                "name": "tom baca koran",
                "price": "Rp 100",
                "image": "https://imagerouter-staging.tokopedia.com/img/200-square/product-1/2017/5/10/5480440/5480440_4f233ab1-3bdc-4316-b42c-793cd61d93ec_473_473.png",
                "image_single": "https://imagerouter-staging.tokopedia.com/img/500-square/product-1/2017/5/10/5480440/5480440_4f233ab1-3bdc-4316-b42c-793cd61d93ec_473_473.png",
                "wholesale": [],
                "freereturns": false,
                "preorder": false,
                "cashback": "",
                "url": "https://staging.tokopedia.com/mousejerry/tom-baca-koran",
                "productLink": "tokopedia://product/14296008",
                "wishlist": true,
                "rating": 0
              }, {
                "id": 14296010,
                "name": "rumah mewah",
                "price": "Rp 100",
                "image": "https://imagerouter-staging.tokopedia.com/img/200-square/product-1/2017/5/10/5480440/5480440_311817bc-362a-4097-a9a1-3fb9d806f9bc_500_500.jpg",
                "image_single": "https://imagerouter-staging.tokopedia.com/img/500-square/product-1/2017/5/10/5480440/5480440_311817bc-362a-4097-a9a1-3fb9d806f9bc_500_500.jpg",
                "wholesale": [],
                "freereturns": false,
                "preorder": false,
                "cashback": "",
                "url": "https://staging.tokopedia.com/mousejerry/rumah-mewah",
                "productLink": "tokopedia://product/14296010",
                "wishlist": true,
                "rating": 0
              }, {
                "id": 14296012,
                "name": "magical doremi",
                "price": "Rp 783",
                "image": "https://imagerouter-staging.tokopedia.com/img/200-square/product-1/2017/3/9/5480440/5480440_300277db-c71b-4739-babc-c0b17f7d2ff3_2023_1181.jpg",
                "image_single": "https://imagerouter-staging.tokopedia.com/img/500-square/product-1/2017/3/9/5480440/5480440_300277db-c71b-4739-babc-c0b17f7d2ff3_2023_1181.jpg",
                "wholesale": [],
                "freereturns": false,
                "preorder": true,
                "cashback": "",
                "url": "https://staging.tokopedia.com/mousejerry/magical-doremi",
                "productLink": "tokopedia://product/14296012",
                "wishlist": true,
                "rating": 0
              }, {
                "id": 14296013,
                "name": "tmn tipe 1 & 2",
                "price": "Rp 111",
                "image": "https://imagerouter-staging.tokopedia.com/img/200-square/product-1/2017/3/10/5480440/5480440_56d37c40-d988-4872-837d-246561673efd_565_960.jpg",
                "image_single": "https://imagerouter-staging.tokopedia.com/img/500-square/product-1/2017/3/10/5480440/5480440_56d37c40-d988-4872-837d-246561673efd_565_960.jpg",
                "wholesale": [],
                "freereturns": false,
                "preorder": false,
                "cashback": "",
                "url": "https://staging.tokopedia.com/mousejerry/tmn-tipe-1-2",
                "productLink": "tokopedia://product/14296013",
                "wishlist": true,
                "rating": 0
              }, {
                "id": 14296015,
                "name": "pikawatch",
                "price": "Rp 111",
                "image": "https://imagerouter-staging.tokopedia.com/img/200-square/product-1/2017/5/10/5480440/5480440_1fcf563a-96e9-4686-aa48-fc8cf169c18a_1200_675.jpg",
                "image_single": "https://imagerouter-staging.tokopedia.com/img/500-square/product-1/2017/5/10/5480440/5480440_1fcf563a-96e9-4686-aa48-fc8cf169c18a_1200_675.jpg",
                "wholesale": [],
                "freereturns": false,
                "preorder": true,
                "cashback": "",
                "url": "https://staging.tokopedia.com/mousejerry/pikawatch",
                "productLink": "tokopedia://product/14296015",
                "wishlist": true,
                "rating": 0
              }],
              "promotions": null,
              "status_activity": {
                "source": "Mouse Jerry Shop",
                "activity": "tambah",
                "amount": 12
              },
              "official_store": null
            }
          }, {
            "id": "1639",
            "create_time": "2017-05-09T15:51:30+07:00",
            "type": "activity",
            "cursor": "MTYzOQ==",
            "source": {
              "type": 2,
              "shop": {
                "id": 479548,
                "name": "Toko Patu !@#$%^&amp;*&#40;&#41;",
                "avatar": "https://imagerouter-staging.tokopedia.com/img/215-square/shops-1/2017/3/29/479548/479548_a138ce0c-f463-4b49-8b6a-c27b2b8f0fe6.jpg",
                "isOfficial": false,
                "isGold": false,
                "url": "https://staging.tokopedia.com/patupatu",
                "shopLink": "tokopedia://shop/479548",
                "shareLinkDescription": "Produk baru dari Toko Patu !@#$%^&amp;*&#40;&#41; di Tokopedia",
                "shareLinkURL": "https://m-staging.tokopedia.com/feedcommunicationdetail/1639"
              }
            },
            "content": {
              "type": "new_product",
              "total_product": 1,
              "products": [{
                "id": 14295529,
                "name": "sepatu pokemon banyak",
                "price": "Rp 23.123",
                "image": "https://imagerouter-staging.tokopedia.com/img/200-square/product-1/2017/5/9/5510296/5510296_3443aedc-430d-4c68-9c13-d0f1ce41ae68_500_488.jpg",
                "image_single": "https://imagerouter-staging.tokopedia.com/img/500-square/product-1/2017/5/9/5510296/5510296_3443aedc-430d-4c68-9c13-d0f1ce41ae68_500_488.jpg",
                "wholesale": [],
                "freereturns": false,
                "preorder": false,
                "cashback": "",
                "url": "https://staging.tokopedia.com/patupatu/sepatu-pokemon-banyak",
                "productLink": "tokopedia://product/14295529",
                "wishlist": true,
                "rating": 0
              }],
              "promotions": null,
              "status_activity": {
                "source": "Toko Patu !@#$%^&amp;*&#40;&#41;",
                "activity": "tambah",
                "amount": 1
              },
              "official_store": null
            }
          }, {
            "id": "1594",
            "create_time": "2017-05-08T17:31:53+07:00",
            "type": "activity",
            "cursor": "MTU5NA==",
            "source": {
              "type": 2,
              "shop": {
                "id": 479548,
                "name": "Toko Patu !@#$%^&amp;*&#40;&#41;",
                "avatar": "https://imagerouter-staging.tokopedia.com/img/215-square/shops-1/2017/3/29/479548/479548_a138ce0c-f463-4b49-8b6a-c27b2b8f0fe6.jpg",
                "isOfficial": false,
                "isGold": false,
                "url": "https://staging.tokopedia.com/patupatu",
                "shopLink": "tokopedia://shop/479548",
                "shareLinkDescription": "Produk baru dari Toko Patu !@#$%^&amp;*&#40;&#41; di Tokopedia",
                "shareLinkURL": "https://m-staging.tokopedia.com/feedcommunicationdetail/1594"
              }
            },
            "content": {
              "type": "new_product",
              "total_product": 4,
              "products": [{
                "id": 14294789,
                "name": "dinosaurus ada lope di palanya",
                "price": "Rp 223",
                "image": "https://imagerouter-staging.tokopedia.com/img/200-square/product-1/2017/5/8/5510296/5510296_46681d1e-a9e5-4384-99df-bdc8d9455aeb_500_500.png",
                "image_single": "https://imagerouter-staging.tokopedia.com/img/500-square/product-1/2017/5/8/5510296/5510296_46681d1e-a9e5-4384-99df-bdc8d9455aeb_500_500.png",
                "wholesale": [],
                "freereturns": true,
                "preorder": false,
                "cashback": "",
                "url": "https://staging.tokopedia.com/patupatu/dinosaurus-ada-lope-di-palanya",
                "productLink": "tokopedia://product/14294789",
                "wishlist": true,
                "rating": 0
              }, {
                "id": 14294791,
                "name": "sesuatu",
                "price": "Rp 332.432",
                "image": "https://imagerouter-staging.tokopedia.com/img/200-square/product-1/2017/5/8/5510296/5510296_47e729a0-ef61-4055-a303-c2fe9a3793bd_666_777.jpg",
                "image_single": "https://imagerouter-staging.tokopedia.com/img/500-square/product-1/2017/5/8/5510296/5510296_47e729a0-ef61-4055-a303-c2fe9a3793bd_666_777.jpg",
                "wholesale": [],
                "freereturns": false,
                "preorder": false,
                "cashback": "",
                "url": "https://staging.tokopedia.com/patupatu/sesuatu",
                "productLink": "tokopedia://product/14294791",
                "wishlist": false,
                "rating": 0
              }, {
                "id": 14294790,
                "name": "tikus kesetrum",
                "price": "Rp 1.231",
                "image": "https://imagerouter-staging.tokopedia.com/img/200-square/product-1/2017/5/8/5510296/5510296_442b4be9-ce17-4f3b-ad8b-6cc79eb2fb50_300_300.png",
                "image_single": "https://imagerouter-staging.tokopedia.com/img/500-square/product-1/2017/5/8/5510296/5510296_442b4be9-ce17-4f3b-ad8b-6cc79eb2fb50_300_300.png",
                "wholesale": [],
                "freereturns": false,
                "preorder": false,
                "cashback": "",
                "url": "https://staging.tokopedia.com/patupatu/tikus-kesetrum",
                "productLink": "tokopedia://product/14294790",
                "wishlist": true,
                "rating": 0
              }, {
                "id": 14294791,
                "name": "sesuatu",
                "price": "Rp 332.432",
                "image": "https://imagerouter-staging.tokopedia.com/img/200-square/product-1/2017/5/8/5510296/5510296_47e729a0-ef61-4055-a303-c2fe9a3793bd_666_777.jpg",
                "image_single": "https://imagerouter-staging.tokopedia.com/img/500-square/product-1/2017/5/8/5510296/5510296_47e729a0-ef61-4055-a303-c2fe9a3793bd_666_777.jpg",
                "wholesale": [],
                "freereturns": false,
                "preorder": false,
                "cashback": "",
                "url": "https://staging.tokopedia.com/patupatu/sesuatu",
                "productLink": "tokopedia://product/14294791",
                "wishlist": false,
                "rating": 0
              }],
              "promotions": null,
              "status_activity": {
                "source": "Toko Patu !@#$%^&amp;*&#40;&#41;",
                "activity": "tambah",
                "amount": 4
              },
              "official_store": null
            }
          }, {
            "id": "1587",
            "create_time": "2017-05-08T16:06:16+07:00",
            "type": "activity",
            "cursor": "MTU4Nw==",
            "source": {
              "type": 2,
              "shop": {
                "id": 479541,
                "name": "Kumamo Store",
                "avatar": "https://imagerouter-staging.tokopedia.com/img/215-square/shops-1/2017/3/30/479541/479541_92590dec-29c2-41ca-982e-dfd125732978.png",
                "isOfficial": false,
                "isGold": false,
                "url": "https://staging.tokopedia.com/kumamostore",
                "shopLink": "tokopedia://shop/479541",
                "shareLinkDescription": "Produk baru dari Kumamo Store di Tokopedia",
                "shareLinkURL": "https://m-staging.tokopedia.com/feedcommunicationdetail/1587"
              }
            },
            "content": {
              "type": "new_product",
              "total_product": 5,
              "products": [{
                "id": 14294780,
                "name": "bersama kita bisak",
                "price": "Rp 3.123",
                "image": "https://imagerouter-staging.tokopedia.com/img/200-square/product-1/2017/5/2/5510248/5510248_6d946fbe-580d-4e51-a749-fe1a3a5c50fc_1920_1080.jpg",
                "image_single": "https://imagerouter-staging.tokopedia.com/img/500-square/product-1/2017/5/2/5510248/5510248_6d946fbe-580d-4e51-a749-fe1a3a5c50fc_1920_1080.jpg",
                "wholesale": [],
                "freereturns": false,
                "preorder": false,
                "cashback": "",
                "url": "https://staging.tokopedia.com/kumamostore/bersama-kita-bisak",
                "productLink": "tokopedia://product/14294780",
                "wishlist": true,
                "rating": 0
              }, {
                "id": 14294781,
                "name": "bersama kita bisvak",
                "price": "Rp 3.123",
                "image": "https://imagerouter-staging.tokopedia.com/img/200-square/product-1/2017/5/2/5510248/5510248_6d946fbe-580d-4e51-a749-fe1a3a5c50fc_1920_1080.jpg",
                "image_single": "https://imagerouter-staging.tokopedia.com/img/500-square/product-1/2017/5/2/5510248/5510248_6d946fbe-580d-4e51-a749-fe1a3a5c50fc_1920_1080.jpg",
                "wholesale": [],
                "freereturns": false,
                "preorder": false,
                "cashback": "",
                "url": "https://staging.tokopedia.com/kumamostore/bersama-kita-bisvak",
                "productLink": "tokopedia://product/14294781",
                "wishlist": true,
                "rating": 0
              }, {
                "id": 14294782,
                "name": "kapten kidd",
                "price": "Rp 2.312",
                "image": "https://imagerouter-staging.tokopedia.com/img/200-square/product-1/2017/5/2/5510248/5510248_e83c0785-beaa-4062-94d6-f7d948f5d704_1000_755.png",
                "image_single": "https://imagerouter-staging.tokopedia.com/img/500-square/product-1/2017/5/2/5510248/5510248_e83c0785-beaa-4062-94d6-f7d948f5d704_1000_755.png",
                "wholesale": [],
                "freereturns": false,
                "preorder": false,
                "cashback": "",
                "url": "https://staging.tokopedia.com/kumamostore/kapten-kidd",
                "productLink": "tokopedia://product/14294782",
                "wishlist": true,
                "rating": 0
              }, {
                "id": 14294783,
                "name": "kapten kiddd",
                "price": "Rp 2.312",
                "image": "https://imagerouter-staging.tokopedia.com/img/200-square/product-1/2017/5/2/5510248/5510248_e83c0785-beaa-4062-94d6-f7d948f5d704_1000_755.png",
                "image_single": "https://imagerouter-staging.tokopedia.com/img/500-square/product-1/2017/5/2/5510248/5510248_e83c0785-beaa-4062-94d6-f7d948f5d704_1000_755.png",
                "wholesale": [],
                "freereturns": false,
                "preorder": false,
                "cashback": "",
                "url": "https://staging.tokopedia.com/kumamostore/kapten-kiddd",
                "productLink": "tokopedia://product/14294783",
                "wishlist": true,
                "rating": 0
              }, {
                "id": 14294783,
                "name": "kapten kiddd",
                "price": "Rp 2.312",
                "image": "https://imagerouter-staging.tokopedia.com/img/200-square/product-1/2017/5/2/5510248/5510248_e83c0785-beaa-4062-94d6-f7d948f5d704_1000_755.png",
                "image_single": "https://imagerouter-staging.tokopedia.com/img/500-square/product-1/2017/5/2/5510248/5510248_e83c0785-beaa-4062-94d6-f7d948f5d704_1000_755.png",
                "wholesale": [],
                "freereturns": false,
                "preorder": false,
                "cashback": "",
                "url": "https://staging.tokopedia.com/kumamostore/kapten-kiddd",
                "productLink": "tokopedia://product/14294783",
                "wishlist": true,
                "rating": 0
              }],
              "promotions": null,
              "status_activity": {
                "source": "Kumamo Store",
                "activity": "tambah",
                "amount": 5
              },
              "official_store": null
            }
          }, {
            "id": "1590",
            "create_time": "2017-05-08T16:04:57+07:00",
            "type": "activity",
            "cursor": "MTU5MA==",
            "source": {
              "type": 2,
              "shop": {
                "id": 479548,
                "name": "Toko Patu !@#$%^&amp;*&#40;&#41;",
                "avatar": "https://imagerouter-staging.tokopedia.com/img/215-square/shops-1/2017/3/29/479548/479548_a138ce0c-f463-4b49-8b6a-c27b2b8f0fe6.jpg",
                "isOfficial": false,
                "isGold": false,
                "url": "https://staging.tokopedia.com/patupatu",
                "shopLink": "tokopedia://shop/479548",
                "shareLinkDescription": "Produk baru dari Toko Patu !@#$%^&amp;*&#40;&#41; di Tokopedia",
                "shareLinkURL": "https://m-staging.tokopedia.com/feedcommunicationdetail/1590"
              }
            },
            "content": {
              "type": "new_product",
              "total_product": 1,
              "products": [{
                "id": 14294784,
                "name": "Sengoku Astrayayayayayay",
                "price": "Rp 11.212",
                "image": "https://imagerouter-staging.tokopedia.com/img/200-square/product-1/2017/4/27/5510296/5510296_db9b0ad6-fc11-47dc-914b-f1bffe88a697_1022_645.jpg",
                "image_single": "https://imagerouter-staging.tokopedia.com/img/500-square/product-1/2017/4/27/5510296/5510296_db9b0ad6-fc11-47dc-914b-f1bffe88a697_1022_645.jpg",
                "wholesale": [],
                "freereturns": true,
                "preorder": false,
                "cashback": "",
                "url": "https://staging.tokopedia.com/patupatu/sengoku-astrayayayayayay",
                "productLink": "tokopedia://product/14294784",
                "wishlist": true,
                "rating": 0
              }],
              "promotions": null,
              "status_activity": {
                "source": "Toko Patu !@#$%^&amp;*&#40;&#41;",
                "activity": "tambah",
                "amount": 1
              },
              "official_store": null
            }
          }, {
            "id": "1559",
            "create_time": "2017-05-05T18:57:21+07:00",
            "type": "activity",
            "cursor": "MTU1OQ==",
            "source": {
              "type": 2,
              "shop": {
                "id": 479548,
                "name": "Toko Patu !@#$%^&amp;*&#40;&#41;",
                "avatar": "https://imagerouter-staging.tokopedia.com/img/215-square/shops-1/2017/3/29/479548/479548_a138ce0c-f463-4b49-8b6a-c27b2b8f0fe6.jpg",
                "isOfficial": false,
                "isGold": false,
                "url": "https://staging.tokopedia.com/patupatu",
                "shopLink": "tokopedia://shop/479548",
                "shareLinkDescription": "Produk baru dari Toko Patu !@#$%^&amp;*&#40;&#41; di Tokopedia",
                "shareLinkURL": "https://m-staging.tokopedia.com/feedcommunicationdetail/1559"
              }
            },
            "content": {
              "type": "new_product",
              "total_product": 1,
              "products": [{
                "id": 14293458,
                "name": "uc30",
                "price": "Rp 3.234",
                "image": "https://imagerouter-staging.tokopedia.com/img/200-square/product-1/2017/5/3/5510296/5510296_0e3c98db-af07-4fb8-8053-625d1cacba84_1023_627.jpg",
                "image_single": "https://imagerouter-staging.tokopedia.com/img/500-square/product-1/2017/5/3/5510296/5510296_0e3c98db-af07-4fb8-8053-625d1cacba84_1023_627.jpg",
                "wholesale": [],
                "freereturns": false,
                "preorder": false,
                "cashback": "",
                "url": "https://staging.tokopedia.com/patupatu/uc30",
                "productLink": "tokopedia://product/14293458",
                "wishlist": false,
                "rating": 0
              }],
              "promotions": null,
              "status_activity": {
                "source": "Toko Patu !@#$%^&amp;*&#40;&#41;",
                "activity": "tambah",
                "amount": 1
              },
              "official_store": null
            }
          }, {
            "id": "20",
            "create_time": "0001-01-01T00:00:00Z",
            "type": "activity",
            "cursor": null,
            "source": {
              "type": 1,
              "shop": null
            },
            "content": {
              "type": "official_store_campaign",
              "total_product": null,
              "products": null,
              "promotions": null,
              "status_activity": null,
              "official_store": [{
                "shop_id": null,
                "shop_defaultv3_url": null,
                "shop_mobile_url": null,
                "shop_apps_url": null,
                "shop_name": null,
                "logo_url": null,
                "microsite_url": null,
                "brand_img_url": null,
                "is_owner": null,
                "shop_tagline": null,
                "is_new": null,
                "title": "Bigger Height Campaign Mobile",
                "mobile_img_url": "https://ecs7.tokopedia.net/img/cache/560/attachment/2017/6/5/5480066/5480066_a4dfaf39-40bd-4252-a3f0-ba30a9a72e45.jpg",
                "feed_hexa_color": "#42B549",
                "products": [{
                  "brand_id": 479154,
                  "brand_logo": "https://imagerouter-staging.tokopedia.com/img/125-square/shops-1/2016/12/14/479154/479154_febffbc6-e162-4235-8e01-baa2926fb335.jpg",
                  "data": {
                    "id": 14266485,
                    "name": "Mustika Ratu Rose Mawar Bath & Shower Gel Refill (500 mL)",
                    "url": "https://staging.tokopedia.com/mustika-ratu/mustika-ratu-rose-mawar-bath-shower-gel-refill-500-ml?trkid=f%3DCa0000L000P0W0S0Sh00Co0Po0Fr0Cb0_src%3Dosmicrositecampaign_page%3D1_ob%3D32_q%3D_catid%3D454_po%3D1",
                    "image_url": "https://ecs7.tokopedia.net/img/cache/300-square/product-1/2016/12/17/5480705/5480705_8f138b0c-4bad-4603-8571-4499dc5e90f2.jpg",
                    "image_url_700": "https://ecs7.tokopedia.net/img/cache/700/product-1/2016/12/17/5480705/5480705_8f138b0c-4bad-4603-8571-4499dc5e90f2.jpg",
                    "price": "Rp 16.279",
                    "shop": {
                      "name": "Mustika Ratu QC",
                      "url": "https://staging.tokopedia.com/mustika-ratu",
                      "location": "Jakarta"
                    }
                  }
                }, {
                  "brand_id": 479084,
                  "brand_logo": "https://imagerouter-staging.tokopedia.com/img/125-square/shops-1/2016/12/2/479084/479084_124b432a-ae51-4c4f-b590-af544558bdeb.jpg",
                  "data": {
                    "id": 14266155,
                    "name": "EVERCOSS ELEVATE Y2+ POWER WHITE",
                    "url": "https://staging.tokopedia.com/evercoss/evercoss-elevate-y2-power-white?trkid=f%3DCa0000L000P0W0S0Sh00Co0Po0Fr0Cb0_src%3Dosmicrositecampaign_page%3D1_ob%3D32_q%3D_catid%3D276_po%3D2",
                    "image_url": "https://ecs7.tokopedia.net/img/cache/300-square/product-1/2016/11/24/5480337/5480337_e4910399-e9b9-4f48-bbda-fde90eafa3a0_594_480.png",
                    "image_url_700": "https://ecs7.tokopedia.net/img/cache/700/product-1/2016/11/24/5480337/5480337_e4910399-e9b9-4f48-bbda-fde90eafa3a0_594_480.png",
                    "price": "Rp 1.174.500",
                    "shop": {
                      "name": "EVERCOSS OFFICIAL STORE",
                      "url": "https://staging.tokopedia.com/evercoss",
                      "location": "Jakarta"
                    }
                  }
                }, {
                  "brand_id": 479647,
                  "brand_logo": "https://imagerouter-staging.tokopedia.com/img/125-square/shops-1/2017/4/18/479647/479647_3a972e14-a35d-4b4e-b63d-76a05d6978ce.jpg",
                  "data": {
                    "id": 14290527,
                    "name": "Belvita Madu dan Coklat 80 gr",
                    "url": "https://staging.tokopedia.com/mondelez/belvita-madu-dan-coklat-80-gr?trkid=f%3DCa0000L000P0W0S0Sh00Co0Po0Fr0Cb0_src%3Dosmicrositecampaign_page%3D1_ob%3D32_q%3D_catid%3D1129_po%3D3",
                    "image_url": "https://ecs7.tokopedia.net/img/cache/300-square/product-1/2017/4/18/5510844/5510844_135914e3-7560-4613-9119-5e806635cbe7_300_300.jpg",
                    "image_url_700": "https://ecs7.tokopedia.net/img/cache/700/product-1/2017/4/18/5510844/5510844_135914e3-7560-4613-9119-5e806635cbe7_300_300.jpg",
                    "price": "Rp 8.000",
                    "shop": {
                      "name": "Mondelez Official Store",
                      "url": "https://staging.tokopedia.com/mondelez",
                      "location": "Jakarta"
                    }
                  }
                }, {
                  "brand_id": 479664,
                  "brand_logo": "https://imagerouter-staging.tokopedia.com/img/125-square/shops-1/2017/4/25/479664/479664_23228014-ddaf-4180-b7c9-9a41a007ed7c.jpg",
                  "data": {
                    "id": 14291393,
                    "name": "Hormon Grow Tone",
                    "url": "https://staging.tokopedia.com/kebunbibit-qc/hormon-grow-tone?trkid=f%3DCa0000L000P0W0S0Sh00Co0Po0Fr0Cb0_src%3Dosmicrositecampaign_page%3D1_ob%3D32_q%3D_catid%3D520_po%3D4",
                    "image_url": "https://ecs7.tokopedia.net/img/cache/300-square/product-1/2017/4/25/5510885/5510885_8c92e3da-8365-494c-a18b-eb4a14353736_300_300.jpg",
                    "image_url_700": "https://ecs7.tokopedia.net/img/cache/700/product-1/2017/4/25/5510885/5510885_8c92e3da-8365-494c-a18b-eb4a14353736_300_300.jpg",
                    "price": "Rp 142.000",
                    "shop": {
                      "name": "kebunbibit-qc",
                      "url": "https://staging.tokopedia.com/kebunbibit-qc",
                      "location": "Kota Surabaya"
                    }
                  }
                }]
              }]
            }
          }],
          "links": {
            "self": "/v1/feeds/5510345",
            "pagination": {
              "has_next_page": true
            }
          },
          "meta": {
            "total_data": 9
          }
        },
        "inspiration": {
          "data": [{
            "source": "top_trend",
            "title": "Trend di Tokopedia",
            "foreign_title": "Trending in Tokopedia",
            "pagination": {
              "current_page": 1,
              "next_page": 2,
              "prev_page": -1
            },
            "recommendation": [{
              "id": "36869044",
              "name": "Mainan Anak Playpad Anak Muslim 3 Bahasa Lampu Led / Mainan Edukatif",
              "url": "https://staging.tokopedia.com/toyhouse/mainan-anak-playpad-anak-muslim-3-bahasa-lampu-led-mainan-edukatif",
              "image_url": "https://ecs7.tokopedia.net/img/cache/200-square/product-1/2016/3/19/7538549/7538549_60955917-088a-4697-9edc-2a5e757b60a2.jpg",
              "price": "Rp 45.900"
            }, {
              "id": "54296357",
              "name": "koko anak gamis anak pria laki laki baju muslim",
              "url": "https://staging.tokopedia.com/gamisanakpria/koko-anak-gamis-anak-pria-laki-laki-baju-muslim",
              "image_url": "https://ecs7.tokopedia.net/img/cache/200-square/product-1/2017/4/15/54296357/54296357_7ead45f1-7f5b-4c9d-98ef-9c29ea4de134_719_1280.jpg",
              "price": "Rp 75.000"
            }, {
              "id": "41634260",
              "name": "NEW BAJU KOKO LENGAN PENDEK HIGH QUALITY KEMEJA MUSLIM RAMADHAN",
              "url": "https://staging.tokopedia.com/oppayummysnack/new-baju-koko-lengan-pendek-high-quality-kemeja-muslim-ramadhan",
              "image_url": "https://ecs7.tokopedia.net/img/cache/200-square/product-1/2017/6/10/41634260/41634260_e5c36192-87a6-4bf3-865a-d99dee0088b5_400_400.jpg",
              "price": "Rp 57.000"
            }, {
              "id": "180867614",
              "name": "iridescent original rainbow Fidget spinner",
              "url": "https://staging.tokopedia.com/indotech-jkt/iridescent-original-rainbow-fidget-spinner",
              "image_url": "https://ecs7.tokopedia.net/img/cache/200-square/product-1/2017/6/4/180867614/180867614_ce19e330-3b44-42aa-a10a-f069b4649cd2_338_600",
              "price": "Rp 190.000"
            }]
          }]
        }
      }
    };
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
  shareFacebook: function () {
    var item = this.props.item;

    const shopName = item !== {} ? item.source.shop.name : '';
    const newShopName = shopName.replace(/&#(\d+);/g, (match, dec) => String.fromCharCode(dec));
    const name = item !== {} ? `Produk baru dari ${newShopName} di Tokopedia` : '';
    const urls = item !== {} ? item.source.shop.url : '';
    const picture = item !== {} ? item.source.shop.avatar : '';
    const shareurl = `${'https://www.facebook.com/sharer/sharer.php?u='}${encodeURIComponent(urls)}&title=${name}&picture=${encodeURIComponent(picture)}`;
    window.open(shareurl, '_blank', `
        scrollbars=yes, resizable=no, 
        toolbar=no, location=yes`);
  },
  shareTwitter: function () {
    var item = this.props.item;

    const shopName = item !== {} ? item.source.shop.name : '';
    const newShopName = shopName.replace(/&#(\d+);/g, (match, dec) => String.fromCharCode(dec));
    const name = item !== {} ? `Produk baru dari ${newShopName} | Tokopedia` : '';
    const urls = item !== {} ? item.source.shop.url : '';
    const shareurl = `${'https://twitter.com/intent/tweet?url='}${encodeURIComponent(urls)}&text=${encodeURIComponent(name)}`;
    window.open(shareurl, '_blank', `
        scrollbars=yes, resizable=no, 
        toolbar=no, location=yes`);
  },
  shareGooglePlus: function () {
    var item = this.props.item;

    const name = item !== {} ? `Produk baru dari ${item.source.shop.name} | Tokopedia` : '';
    const urls = item !== {} ? item.source.shop.url : '';
    const url = `${'https://plus.google.com/share?url='}${encodeURIComponent(urls)}&title=${encodeURIComponent(name)}`;
    window.open(url, '_blank', `
        scrollbars=yes, resizable=no, 
        toolbar=no, location=yes`);
  },
  shareWhatsapp: function () {
    var item = this.props.item;

    const linkDescription = item !== {} ? item.source.shop.shareLinkDescription : '';
    const linkURL = item !== {} ? item.source.shop.shareLinkURL : '';
    const encodedLinkDes = linkDescription.replace(/&#(\d+);/g, (match, dec) => String.fromCharCode(dec));
    const newLinkDes = encodedLinkDes.replace(/&|%|#/g, '');
    const name = `${newLinkDes} ${linkURL}`;
    window.open(`whatsapp://send?text=${name}`, '_self');
  },
  shareLine: function () {
    var item = this.props.item;

    const linkDescription = item !== {} ? item.source.shop.shareLinkDescription : '';
    const linkURL = item !== {} ? item.source.shop.shareLinkURL : '';
    const name = `${linkDescription} ${linkURL}`;
    const shareurl = `${'http://line.me/R/msg/text/?'}${encodeURIComponent(name)}`;
    window.open(shareurl, '_self', `
        scrollbars=yes, resizable=no, 
        toolbar=no, location=yes`);
  },
  shareLink: function () {
    var item = this.props.item;
    // define your default ID, for example we use pattern [feedplus-container-]
    const selector = `feedplus-container-${item.id}`;
    const linkDescription = item !== {} ? item.source.shop.shareLinkDescription : '';
    const linkURL = item !== {} ? item.source.shop.shareLinkURL : '';
    const name = `${linkDescription} ${linkURL}`;
    const dummy = document.createElement('div');
    document.getElementById(selector).appendChild(dummy);
    dummy.setAttribute('id', 'dummyUrl');
    document.getElementById('dummyUrl').innerHTML = name;

    if (document.selection) {
      const range = document.body.createTextRange();
      range.moveToElementText(document.getElementById('dummyUrl'));
      range.select().createTextRange();
      document.execCommand("Copy");
    } else if (window.getSelection) {
      window.getSelection().removeAllRanges();
      const range = document.createRange();
      range.selectNode(document.getElementById('dummyUrl'));
      window.getSelection().addRange(range);
      document.execCommand("Copy");
    }
    document.getElementById(selector).removeChild(dummy);

    document.getElementsByClassName('button-share__toast-container')[0].classList.add('show');
    setTimeout(() => {
      document.getElementsByClassName('button-share__toast-container')[0].classList.remove('show');
    }, 2000);
  },
  render: function () {
    return React.createElement(
      'div',
      { onMouseLeave: () => this.setState({ isShowPopover: false }) },
      React.createElement(
        'div',
        { className: 'button-share__toast-container ta-center' },
        React.createElement(
          'div',
          { className: 'fs-12 inline-block' },
          'Link telah disalin'
        )
      ),
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
        React.createElement('img', { className: 'button-share--link', alt: '', src: getImage('icon-fb.png'), onClick: () => this.shareFacebook() }),
        React.createElement('img', { className: 'button-share--link', alt: '', src: getImage('icon-twitter.png'), onClick: () => this.shareTwitter() }),
        React.createElement('img', { className: 'button-share--link', alt: '', src: getImage('icon-g.png'), onClick: () => this.shareGooglePlus() }),
        React.createElement('img', { className: 'button-share--link', alt: '', src: getImage('icon-wa.png'), onClick: () => this.shareWhatsapp() }),
        React.createElement('img', { className: 'button-share--link', alt: '', src: getImage('icon-line.png'), onClick: () => this.shareLine() }),
        React.createElement('img', { className: 'button-share--link', alt: '', src: getImage('icon-link.png'), onClick: () => this.shareLink() })
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

  searchShop: function () {
    window.location = '/fav-shop.pl';
  },
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
          { type: 'button', onClick: () => this.searchShop(), className: 'btn btn-action' },
          'Cari Toko'
        )
      )
    );
  }
});



var FeedError = React.createClass({
  displayName: 'FeedError',

  render: function () {
    return React.createElement(
      'div',
      { className: 'feed-error mb-20' },
      React.createElement(
        'p',
        null,
        'Mohon maaf terjadi kendala, silakan coba lagi.'
      ),
      React.createElement(
        'button',
        { className: 'btn btn-action' },
        'Coba Lagi'
      )
    );
  }
});



var FeedHotList = React.createClass({
	displayName: 'FeedHotList',

	render: function () {
		return React.createElement(
			'div',
			{ className: 'feed-hot-list' },
			React.createElement(
				'h3',
				{ className: 'feed-hot-list__title' },
				'Stylish Daily Outfit ',
				React.createElement('hr', null)
			),
			React.createElement(
				'div',
				{ className: 'feed-hot-list__image' },
				React.createElement('img', { src: getImage('hl-1.jpg') })
			),
			React.createElement(
				'div',
				{ className: 'feed-hot-list__image' },
				React.createElement('img', { src: getImage('hl-2.jpg') })
			),
			React.createElement(
				'div',
				{ className: 'feed-hot-list__image' },
				React.createElement('img', { src: getImage('hl-3.jpg') })
			),
			React.createElement(
				'div',
				{ className: 'feed-hot-list__image' },
				React.createElement('img', { src: getImage('hl-4.jpg') })
			)
		);
	}
});




var FeedInspiration = React.createClass({
  displayName: 'FeedInspiration',

  getInitialState: function () {
    return {
      isShowWishlist: [false, false, false, false, false, false]
    };
  },
  showWishlist: function (elementNumber) {
    var localIsShowWishList = this.state.isShowWishlist;
    localIsShowWishList[elementNumber] = true;

    this.setState({
      isShowWishlist: localIsShowWishList
    });
  },
  hideWishlist: function (elementNumber) {
    var localIsShowWishList = this.state.isShowWishlist;
    localIsShowWishList[elementNumber] = false;

    this.setState({
      isShowWishlist: localIsShowWishList
    });
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
          this.props.inspiration.recommendation.map(function (item, index) {
            return React.createElement(
              'div',
              { className: index === 2 || index === 5 ? 'span4 feed-inspiration__items feed-inspiration__items--white-border-right' : 'span4 feed-inspiration__items', key: item.id,
                onMouseEnter: () => this.showWishlist(index),
                onMouseLeave: () => this.hideWishlist(index) },
              this.state.isShowWishlist[index] && React.createElement(ButtonWishlist, { checked: this.state.isShowWishlist[index] }),
              React.createElement(
                'a',
                { href: item.url },
                React.createElement('img', { src: item.image_url, className: 'feed-inspiration__image' })
              ),
              React.createElement(
                'div',
                { className: 'feed-inspiration__details' },
                React.createElement(
                  'div',
                  { className: 'fs-12 fw-600 lh-17 feed-inspiration__items--name' },
                  React.createElement(
                    'div',
                    { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                    React.createElement(
                      'a',
                      { href: item.url },
                      item.name
                    )
                  )
                ),
                React.createElement(
                  'div',
                  { className: 'feed-inspiration__items--price' },
                  React.createElement(
                    'label',
                    { className: 'fs-12 fw-600' },
                    React.createElement(
                      'a',
                      { className: 'orange-red', href: item.url },
                      item.price
                    )
                  )
                )
              )
            );
          }, this),
          React.createElement(
            'div',
            { className: 'span4 feed-inspiration__items',
              onMouseEnter: () => this.showWishlist(4),
              onMouseLeave: () => this.hideWishlist(4) },
            this.state.isShowWishlist[4] && React.createElement(ButtonWishlist, { checked: this.state.isShowWishlist[4] }),
            React.createElement('img', { src: getImage('inspiration.jpg'), className: 'feed-inspiration__image' }),
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
              onMouseEnter: () => this.showWishlist(5),
              onMouseLeave: () => this.hideWishlist(5) },
            this.state.isShowWishlist[5] && React.createElement(ButtonWishlist, { checked: this.state.isShowWishlist[5] }),
            React.createElement('img', { src: getImage('inspiration.jpg'), className: 'feed-inspiration__image' }),
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
				{ className: 'feed-marketing-promo__toast-container ta-center' },
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
				this.props.feed.content.promotions.map(function (promo) {
					return React.createElement(
						'div',
						{ className: 'row-fluid feed-marketing-promo__content-items', key: promo.id },
						React.createElement(
							'div',
							{ className: 'feed-marketing-promo__content-container' },
							React.createElement(
								'div',
								{ className: 'feed-marketing-promo__content-frame' },
								React.createElement(
									'div',
									{ className: 'feed-marketing-promo__content-list' },
									React.createElement(
										'a',
										{ href: promo.url },
										React.createElement('img', { src: promo.feature_image, className: 'feed-marketing-promo__content-image' })
									),
									React.createElement(
										'div',
										{ className: 'row-fluid' },
										React.createElement(
											'div',
											{ className: 'pull-left feed-marketing-promo__content-details' },
											React.createElement('div', { className: 'fs-13 lh-20 fw-normal m-0 pb-10 feed-marketing-promo__content-title',
												dangerouslySetInnerHTML: { __html: promo.description } }),
											React.createElement(
												'h3',
												{ className: 'fs-12 fw-normal feed-marketing-promo__content-promo mb-0' },
												React.createElement(
													'span',
													null,
													'Periode: '
												),
												promo.periode
											)
										),
										promo.code.length != 0 && React.createElement(
											'div',
											{ className: 'pull-left pl-10 feed-marketing-promo__code-container mb-10' },
											React.createElement(
												'span',
												{ className: 'fs-12 fw-normal feed-marketing-promo__code-label' },
												'Kode :'
											),
											React.createElement(
												'div',
												{ className: 'ta-center feed-marketing-promo__code-box' },
												React.createElement(
													'span',
													{ className: 'fs-13 fw-600 feed-marketing-promo__code-text' },
													promo.code
												)
											),
											React.createElement(
												'button',
												{ className: 'btn btn-action ml-5 feed-marketing-promo__btn-save-promo',
													onClick: () => this.copyPromoCode() },
												'Salin'
											)
										)
									)
								)
							)
						)
					);
				}, this)
			),
			React.createElement(
				'a',
				{ href: 'https://www.tokopedia.com/promo/' },
				React.createElement(
					'div',
					{ className: 'ta-center p-10 feed-marketing-promo__footer' },
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
					React.createElement(
						'a',
						{ href: this.props.feed.content.official_store[0].shop_defaultv3_url },
						React.createElement('img', { src: this.props.feed.content.official_store[0].microsite_url, className: 'feed-official-store__items-image' })
					)
				),
				React.createElement(
					'div',
					{ className: 'span4 feed-official-store__items' },
					React.createElement(
						'a',
						{ href: this.props.feed.content.official_store[1].shop_defaultv3_url },
						React.createElement('img', { src: this.props.feed.content.official_store[1].microsite_url, className: 'feed-official-store__items-image' })
					)
				),
				React.createElement(
					'div',
					{ className: 'span4 feed-official-store__items' },
					React.createElement(
						'a',
						{ href: this.props.feed.content.official_store[2].shop_defaultv3_url },
						React.createElement('img', { src: this.props.feed.content.official_store[2].microsite_url, className: 'feed-official-store__items-image' })
					)
				)
			),
			React.createElement(
				'div',
				{ className: 'row-fluid feed-official-store__showcase' },
				React.createElement(
					'div',
					{ className: 'span4 feed-official-store__items' },
					React.createElement(
						'a',
						{ href: this.props.feed.content.official_store[2].shop_defaultv3_url },
						React.createElement('img', { src: this.props.feed.content.official_store[3].microsite_url, className: 'feed-official-store__items-image' })
					)
				),
				React.createElement(
					'div',
					{ className: 'span4 feed-official-store__items' },
					React.createElement(
						'a',
						{ href: this.props.feed.content.official_store[2].shop_defaultv3_url },
						React.createElement('img', { src: this.props.feed.content.official_store[3].microsite_url, className: 'feed-official-store__items-image' })
					)
				),
				React.createElement(
					'div',
					{ className: 'span4 feed-official-store__items' },
					React.createElement(
						'a',
						{ href: this.props.feed.content.official_store[2].shop_defaultv3_url },
						React.createElement('img', { src: this.props.feed.content.official_store[3].microsite_url, className: 'feed-official-store__items-image' })
					)
				)
			),
			React.createElement(
				'div',
				{ className: 'ta-center row-fluid feed-official-store__link-more' },
				React.createElement(
					'a',
					{ href: 'https://www.tokopedia.com/official-store' },
					'Lihat Semua'
				)
			)
		);
	}
});



var FeedOfficialStoreEmpty = React.createClass({
  displayName: 'FeedOfficialStoreEmpty',

  render: function () {
    return React.createElement(
      'div',
      { className: 'feed-official-store-empty mb-20' },
      React.createElement(
        'div',
        { className: 'feed-official-store-empty__left' },
        React.createElement('img', { src: getImage('off-store-icon.png'), alt: '' })
      ),
      React.createElement(
        'div',
        { className: 'feed-official-store-empty__right' },
        'Sudah cek Official Store Tokopedia belum? ',
        React.createElement(
          'a',
          { href: 'https://www.tokopedia.com/official-store' },
          'Lihat Sekarang'
        )
      )
    );
  }
});



var FeedOfficialStoreProduct = React.createClass({
	displayName: 'FeedOfficialStoreProduct',

	render: function () {
		const colorStyle = {
			backgroundColor: this.props.feed.content.official_store[0].feed_hexa_color
		};
		return React.createElement(
			'div',
			null,
			React.createElement(
				'div',
				{ className: 'feed-official-store-product__banner-image-container' },
				React.createElement('img', { className: 'feed-official-store-product__banner-image',
					src: this.props.feed.content.official_store[0].mobile_img_url, alt: '' })
			),
			React.createElement(
				'div',
				{ className: 'pt-0 mb-20 feed-official-store-product mb-20',
					style: colorStyle },
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
									React.createElement('img', { src: this.props.feed.content.official_store[0].products[0].data.image_url, className: 'feed-official-store-product__image' }),
									React.createElement(
										'div',
										{ className: 'feed-official-store-product__details' },
										React.createElement(
											'div',
											{ className: 'fs-12 fw-600 lh-17 feed-official-store-product__items--name' },
											React.createElement(
												'div',
												{ className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
												this.props.feed.content.official_store[0].products[0].data.name
											)
										),
										React.createElement(
											'div',
											{ className: 'pb-20 feed-official-store-product__items--price' },
											React.createElement(
												'label',
												{ className: 'fs-12 fw-600 orange-red' },
												this.props.feed.content.official_store[0].products[0].data.price
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
										React.createElement('img', { src: this.props.feed.content.official_store[0].products[0].brand_logo, className: 'feed-official-store-product__image-store' })
									),
									React.createElement(
										'div',
										{ className: 'span8 pt-15 feed-official-store-product__text' },
										React.createElement(
											'label',
											{ className: 'fs-11 text-black07' },
											' ',
											this.props.feed.content.official_store[0].products[0].data.shop.name
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
									React.createElement('img', { src: this.props.feed.content.official_store[0].products[1].data.image_url, className: 'feed-official-store-product__image' }),
									React.createElement(
										'div',
										{ className: 'feed-official-store-product__details' },
										React.createElement(
											'div',
											{ className: 'fs-12 fw-600 lh-17 feed-official-store-product__items--name' },
											this.props.feed.content.official_store[0].products[1].data.name
										),
										React.createElement(
											'div',
											{ className: 'pb-20 feed-official-store-product__items--price' },
											React.createElement(
												'label',
												{ className: 'fs-12 fw-600 orange-red' },
												this.props.feed.content.official_store[0].products[1].data.price
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
										React.createElement('img', { src: this.props.feed.content.official_store[0].products[1].brand_logo, className: 'feed-official-store-product__image-store' })
									),
									React.createElement(
										'div',
										{ className: 'span8 pt-15 feed-official-store-product__text' },
										React.createElement(
											'label',
											{ className: 'fs-11 text-black07' },
											' ',
											this.props.feed.content.official_store[0].products[1].data.shop.name
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
									React.createElement('img', { src: this.props.feed.content.official_store[0].products[2].data.image_url, className: 'feed-official-store-product__image' }),
									React.createElement(
										'div',
										{ className: 'feed-official-store-product__details' },
										React.createElement(
											'div',
											{ className: 'fs-12 fw-600 lh-17 feed-official-store-product__items--name' },
											this.props.feed.content.official_store[0].products[2].data.name
										),
										React.createElement(
											'div',
											{ className: 'pb-20 feed-official-store-product__items--price' },
											React.createElement(
												'label',
												{ className: 'fs-12 fw-600 orange-red' },
												this.props.feed.content.official_store[0].products[2].data.price
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
										React.createElement('img', { src: this.props.feed.content.official_store[0].products[2].brand_logo, className: 'feed-official-store-product__image-store' })
									),
									React.createElement(
										'div',
										{ className: 'span8 pt-15 feed-official-store-product__text' },
										React.createElement(
											'label',
											{ className: 'fs-11 text-black07' },
											' ',
											this.props.feed.content.official_store[0].products[2].data.shop.name
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
									React.createElement('img', { src: this.props.feed.content.official_store[0].products[3].data.image_url, className: 'feed-official-store-product__image' }),
									React.createElement(
										'div',
										{ className: 'feed-official-store-product__details' },
										React.createElement(
											'div',
											{ className: 'fs-12 fw-600 lh-17 feed-official-store-product__items--name' },
											React.createElement(
												'div',
												{ className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
												this.props.feed.content.official_store[0].products[3].data.name
											)
										),
										React.createElement(
											'div',
											{ className: 'pb-20 feed-official-store-product__items--price' },
											React.createElement(
												'label',
												{ className: 'fs-12 fw-600 orange-red' },
												this.props.feed.content.official_store[0].products[3].data.price
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
										React.createElement('img', { src: this.props.feed.content.official_store[0].products[3].brand_logo, className: 'feed-official-store-product__image-store' })
									),
									React.createElement(
										'div',
										{ className: 'span8 pt-15 feed-official-store-product__text' },
										React.createElement(
											'label',
											{ className: 'fs-11 text-black07' },
											' ',
											this.props.feed.content.official_store[0].products[3].data.shop.name
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
									React.createElement('img', { src: this.props.feed.content.official_store[0].products[3].data.image_url, className: 'feed-official-store-product__image' }),
									React.createElement(
										'div',
										{ className: 'feed-official-store-product__details' },
										React.createElement(
											'div',
											{ className: 'fs-12 fw-600 lh-17 feed-official-store-product__items--name' },
											this.props.feed.content.official_store[0].products[3].data.name
										),
										React.createElement(
											'div',
											{ className: 'pb-20 feed-official-store-product__items--price' },
											React.createElement(
												'label',
												{ className: 'fs-12 fw-600 orange-red' },
												this.props.feed.content.official_store[0].products[3].data.price
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
										React.createElement('img', { src: this.props.feed.content.official_store[0].products[3].brand_logo, className: 'feed-official-store-product__image-store' })
									),
									React.createElement(
										'div',
										{ className: 'span8 pt-15 feed-official-store-product__text' },
										React.createElement(
											'label',
											{ className: 'fs-11 text-black07' },
											' ',
											this.props.feed.content.official_store[0].products[3].data.shop.name
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
									React.createElement('img', { src: this.props.feed.content.official_store[0].products[3].data.image_url, className: 'feed-official-store-product__image' }),
									React.createElement(
										'div',
										{ className: 'feed-official-store-product__details' },
										React.createElement(
											'div',
											{ className: 'fs-12 fw-600 lh-17 feed-official-store-product__items--name' },
											this.props.feed.content.official_store[0].products[3].data.name
										),
										React.createElement(
											'div',
											{ className: 'pb-20 feed-official-store-product__items--price' },
											React.createElement(
												'label',
												{ className: 'fs-12 fw-600 orange-red' },
												this.props.feed.content.official_store[0].products[3].data.price
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
										React.createElement('img', { src: this.props.feed.content.official_store[0].products[3].brand_logo, className: 'feed-official-store-product__image-store' })
									),
									React.createElement(
										'div',
										{ className: 'span8 pt-15 feed-official-store-product__text' },
										React.createElement(
											'label',
											{ className: 'fs-11 text-black07' },
											' ',
											this.props.feed.content.official_store[0].products[3].data.shop.name
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
								{ href: 'https://www.tokopedia.com/official-store' },
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
  openPage: function (url) {
    window.location = url;
  },
  openDetailPage: function () {
    window.location = 'http://new.sh-steve.ndvl/feed-detail.pl';
  },
  render: function () {
    return React.createElement(
      'div',
      { className: 'feed-product', id: `feedplus-container-${this.props.feed.id}` },
      React.createElement(
        'div',
        { className: 'feed-product__header' },
        React.createElement(
          'div',
          { className: 'feed-product__seller-photo' },
          React.createElement('img', { alt: '', src: this.props.feed.source.shop.avatar })
        ),
        React.createElement(
          'div',
          { className: 'feed-product__seller-activity' },
          React.createElement(
            'div',
            { className: 'feed-product__seller-activity--text' },
            React.createElement(
              'span',
              { className: 'fw-600 feed-product__seller-activity--text-shop',
                onClick: () => this.openPage(this.props.feed.source.shop.url) },
              this.props.feed.source.shop.name,
              ' '
            ),
            this.props.feed.content.status_activity.activity + ' ',
            React.createElement(
              'span',
              { className: 'fw-600 feed-product__seller-activity--text-product',
                onClick: () => this.openDetailPage() },
              this.props.feed.content.status_activity.amount + ' produk'
            )
          ),
          React.createElement(
            'div',
            { className: 'feed-product__seller-activity--time' },
            '3 jam'
          )
        ),
        this.props.feed.content.total_product > 1 ? React.createElement(
          'div',
          { className: 'feed-product__seller-share' },
          React.createElement(ButtonShare, { item: this.props.feed })
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
        this.props.feed.content.total_product === 1 ? React.createElement(
          'div',
          null,
          React.createElement(
            'div',
            { className: 'row-fluid',
              onMouseEnter: () => this.showWishlist(1),
              onMouseLeave: () => this.hideWishlist(1),
              onClick: () => this.openPage(this.props.feed.content.products[0].url) },
            React.createElement(
              'div',
              { className: 'span6 feed-product__items feed-product__items--border-bottom feed-product__items--no-border-right' },
              React.createElement('img', { src: this.props.feed.content.products[0].image_single, className: 'feed-product__image' })
            ),
            React.createElement(
              'div',
              { className: 'span6 feed-product__items feed-product__items--border-bottom' },
              this.state.isShowWishlist1 && React.createElement(ButtonWishlist, { checked: this.props.feed.content.products[0].wishlist }),
              React.createElement(
                'div',
                { className: 'feed-product__items--empty' },
                React.createElement('img', { src: getImage('no-image-available.png') }),
                React.createElement(
                  'div',
                  null,
                  'Foto lain tidak tersedia'
                )
              )
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
                    this.props.feed.content.products[0].name
                  )
                ),
                React.createElement(
                  'div',
                  { className: 'feed-product__items--price' },
                  React.createElement(
                    'label',
                    { className: 'fs-13 fw-600 orange-red' },
                    this.props.feed.content.products[0].price
                  )
                )
              )
            )
          )
        ) : this.props.feed.content.total_product === 2 ? React.createElement(
          'div',
          { className: 'row-fluid' },
          React.createElement(
            'div',
            { className: 'span6 feed-product__items',
              onMouseEnter: () => this.showWishlist(1),
              onMouseLeave: () => this.hideWishlist(1),
              onClick: () => this.openPage(this.props.feed.content.products[0].url) },
            this.state.isShowWishlist1 && React.createElement(ButtonWishlist, { checked: this.props.feed.content.products[0].wishlist }),
            React.createElement('img', { src: this.props.feed.content.products[0].image_single, className: 'feed-product__image' }),
            React.createElement(
              'div',
              { className: 'feed-product__details' },
              React.createElement(
                'div',
                { className: 'fs-13 fw-600 lh-17 feed-product__items--name' },
                React.createElement(
                  'div',
                  { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                  this.props.feed.content.products[0].name
                )
              ),
              React.createElement(
                'div',
                { className: 'feed-product__items--price' },
                React.createElement(
                  'label',
                  { className: 'fs-13 fw-600 orange-red' },
                  this.props.feed.content.products[0].price
                )
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'span6 feed-product__items',
              onMouseEnter: () => this.showWishlist(2),
              onMouseLeave: () => this.hideWishlist(2),
              onClick: () => this.openPage(this.props.feed.content.products[1].url) },
            this.state.isShowWishlist2 && React.createElement(ButtonWishlist, { checked: this.props.feed.content.products[1].wishlist }),
            React.createElement('img', { src: this.props.feed.content.products[1].image_single, className: 'feed-product__image' }),
            React.createElement(
              'div',
              { className: 'feed-product__details' },
              React.createElement(
                'div',
                { className: 'fs-13 fw-600 lh-17 feed-product__items--name' },
                React.createElement(
                  'div',
                  { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                  this.props.feed.content.products[1].name
                )
              ),
              React.createElement(
                'div',
                { className: 'feed-product__items--price' },
                React.createElement(
                  'label',
                  { className: 'fs-13 fw-600 orange-red' },
                  this.props.feed.content.products[1].price
                )
              )
            )
          )
        ) : this.props.feed.content.total_product === 3 ? React.createElement(
          'div',
          { className: 'row-fluid' },
          React.createElement(
            'div',
            { className: 'span4 feed-product__items',
              onMouseEnter: () => this.showWishlist(1),
              onMouseLeave: () => this.hideWishlist(1),
              onClick: () => this.openPage(this.props.feed.content.products[0].url) },
            this.state.isShowWishlist1 && React.createElement(ButtonWishlist, { checked: this.props.feed.content.products[0].wishlist }),
            React.createElement('img', { src: this.props.feed.content.products[0].image, className: 'feed-product__image' }),
            React.createElement(
              'div',
              { className: 'feed-product__details' },
              React.createElement(
                'div',
                { className: 'fs-12 fw-600 lh-17 feed-product__items--name' },
                React.createElement(
                  'div',
                  { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                  this.props.feed.content.products[0].name
                )
              ),
              React.createElement(
                'div',
                { className: 'feed-product__items--price' },
                React.createElement(
                  'label',
                  { className: 'fs-12 fw-600 orange-red' },
                  this.props.feed.content.products[0].price
                )
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'span4 feed-product__items',
              onMouseEnter: () => this.showWishlist(2),
              onMouseLeave: () => this.hideWishlist(2),
              onClick: () => this.openPage(this.props.feed.content.products[1].url) },
            this.state.isShowWishlist2 && React.createElement(ButtonWishlist, { checked: this.props.feed.content.products[1].wishlist }),
            React.createElement('img', { src: this.props.feed.content.products[1].image, className: 'feed-product__image' }),
            React.createElement(
              'div',
              { className: 'feed-product__details' },
              React.createElement(
                'div',
                { className: 'fs-12 fw-600 lh-17 feed-product__items--name' },
                React.createElement(
                  'div',
                  { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                  this.props.feed.content.products[1].name
                )
              ),
              React.createElement(
                'div',
                { className: 'feed-product__items--price' },
                React.createElement(
                  'label',
                  { className: 'fs-12 fw-600 orange-red' },
                  this.props.feed.content.products[1].price
                )
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'span4 feed-product__items',
              onMouseEnter: () => this.showWishlist(3),
              onMouseLeave: () => this.hideWishlist(3),
              onClick: () => this.openPage(this.props.feed.content.products[2].url) },
            this.state.isShowWishlist3 && React.createElement(ButtonWishlist, { checked: this.props.feed.content.products[2].wishlist }),
            React.createElement('img', { src: this.props.feed.content.products[2].image, className: 'feed-product__image' }),
            React.createElement(
              'div',
              { className: 'feed-product__details' },
              React.createElement(
                'div',
                { className: 'fs-12 fw-600 lh-17 feed-product__items--name' },
                React.createElement(
                  'div',
                  { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                  this.props.feed.content.products[2].name
                )
              ),
              React.createElement(
                'div',
                { className: 'feed-product__items--price' },
                React.createElement(
                  'label',
                  { className: 'fs-12 fw-600 orange-red' },
                  this.props.feed.content.products[2].price
                )
              )
            )
          )
        ) : this.props.feed.content.total_product === 4 ? React.createElement(
          'div',
          null,
          React.createElement(
            'div',
            { className: 'row-fluid' },
            React.createElement(
              'div',
              { className: 'span6 feed-product__items',
                onMouseEnter: () => this.showWishlist(1),
                onMouseLeave: () => this.hideWishlist(1),
                onClick: () => this.openPage(this.props.feed.content.products[0].url) },
              this.state.isShowWishlist1 && React.createElement(ButtonWishlist, { checked: this.props.feed.content.products[0].wishlist }),
              React.createElement('img', { src: this.props.feed.content.products[0].image_single, className: 'feed-product__image' }),
              React.createElement(
                'div',
                { className: 'feed-product__details' },
                React.createElement(
                  'div',
                  { className: 'fs-13 fw-600 lh-17 feed-product__items--name' },
                  React.createElement(
                    'div',
                    { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                    this.props.feed.content.products[0].name
                  )
                ),
                React.createElement(
                  'div',
                  { className: 'feed-product__items--price' },
                  React.createElement(
                    'label',
                    { className: 'fs-13 fw-600 orange-red' },
                    this.props.feed.content.products[0].price
                  )
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'span6 feed-product__items',
                onMouseEnter: () => this.showWishlist(2),
                onMouseLeave: () => this.hideWishlist(2),
                onClick: () => this.openPage(this.props.feed.content.products[1].url) },
              this.state.isShowWishlist2 && React.createElement(ButtonWishlist, { checked: this.props.feed.content.products[1].wishlist }),
              React.createElement('img', { src: this.props.feed.content.products[1].image_single, className: 'feed-product__image' }),
              React.createElement(
                'div',
                { className: 'feed-product__details' },
                React.createElement(
                  'div',
                  { className: 'fs-13 fw-600 lh-17 feed-product__items--name' },
                  React.createElement(
                    'div',
                    { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                    this.props.feed.content.products[1].name
                  )
                ),
                React.createElement(
                  'div',
                  { className: 'feed-product__items--price' },
                  React.createElement(
                    'label',
                    { className: 'fs-13 fw-600 orange-red' },
                    this.props.feed.content.products[1].price
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
              { className: 'span6 feed-product__items feed-product__items--border-top',
                onMouseEnter: () => this.showWishlist(3),
                onMouseLeave: () => this.hideWishlist(3),
                onClick: () => this.openPage(this.props.feed.content.products[2].url) },
              this.state.isShowWishlist3 && React.createElement(ButtonWishlist, { checked: this.props.feed.content.products[2].wishlist }),
              React.createElement('img', { src: this.props.feed.content.products[2].image_single, className: 'feed-product__image' }),
              React.createElement(
                'div',
                { className: 'feed-product__details' },
                React.createElement(
                  'div',
                  { className: 'fs-13 fw-600 lh-17 feed-product__items--name' },
                  React.createElement(
                    'div',
                    { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                    this.props.feed.content.products[2].name
                  )
                ),
                React.createElement(
                  'div',
                  { className: 'feed-product__items--price' },
                  React.createElement(
                    'label',
                    { className: 'fs-13 fw-600 orange-red' },
                    this.props.feed.content.products[2].price
                  )
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'span6 feed-product__items feed-product__items--border-top',
                onMouseEnter: () => this.showWishlist(4),
                onMouseLeave: () => this.hideWishlist(4),
                onClick: () => this.openPage(this.props.feed.content.products[3].url) },
              this.state.isShowWishlist4 && React.createElement(ButtonWishlist, { checked: this.props.feed.content.products[3].wishlist }),
              React.createElement('img', { src: this.props.feed.content.products[3].image_single, className: 'feed-product__image' }),
              React.createElement(
                'div',
                { className: 'feed-product__details' },
                React.createElement(
                  'div',
                  { className: 'fs-13 fw-600 lh-17 feed-product__items--name' },
                  React.createElement(
                    'div',
                    { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                    this.props.feed.content.products[3].name
                  )
                ),
                React.createElement(
                  'div',
                  { className: 'feed-product__items--price' },
                  React.createElement(
                    'label',
                    { className: 'fs-13 fw-600 orange-red' },
                    this.props.feed.content.products[3].price
                  )
                )
              )
            )
          )
        ) : this.props.feed.content.total_product === 5 ? React.createElement(
          'div',
          null,
          React.createElement(
            'div',
            { className: 'row-fluid' },
            React.createElement(
              'div',
              { className: 'span6 feed-product__items',
                onMouseEnter: () => this.showWishlist(1),
                onMouseLeave: () => this.hideWishlist(1),
                onClick: () => this.openPage(this.props.feed.content.products[0].url) },
              this.state.isShowWishlist1 && React.createElement(ButtonWishlist, { checked: this.props.feed.content.products[0].wishlist }),
              React.createElement('img', { src: this.props.feed.content.products[0].image_single, className: 'feed-product__image' }),
              React.createElement(
                'div',
                { className: 'feed-product__details' },
                React.createElement(
                  'div',
                  { className: 'fs-13 fw-600 lh-17 feed-product__items--name' },
                  React.createElement(
                    'div',
                    { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                    this.props.feed.content.products[0].name
                  )
                ),
                React.createElement(
                  'div',
                  { className: 'feed-product__items--price' },
                  React.createElement(
                    'label',
                    { className: 'fs-13 fw-600 orange-red' },
                    this.props.feed.content.products[0].price
                  )
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'span6 feed-product__items',
                onMouseEnter: () => this.showWishlist(2),
                onMouseLeave: () => this.hideWishlist(2),
                onClick: () => this.openPage(this.props.feed.content.products[1].url) },
              this.state.isShowWishlist2 && React.createElement(ButtonWishlist, { checked: this.props.feed.content.products[1].wishlist }),
              React.createElement('img', { src: this.props.feed.content.products[1].image_single, className: 'feed-product__image' }),
              React.createElement(
                'div',
                { className: 'feed-product__details' },
                React.createElement(
                  'div',
                  { className: 'fs-13 fw-600 lh-17 feed-product__items--name' },
                  React.createElement(
                    'div',
                    { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                    this.props.feed.content.products[1].name
                  )
                ),
                React.createElement(
                  'div',
                  { className: 'feed-product__items--price' },
                  React.createElement(
                    'label',
                    { className: 'fs-13 fw-600 orange-red' },
                    this.props.feed.content.products[1].price
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
              { className: 'span4 feed-product__items feed-product__items--border-top',
                onMouseEnter: () => this.showWishlist(3),
                onMouseLeave: () => this.hideWishlist(3),
                onClick: () => this.openPage(this.props.feed.content.products[2].url) },
              this.state.isShowWishlist3 && React.createElement(ButtonWishlist, { checked: this.props.feed.content.products[2].wishlist }),
              React.createElement('img', { src: this.props.feed.content.products[2].image, className: 'feed-product__image' }),
              React.createElement(
                'div',
                { className: 'feed-product__details' },
                React.createElement(
                  'div',
                  { className: 'fs-12 fw-600 lh-17 feed-product__items--name' },
                  React.createElement(
                    'div',
                    { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                    this.props.feed.content.products[2].name
                  )
                ),
                React.createElement(
                  'div',
                  { className: 'feed-product__items--price' },
                  React.createElement(
                    'label',
                    { className: 'fs-12 fw-600 orange-red' },
                    this.props.feed.content.products[2].price
                  )
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'span4 feed-product__items feed-product__items--border-top',
                onMouseEnter: () => this.showWishlist(4),
                onMouseLeave: () => this.hideWishlist(4),
                onClick: () => this.openPage(this.props.feed.content.products[3].url) },
              this.state.isShowWishlist4 && React.createElement(ButtonWishlist, { checked: this.props.feed.content.products[3].wishlist }),
              React.createElement('img', { src: this.props.feed.content.products[3].image, className: 'feed-product__image' }),
              React.createElement(
                'div',
                { className: 'feed-product__details' },
                React.createElement(
                  'div',
                  { className: 'fs-12 fw-600 lh-17 feed-product__items--name' },
                  React.createElement(
                    'div',
                    { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                    this.props.feed.content.products[3].name
                  )
                ),
                React.createElement(
                  'div',
                  { className: 'feed-product__items--price' },
                  React.createElement(
                    'label',
                    { className: 'fs-12 fw-600 orange-red' },
                    this.props.feed.content.products[3].price
                  )
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'span4 feed-product__items feed-product__items--border-top',
                onMouseEnter: () => this.showWishlist(5),
                onMouseLeave: () => this.hideWishlist(5),
                onClick: () => this.openPage(this.props.feed.content.products[4].url) },
              this.state.isShowWishlist5 && React.createElement(ButtonWishlist, { checked: this.props.feed.content.products[4].wishlist }),
              React.createElement('img', { src: this.props.feed.content.products[4].image, className: 'feed-product__image' }),
              React.createElement(
                'div',
                { className: 'feed-product__details' },
                React.createElement(
                  'div',
                  { className: 'fs-12 fw-600 lh-17 feed-product__items--name' },
                  React.createElement(
                    'div',
                    { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                    this.props.feed.content.products[4].name
                  )
                ),
                React.createElement(
                  'div',
                  { className: 'feed-product__items--price' },
                  React.createElement(
                    'label',
                    { className: 'fs-12 fw-600 orange-red' },
                    this.props.feed.content.products[4].price
                  )
                )
              )
            )
          )
        ) : this.props.feed.content.total_product >= 6 ? React.createElement(
          'div',
          null,
          React.createElement(
            'div',
            { className: 'row-fluid' },
            React.createElement(
              'div',
              { className: 'span4 feed-product__items',
                onMouseEnter: () => this.showWishlist(1),
                onMouseLeave: () => this.hideWishlist(1),
                onClick: () => this.openPage(this.props.feed.content.products[0].url) },
              this.state.isShowWishlist1 && React.createElement(ButtonWishlist, { checked: this.props.feed.content.products[0].wishlist }),
              React.createElement('img', { src: this.props.feed.content.products[0].image, className: 'feed-product__image' }),
              React.createElement(
                'div',
                { className: 'feed-product__details' },
                React.createElement(
                  'div',
                  { className: 'fs-12 fw-600 lh-17 feed-product__items--name' },
                  React.createElement(
                    'div',
                    { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                    this.props.feed.content.products[0].name
                  )
                ),
                React.createElement(
                  'div',
                  { className: 'feed-product__items--price' },
                  React.createElement(
                    'label',
                    { className: 'fs-12 fw-600 orange-red' },
                    this.props.feed.content.products[0].price
                  )
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'span4 feed-product__items',
                onMouseEnter: () => this.showWishlist(2),
                onMouseLeave: () => this.hideWishlist(2),
                onClick: () => this.openPage(this.props.feed.content.products[1].url) },
              this.state.isShowWishlist2 && React.createElement(ButtonWishlist, { checked: this.props.feed.content.products[1].wishlist }),
              React.createElement('img', { src: this.props.feed.content.products[1].image, className: 'feed-product__image' }),
              React.createElement(
                'div',
                { className: 'feed-product__details' },
                React.createElement(
                  'div',
                  { className: 'fs-12 fw-600 lh-17 feed-product__items--name' },
                  React.createElement(
                    'div',
                    { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                    this.props.feed.content.products[1].name
                  )
                ),
                React.createElement(
                  'div',
                  { className: 'feed-product__items--price' },
                  React.createElement(
                    'label',
                    { className: 'fs-12 fw-600 orange-red' },
                    this.props.feed.content.products[1].price
                  )
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'span4 feed-product__items',
                onMouseEnter: () => this.showWishlist(3),
                onMouseLeave: () => this.hideWishlist(3),
                onClick: () => this.openPage(this.props.feed.content.products[2].url) },
              this.state.isShowWishlist3 && React.createElement(ButtonWishlist, { checked: this.props.feed.content.products[2].wishlist }),
              React.createElement('img', { src: this.props.feed.content.products[2].image, className: 'feed-product__image' }),
              React.createElement(
                'div',
                { className: 'feed-product__details' },
                React.createElement(
                  'div',
                  { className: 'fs-12 fw-600 lh-17 feed-product__items--name' },
                  React.createElement(
                    'div',
                    { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                    this.props.feed.content.products[2].name
                  )
                ),
                React.createElement(
                  'div',
                  { className: 'feed-product__items--price' },
                  React.createElement(
                    'label',
                    { className: 'fs-12 fw-600 orange-red' },
                    this.props.feed.content.products[2].price
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
              { className: 'span4 feed-product__items feed-product__items--border-top',
                onMouseEnter: () => this.showWishlist(4),
                onMouseLeave: () => this.hideWishlist(4),
                onClick: () => this.openPage(this.props.feed.content.products[3].url) },
              this.state.isShowWishlist4 && React.createElement(ButtonWishlist, { checked: this.props.feed.content.products[3].wishlist }),
              React.createElement('img', { src: this.props.feed.content.products[3].image, className: 'feed-product__image' }),
              React.createElement(
                'div',
                { className: 'feed-product__details' },
                React.createElement(
                  'div',
                  { className: 'fs-12 fw-600 lh-17 feed-product__items--name' },
                  React.createElement(
                    'div',
                    { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                    this.props.feed.content.products[3].name
                  )
                ),
                React.createElement(
                  'div',
                  { className: 'feed-product__items--price' },
                  React.createElement(
                    'label',
                    { className: 'fs-12 fw-600 orange-red' },
                    this.props.feed.content.products[3].price
                  )
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'span4 feed-product__items feed-product__items--border-top',
                onMouseEnter: () => this.showWishlist(5),
                onMouseLeave: () => this.hideWishlist(5),
                onClick: () => this.openPage(this.props.feed.content.products[4].url) },
              this.state.isShowWishlist5 && React.createElement(ButtonWishlist, { checked: this.props.feed.content.products[4].wishlist }),
              React.createElement('img', { src: this.props.feed.content.products[4].image, className: 'feed-product__image' }),
              React.createElement(
                'div',
                { className: 'feed-product__details' },
                React.createElement(
                  'div',
                  { className: 'fs-12 fw-600 lh-17 feed-product__items--name' },
                  React.createElement(
                    'div',
                    { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                    this.props.feed.content.products[4].name
                  )
                ),
                React.createElement(
                  'div',
                  { className: 'feed-product__items--price' },
                  React.createElement(
                    'label',
                    { className: 'fs-12 fw-600 orange-red' },
                    this.props.feed.content.products[4].price
                  )
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'span4 feed-product__items feed-product__items--border-top',
                onMouseEnter: () => this.showWishlist(6),
                onMouseLeave: () => this.hideWishlist(6) },
              this.props.feed.content.total_product > 6 ? React.createElement(
                'div',
                { className: 'feed-product__items--overlay',
                  onClick: () => this.openDetailPage() },
                React.createElement(
                  'span',
                  null,
                  '+',
                  this.props.feed.content.total_product - 6
                )
              ) : this.state.isShowWishlist6 && React.createElement(ButtonWishlist, { checked: this.props.feed.content.products[5].wishlist }),
              React.createElement('img', { src: this.props.feed.content.products[5].image, className: 'feed-product__image',
                onClick: () => this.openPage(this.props.feed.content.products[5].url) }),
              React.createElement(
                'div',
                { className: 'feed-product__details' },
                React.createElement(
                  'div',
                  { className: 'fs-12 fw-600 lh-17 feed-product__items--name' },
                  React.createElement(
                    'div',
                    { className: 'detail__name js-ellipsis', 'data-js-ellipsis-limit': '15' },
                    this.props.feed.content.products[5].name
                  )
                ),
                React.createElement(
                  'div',
                  { className: 'feed-product__items--price' },
                  React.createElement(
                    'label',
                    { className: 'fs-12 fw-600 orange-red' },
                    this.props.feed.content.products[5].price
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

  searchShop: function () {
    window.location = '/fav-shop.pl';
  },
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
          { type: 'button', onClick: () => this.searchShop(), className: 'btn btn-action' },
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
  render: function () {
    return React.createElement(
      'div',
      { className: 'feed-topads-product' },
      React.createElement(
        'div',
        { className: 'feed-topads-product__header' },
        React.createElement(
          'div',
          { className: 'fs-12 feed-topads-shop__text-promoted', onMouseOver: () => this.setState({ isShowPopover: true }), onMouseLeave: () => this.setState({ isShowPopover: false }) },
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
  componentDidMount: function () {
    this.embedTopads.setAttribute('trigger', this.props.trigger);
    this.embedTopads.setAttribute('is_userinfo_rcmd', this.props.isUserinfoRcmd);
    this.embedTopads.setAttribute('ep', this.props.ep);
    this.embedTopads.setAttribute('item', this.props.item);
    this.embedTopads.setAttribute('device', this.props.device);
    this.embedTopads.setAttribute('template', 'm_feed_plus');
    this.embedTopads.setAttribute('page', this.props.page);
    // this.embedTopads.setAttribute('token', this.props.token)
    this.embedTopads.setAttribute('user_id', this.props.userID);
    this.embedTopads.setAttribute('ad_url', 'http://ta.ar-antonius.ndvl');

    taHandler.pushStates([{ id: `promo-${this.props.page}` }]); // eslint-disable-line no-undef
  },
  render: function () {
    return React.createElement('div', {
      ref: node => this.embedTopads = node,
      className: 'ta-inventory',
      id: `promo-${this.props.page}`
    });
  }
});



var FeedTopAdsShop = React.createClass({
  displayName: 'FeedTopAdsShop',

  getInitialState: function () {
    return {
      isShowPopOver: false
    };
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
          { className: 'mb-10 feed-topads-shop__text-promoted', onMouseOver: () => this.setState({ isShowPopover: true }), onMouseLeave: () => this.setState({ isShowPopover: false }) },
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

