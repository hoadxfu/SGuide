import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './Styles/PlaceListRowStyle'
import LinearGradient from 'react-native-linear-gradient'
import StarRating from 'react-native-star-rating'

export default class PlaceListRow extends React.Component {
  render () {
    const { place } = this.props
    return (
      <View style={styles.row}>
        <Image
          source={{ uri: 'https://unsplash.it/300/200/?random' }}
          style={styles.backgroundImage} resizeMode='stretch' />
        <LinearGradient colors={['transparent', 'rgba(0, 0, 0, 0.6)']}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 0, y: 1 }}
          location={[0, 0.8]}
          style={[styles.gradient_container]}
        >
          <Text
            numberOfLines={1}
            style={styles.title}>{place.name}</Text>
          <View style={styles.starRate}>
            <StarRating
              maxStars={5}
              rating={4.5}
              starColor='white'
              emptyStarColor='white'
              starSize={15}
            />
          </View>
        </LinearGradient>
      </View>
    )
  }
}

// // Prop type warnings
// PlaceListRow.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// PlaceListRow.defaultProps = {
//   someSetting: false
// }
