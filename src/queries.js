import gql from 'graphql-tag'

const FeedQuery = gql `
  query Query ($userID: Int!, $limit: Int!, $cursor: String){
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
            status_activity
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
        token
      }
  }
`

export {
    FeedQuery
}