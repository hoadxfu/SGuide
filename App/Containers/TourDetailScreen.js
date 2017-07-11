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
  }

  render () {
    // header scroll distance for animation
    const headerTranslate = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -HEADER_SCROLL_DISTANCE],
      extrapolate: 'clamp'
    })
    return (
      <View style={styles.container}>
        <AnimatedNavigationBar
          scrollY={this.state.scrollY}
          title='Lorem ipsum'
          subtitle='Lorem ipsum dolor sit amet'
          image={require('../Images/Icons/68595214-travelling-wallpapers.jpg')}
          leftButton={<NavButton icon='ios-arrow-back-outline' />}
          rightButton={<NavButton icon='ios-download-outline' />}
        />
        <ScrollableTabView renderTabBar={
          () => <CustomTabBar
            style={{position: 'absolute', top: Metrics.navBarMaxHeight}}
            backgroundColor={Colors.secondary}
            underlineStyle={{backgroundColor: Colors.snow}}
            textStyle={{color: Colors.snow}}
            onTabChange={this.handleTabChange.bind(this)}
            animatedStyle={{
              transform: [{translateY: headerTranslate}]
            }} />
          }>
          <TabTourInfo
            tabLabel='Info 1'
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}],
              {useNativeDriver: true}
            )} />
          <TabTourReview
            tabLabel='Review'
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}],
              {useNativeDriver: true}
            )} />
        </ScrollableTabView>
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
