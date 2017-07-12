import React from 'react'
import { View, Animated, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'

// Custom Component
import ScrollableTabView from 'react-native-scrollable-tab-view'
import Icon from 'react-native-vector-icons/Ionicons'
import {
  AnimatedNavigationBar,
  NavButton,
  CustomTabBar,
  TabTourInfo,
  TabTourReview
} from '../Components'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/TourDetailScreenStyle'
import { Colors, Metrics } from '../Themes'

const HEADER_SCROLL_DISTANCE = Metrics.navBarMaxHeight - Metrics.navBarHeight

class TourDetailScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      scrollY: new Animated.Value(0)
    }
  }

  handleTabChange () {
    this._scrollView.scrollTo({x: 0, y: 0, animation: false})
  }

  render () {
    // header scroll distance for animation
    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [Metrics.navBarMaxHeight, Metrics.navBarHeight],
      extrapolate: 'clamp'
    })

    return (
      <View style={styles.container}>
        <AnimatedNavigationBar
          scrollY={this.state.scrollY}
          title='Lorem ipsum'
          subtitle='Lorem ipsum dolor sit amet'
          image={require('../Images/Icons/68595214-travelling-wallpapers.jpg')}
          leftButton={<NavButton icon='ios-arrow-back-outline' onPress={() => this.props.navigation.goBack()} />}
          rightButton={<NavButton icon='ios-download-outline' />}
        />
        <Animated.ScrollView
          // ref={(ref) => { this._scrollView = ref._component }}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}]
          )}>
          <ScrollableTabView renderTabBar={
            () => <CustomTabBar
              style={{position: 'absolute'}}
              backgroundColor={Colors.secondary}
              underlineStyle={{backgroundColor: Colors.snow}}
              textStyle={{color: Colors.snow}}
              onTabChange={this.handleTabChange.bind(this)}
              animatedStyle={{
                top: headerHeight
              }} />
            }>
            <TabTourInfo tabLabel='Info' />
            <TabTourReview tabLabel='Review' />
          </ScrollableTabView>
        </Animated.ScrollView>
        <TouchableHighlight
          style={styles.btnLetGo}
          onPress={() => this.props.navigation.navigate('TourMapScreen')}>
          <Icon
            name='ios-navigate-outline'
            size={Metrics.icons.medium}
            color={Colors.snow}
          />
        </TouchableHighlight>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TourDetailScreen)
