import gql from 'graphql-tag'

const FeedQuery = gql`
  query Query ($userID: Int!, $limit: Int!, $cursor: String, $page: Int!){
      feed(limit: $limit, cursor: $cursor, userID: $userID) {
        data {
          id
          create_time
          type
          cursor
          source {
            type
            shop {
              id
              name
              avatar
              isOfficial
              isGold
              url
              shopLink
              shareLinkDescription
              shareLinkURL
            }
          }
          content {
            type
            total_product
            products {
              id
              name
              price
              image
              image_single
              wholesale {
                qty_min_fmt
              }
              freereturns
              preorder
              cashback
              url
              productLink
              wishlist
              rating
            }
            promotions {
              id
              name
              type
              thumbnail
              feature_image
              description
              periode
              code
              url
              min_transcation
            }
            status_activity {
              source
              activity
              amount
            }
            official_store {
              shop_id
              shop_defaultv3_url
              shop_mobile_url
              shop_apps_url
              shop_name
              logo_url
              microsite_url
              brand_img_url
              is_owner
              shop_tagline
              is_new
              title
              mobile_img_url
              feed_hexa_color
              products {
                brand_id
                brand_logo
                data {
                  id
                  name
                  url
                  image_url
                  image_url_700
                  price
                  shop {
                    name
                    url
                    location
                  }
                }
              }
            }
          }
        }
        links {
          self
          pagination{
            has_next_page
          }
        }
        meta {
          total_data
        }
      }
      inspiration(userID: $userID, page: $page){
        data {
          source
          title 
          foreign_title
          pagination{
            current_page
            next_page
            prev_page
          }
          recommendation {
            id
            name
            url
            image_url
            price
          }
        }
      }
  }
`

export {
    FeedQuery
}