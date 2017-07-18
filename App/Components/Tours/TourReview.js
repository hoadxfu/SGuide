import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/TourReviewStyle'

export default class TourReview extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Review & Rating</Text>
      </View>
    )
  }
}

// // Prop type warnings
// TourReview.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// TourReview.defaultProps = {
//   someSetting: false
// }
