import React from 'react'
import { View, Text, Animated, Image } from 'react-native'
import PropTypes from 'prop-types'
import styles from './Styles/AnimatedNavigationBarStyle'
import { Metrics } from '../Themes/'

const HEADER_SCROLL_DISTANCE = Metrics.navBarMaxHeight - Metrics.navBarHeight

export default class AnimatedNavigationBar extends React.Component {
  render () {
    const headerHeight = this.props.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [Metrics.navBarMaxHeight, Metrics.navBarHeight],
      extrapolate: 'clamp'
    })
    const viewOpacity = this.props.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0],
      extrapolate: 'clamp'
    })
    const viewTranslate = this.props.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -50],
      extrapolate: 'clamp'
    })
    return (
      <Animated.View
        style={[
          styles.header,
          {
            // transform: [{translateY: headerTranslate}]
            height: headerHeight
          }
        ]}>
        <View style={styles.navBar}>
          <View style={styles.leftButton} />
          <View style={styles.bar}>
            <Text numberOfLines={1} style={styles.title}>{this.props.title}</Text>
          </View>
          <View style={styles.rightButton} />
        </View>
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
            <View style={styles.subtitle}>
              <View style={styles.subLeft}>
                {this.props.subtitleLeft}
              </View>
              <View style={styles.subRight}>
                {this.props.subtitleRight}
              </View>
            </View>
          </View>
        </Animated.View>
        <View style={styles.navBar}>
          <View style={styles.leftButton}>
            {this.props.leftButton}
          </View>
          <View style={styles.rightButton}>
            {this.props.rightButton}
          </View>
        </View>
      </Animated.View>
    )
  }
}

// Prop type warnings
AnimatedNavigationBar.propTypes = {
  scrollY: PropTypes.object,
  title: PropTypes.string,
  subtitleLeft: PropTypes.object,
  subtitleRight: PropTypes.object,
  image: PropTypes.number,
  leftButton: PropTypes.object,
  rightButton: PropTypes.object
}

// // Defaults for props
// AnimatedNavigationBar.defaultProps = {
//   someSetting: false
// }
