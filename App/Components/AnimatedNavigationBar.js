import React from 'react'
import { View, Text, Animated, Image } from 'react-native'
import PropTypes from 'prop-types'
import styles from './Styles/AnimatedNavigationBarStyle'
import { Metrics } from '../Themes/'

const HEADER_SCROLL_DISTANCE = Metrics.navBarMaxHeight - Metrics.navBarHeight

export default class AnimatedNavigationBar extends React.Component {
  render () {
    const headerTranslate = this.props.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -HEADER_SCROLL_DISTANCE],
      extrapolate: 'clamp'
    })
    const viewOpacity = this.props.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0],
      extrapolate: 'clamp'
    })
    const viewTranslate = this.props.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 100],
      extrapolate: 'clamp'
    })
    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <View style={styles.leftButton}>
            {this.props.leftButton}
          </View>
          <View style={styles.bar}>
            <Text style={styles.title}>{this.props.title}</Text>
          </View>
          <View style={styles.rightButton}>
            {this.props.rightButton}
          </View>
        </View>
        <Animated.View
          style={[
            styles.header,
            {
              transform: [{translateY: headerTranslate}]
            }
          ]}>
          <Animated.View
            style={[
              styles.feature,
              {
                opacity: viewOpacity,
                transform: [{translateY: viewTranslate}]
              }
            ]}>
            <Image
              style={styles.image}
              source={this.props.image}
            />
            <View style={styles.imageOverlay} />
            <View style={styles.imageInfo}>
              <Text style={styles.imageTitle}>{this.props.title}</Text>
              <Text style={styles.imageSubtitle}>{this.props.subtitle}</Text>
            </View>
          </Animated.View>
        </Animated.View>
        <Animated.View
          style={[
            styles.navBar,
            {
              opacity: viewOpacity,
              backgroundColor: 'transparent'
            }
          ]}>
          <View style={styles.leftButton}>
            {this.props.leftButton}
          </View>
          <View style={styles.rightButton}>
            {this.props.rightButton}
          </View>
        </Animated.View>
      </View>
    )
  }
}

// Prop type warnings
AnimatedNavigationBar.propTypes = {
  scrollY: PropTypes.object,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.number,
  leftButton: PropTypes.object,
  rightButton: PropTypes.object
}

// // Defaults for props
// AnimatedNavigationBar.defaultProps = {
//   someSetting: false
// }
