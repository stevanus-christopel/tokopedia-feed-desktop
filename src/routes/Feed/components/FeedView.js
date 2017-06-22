import React, { Component } from 'react';
import { graphql } from 'react-apollo'
import { FeedQuery } from '../../../queries'
import '../FeedView.css';
import getImage from '../../../lib/utils.js';

import FeedEmpty from '../../../components/FeedEmpty'
import FeedError from '../../../components/FeedError'
import FeedSearchShop from '../../../components/FeedSearchShop'
import FeedProduct from '../../../components/FeedProduct'
import FeedHotList from '../../../components/FeedHotList'
import FeedOfficialStore from '../../../components/FeedOfficialStore'
import FeedOfficialStoreEmpty from '../../../components/FeedOfficialStoreEmpty'
import FeedOfficialStoreProduct from '../../../components/FeedOfficialStoreProduct'
import FeedMarketingPromo from '../../../components/FeedMarketingPromo'
import FeedTopAdsShop from '../../../components/FeedTopAdsShop'
import FeedInspiration from '../../../components/FeedInspiration'
import FeedTopAdsProduct from '../../../components/FeedTopAdsProduct'
import FeedSellerStory from '../../../components/FeedSellerStory'
import FeedTokopediaStory from '../../../components/FeedTokopediaStory'

var FeedView = React.createClass({
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
  componentDidMount: function(){
    var obj = {"limit": 3,"userID": 5510345,"cursor": "", "page" : 1, "operationName": ""};
    this.fetchData(obj);
  },
  fetchData: function(obj){
    var self = this;
    fetch('https://2-feature-m-staging.tokopedia.com/graphql', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({
          query: FeedQuery,
          variables: obj
        }),
      })
      .then(response => {
        console.log(response)
        return response
      })
  },
  renderFeed: function() {
    var feeds = this.getSampleData().data.feed;
    return feeds.data.map(function(item) {
      switch(item.content.type) {
        case 'new_product':
          return <FeedProduct feed={item} key={item.id} />
        case 'promotion':
          return <FeedMarketingPromo feed={item} key={item.id} />
        case 'official_store_brand':
          return <FeedOfficialStore feed={item} key={item.id} />
        case 'official_store_campaign':
          return <FeedOfficialStoreProduct feed={item} key={item.id} />
      }
    })
  },
  renderInspiration: function() {
    var inspiration = this.getSampleData().data.inspiration.data[0];
    return (
      <FeedInspiration inspiration={inspiration} key={inspiration.title} />
    )
  },
  render: function() {
    return (
      <div className='feed'>
        <div className='feed__main-content'>
          {
            this.getParameterByName('p') === 'empty' ?
            <div>
              <FeedEmpty />
              <FeedOfficialStoreEmpty />
              <FeedTopAdsShop />
              <FeedTopAdsShop />
              {/*<FeedTopAdsProduct
                trigger='complete'
                isUserinfoRcmd='true'
                ep='product'
                item='6,1'
                device='desktop'
                page={1}
                currentPage={1}
                userID={5510345}
              />*/}
              <FeedError />
            </div> :
            this.getParameterByName('p') === 'less' ?
            <div>
              <FeedTopAdsShop />
              <FeedTopAdsShop />
              <FeedTopAdsShop />
              <FeedSearchShop />
              <FeedTopAdsShop />
              <FeedTopAdsShop />
              <FeedTokopediaStory />
              <FeedSellerStory />
            </div> :
            <div>
              { this.renderFeed() }
              {<FeedTopAdsShop
                trigger='complete'
                isUserinfoRcmd='true'
                ep='shop'
                item='7,1'
                device='desktop'
                page={2}
                currentPage={1}
                userID={5510345}
              />}
              { this.renderInspiration() }
              {<FeedTopAdsProduct
                trigger='complete'
                isUserinfoRcmd='true'
                ep='product'
                item='7,1'
                device='desktop'
                page={1}
                currentPage={1}
                userID={5510345}
              />}
            </div>
          }
        </div>
        <div className='feed__right-sidebar'>
          <FeedHotList />
        </div>
      </div>
    );
  },
  getSampleData: function() {
    return {
      "data": {
        "feed": {
          "data": [
            {
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
                "official_store": [
                  {
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
                  },
                  {
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
                  },
                  {
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
                  },
                  {
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
                  }
                ]
              }
            },
            {
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
                "products": [
                  {
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
                  },
                  {
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
                  },
                  {
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
                  },
                  {
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
                  },
                  {
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
                  },
                  {
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
                  },
                  {
                    "id": 14296004,
                    "name": "Sepatu Converse Norak",
                    "price": "Rp 1.211",
                    "image": "https://imagerouter-staging.tokopedia.com/img/200-square/product-1/2017/4/3/5510296/5510296_e3f9f529-52ff-4d97-8b4b-60fc2a809ec6_480_360.jpg",
                    "image_single": "https://imagerouter-staging.tokopedia.com/img/500-square/product-1/2017/4/3/5510296/5510296_e3f9f529-52ff-4d97-8b4b-60fc2a809ec6_480_360.jpg",
                    "wholesale": [
                      {
                        "qty_min_fmt": "5"
                      }
                    ],
                    "freereturns": false,
                    "preorder": false,
                    "cashback": "",
                    "url": "https://staging.tokopedia.com/patupatu/sepatu-converse-norak",
                    "productLink": "tokopedia://product/14296004",
                    "wishlist": false,
                    "rating": 0
                  }
                ],
                "promotions": null,
                "status_activity": {
                  "source": "Toko Patu !@#$%^&amp;*&#40;&#41;",
                  "activity": "tambah",
                  "amount": 64
                },
                "official_store": null
              }
            },
            {
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
                "promotions": [
                  {
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
                  },
                  {
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
                  },
                  {
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
                  }
                ],
                "status_activity": null,
                "official_store": null
              }
            },
            {
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
                "products": [
                  {
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
                  },
                  {
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
                  },
                  {
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
                  },
                  {
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
                  },
                  {
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
                  },
                  {
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
                  },
                  {
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
                  }
                ],
                "promotions": null,
                "status_activity": {
                  "source": "Mouse Jerry Shop",
                  "activity": "tambah",
                  "amount": 12
                },
                "official_store": null
              }
            },
            {
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
                "products": [
                  {
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
                  }
                ],
                "promotions": null,
                "status_activity": {
                  "source": "Toko Patu !@#$%^&amp;*&#40;&#41;",
                  "activity": "tambah",
                  "amount": 1
                },
                "official_store": null
              }
            },
            {
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
                "products": [
                  {
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
                  },
                  {
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
                  },
                  {
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
                  },
                  {
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
                  }
                ],
                "promotions": null,
                "status_activity": {
                  "source": "Toko Patu !@#$%^&amp;*&#40;&#41;",
                  "activity": "tambah",
                  "amount": 4
                },
                "official_store": null
              }
            },
            {
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
                "products": [
                  {
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
                  },
                  {
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
                  },
                  {
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
                  },
                  {
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
                  },
                  {
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
                  }
                ],
                "promotions": null,
                "status_activity": {
                  "source": "Kumamo Store",
                  "activity": "tambah",
                  "amount": 5
                },
                "official_store": null
              }
            },
            {
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
                "products": [
                  {
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
                  }
                ],
                "promotions": null,
                "status_activity": {
                  "source": "Toko Patu !@#$%^&amp;*&#40;&#41;",
                  "activity": "tambah",
                  "amount": 1
                },
                "official_store": null
              }
            },
            {
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
                "products": [
                  {
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
                  }
                ],
                "promotions": null,
                "status_activity": {
                  "source": "Toko Patu !@#$%^&amp;*&#40;&#41;",
                  "activity": "tambah",
                  "amount": 1
                },
                "official_store": null
              }
            },
            {
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
                "official_store": [
                  {
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
                    "products": [
                      {
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
                      },
                      {
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
                      },
                      {
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
                      },
                      {
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
                      }
                    ]
                  }
                ]
              }
            }
          ],
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
          "data": [
            {
              "source": "top_trend",
              "title": "Trend di Tokopedia",
              "foreign_title": "Trending in Tokopedia",
              "pagination": {
                "current_page": 1,
                "next_page": 2,
                "prev_page": -1
              },
              "recommendation": [
                {
                  "id": "36869044",
                  "name": "Mainan Anak Playpad Anak Muslim 3 Bahasa Lampu Led / Mainan Edukatif",
                  "url": "https://staging.tokopedia.com/toyhouse/mainan-anak-playpad-anak-muslim-3-bahasa-lampu-led-mainan-edukatif",
                  "image_url": "https://ecs7.tokopedia.net/img/cache/200-square/product-1/2016/3/19/7538549/7538549_60955917-088a-4697-9edc-2a5e757b60a2.jpg",
                  "price": "Rp 45.900"
                },
                {
                  "id": "54296357",
                  "name": "koko anak gamis anak pria laki laki baju muslim",
                  "url": "https://staging.tokopedia.com/gamisanakpria/koko-anak-gamis-anak-pria-laki-laki-baju-muslim",
                  "image_url": "https://ecs7.tokopedia.net/img/cache/200-square/product-1/2017/4/15/54296357/54296357_7ead45f1-7f5b-4c9d-98ef-9c29ea4de134_719_1280.jpg",
                  "price": "Rp 75.000"
                },
                {
                  "id": "41634260",
                  "name": "NEW BAJU KOKO LENGAN PENDEK HIGH QUALITY KEMEJA MUSLIM RAMADHAN",
                  "url": "https://staging.tokopedia.com/oppayummysnack/new-baju-koko-lengan-pendek-high-quality-kemeja-muslim-ramadhan",
                  "image_url": "https://ecs7.tokopedia.net/img/cache/200-square/product-1/2017/6/10/41634260/41634260_e5c36192-87a6-4bf3-865a-d99dee0088b5_400_400.jpg",
                  "price": "Rp 57.000"
                },
                {
                  "id": "180867614",
                  "name": "iridescent original rainbow Fidget spinner",
                  "url": "https://staging.tokopedia.com/indotech-jkt/iridescent-original-rainbow-fidget-spinner",
                  "image_url": "https://ecs7.tokopedia.net/img/cache/200-square/product-1/2017/6/4/180867614/180867614_ce19e330-3b44-42aa-a10a-f069b4649cd2_338_600",
                  "price": "Rp 190.000"
                }
              ]
            }
          ]
        }
      }
    }
  }
})

/*export default graphql(FeedQuery, {
  options: {
    variables: {
      limit: 3,
      userID: 5510345,
      cursor: "",
      page: 1
    },
    operationName: 'Query'
  }
})(FeedView)*/

export default FeedView