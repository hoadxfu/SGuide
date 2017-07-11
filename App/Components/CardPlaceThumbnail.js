import React from 'react'
import { View, Image, Text } from 'react-native'
import styles from './Styles/CardPlaceThumbnailStyle'
// import Card from '../Lib/Card'
// import CardSection from '../Lib/CardSection'

import { CardItem, Card } from 'native-base'
import StarRating from 'react-native-star-rating'

export default class CardPlaceThumbnail extends React.Component {
  render () {
    const data = this.props.data

    return (
      <Card>
        <CardItem cardBody >
          <Image source={{ uri: data.img }} style={styles.image} resizeMode='cover' />
        </CardItem>
        <CardItem cardBody >
          <View style={styles.bodyContainer}>
            <Text numberOfLines={2} style={styles.title}>{data.title}</Text>
          </View>
        </CardItem>
        <CardItem cardBody>
          <View style={styles.footerContainer}>
            <View style={styles.starRate}>
              <StarRating
                maxStars={5}
                rating={data.rate}
                starColor='orange'
                emptyStarColor='orange'
                starSize={15}
              />
            </View>
            <Text style={styles.rateNumber}>{'(' + data.rateNumber + ')'}</Text >
          </View>
        </CardItem>
      </Card>

      // < View style={styles.container} >
      //   <Card>
      //     <CardSection >
      //       <Image source={{ uri: data.img }} style={{ height: 100, width: 160 }} resizeMode='cover' />
      //     </CardSection>
      //     <CardSection style={styles.bodyContainer} >

      //       <Text numberOfLines={2} style={styles.title}>{data.title}</Text>
      //     </CardSection>

      //     <CardSection>
      //       <View style={styles.starRate}>
      //         <StarRating
      //           maxStars={5}
      //           rating={data.rate}
      //           starColor='orange'
      //           emptyStarColor='orange'
      //           starSize={15}
      //         />
      //       </View>
      //       <Text style={styles.rateNumber}>{'(' + data.rateNumber + ')'}</Text >
      //     </CardSection>

      //   </Card>
      // </View >
    )
  }
}
// // Prop type warnings
// CardPlaceThumbnail.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// CardPlaceThumbnail.defaultProps = {
//   someSetting: false
// }
