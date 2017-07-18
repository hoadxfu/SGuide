import React from 'react'
import { View, Text, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import styles from './Styles/TourImageFeatureStyle'

export default class TourImageFeature extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={this.props.image}
        />
        <LinearGradient colors={['transparent', 'rgba(0, 0, 0, 0.6)']}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 0, y: 1.0 }}
          location={[0, 2.8]}
          style={[styles.gradient]}
        >
          <Text style={styles.title}>{this.props.title}</Text>
          <View style={styles.subtitle}>
            <View style={styles.subLeft}>
              {this.props.subtitleLeft}
            </View>
            <View style={styles.subRight}>
              {this.props.subtitleRight}
            </View>
          </View>
        </LinearGradient>
      </View>
    )
  }
}

// // Prop type warnings
// TourImageFeature.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// TourImageFeature.defaultProps = {
//   someSetting: false
// }
