import React from 'react'
import { View, Animated, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'

// Custom Component
import Icon from 'react-native-vector-icons/Ionicons'
import {
  AnimatedNavigationBar,
  NavButton,
  TabTourInfo
} from '../Components'

// Add Actions - replace 'Your' with whatever your reducer is called :)
import TourActions from '../Redux/TourRedux'

// Styles
import styles from './Styles/TourDetailScreenStyle'
import { Colors, Metrics } from '../Themes'

// const HEADER_SCROLL_DISTANCE = Metrics.navBarMaxHeight - Metrics.navBarHeight

class TourDetailScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      scrollY: new Animated.Value(0)
    }
  }

  componentWillMount () {
    this.props.fetchTour()
  }

  // handleTabChange () {
  //   this.refs.infoRef._component.scrollTo({x: 0, y: 0, animated: true})
  //   this.refs.reviewRef._component.scrollTo({x: 0, y: 0, animated: true})
  // }

  render () {
    // const { params } = this.props.navigation.state

    // const { tour_id: id } = params.tour
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
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
            { useNativeDriver: true }
          )}>
          <TabTourInfo />
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
  const { tour } = state.tour
  return {
    tour
  }
}

const mapDispatchToProps = (dispatch) => ({
  // todo debugging
  fetchTour: () => dispatch(TourActions.tourRequest(1))
})

export default connect(mapStateToProps, mapDispatchToProps)(TourDetailScreen)
