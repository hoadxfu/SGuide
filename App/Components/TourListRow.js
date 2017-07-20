import React from 'react'
import { Image, View, Text, TouchableOpacity } from 'react-native'
// import LinearGradient from 'react-native-linear-gradient'
import StarRating from 'react-native-star-rating'

import styles from './Styles/TourListItemStyle'

export default class TourListRow extends React.Component {
  render () {
    const { tour, navigation } = this.props
    return (
      <TouchableOpacity onPress={() => navigation.navigate('TourDetailScreen', {tour})}>
        <View style={styles.container}>
          <View style={styles.info}>
            <Text
              numberOfLines={1}
              style={styles.name}>
              {tour.tour_name}
            </Text>
            <View style={styles.subInfo}>
              <Text style={styles.more}>{tour.tour_time} hour, {tour.tour_distance} km</Text>
              <StarRating
                style={styles.rating}
                maxStars={5}
                rating={4.5}
                starColor='#fb5f26'
                emptyStarColor='white'
                starSize={12}
              />
            </View>
          </View>
          <Image
            style={styles.image}
            source={{uri: 'https://unsplash.it/300/200/?random'}}
            resizeMode='stretch'
          />
        </View>
      </TouchableOpacity>
    )
  }
}

// // Prop type warnings
// TourListItem.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// TourListItem.defaultProps = {
//   someSetting: false
// }
