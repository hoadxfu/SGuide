import React from 'react'
import { Text, View, NetInfo, StatusBar } from 'react-native'
import Animation from 'lottie-react-native'
// Styles
import styles from './Styles/LaunchScreenStyles'

// Add Actions - replace 'Your' with whatever your reducer is called :)
import APIToursActions from '../Redux/APIToursRedux'

import { connect } from 'react-redux'

// database
import realm from '../Models'

import anim from '../Themes/material_wave_loading.json'

class LaunchScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      networkStatus: 'offline',
      readyToLaunch: false
    }
  }

  handleStorageData (nextProps) {
    // save tour list to model
    nextProps.tours && realm.write(() => {
      nextProps.tours.forEach((tour) => {
        // upadate tours from api to realm db
        realm.create('Tour', tour, true)
      })
      this.setState({ readyToLaunch: true })
    })
  }

  componentWillReceiveProps (nextProps) {
    // start save api data to realm db
    this.handleStorageData(nextProps)
  }

  componentDidMount () {
    // start loading animation
    this.animation.play()
  }

  componentWillMount () {
    // check network connected
    NetInfo.isConnected.fetch().then().done(() => {
      NetInfo.isConnected.addEventListener(
        'change',
        (isConnected) => {
          // change state
          this.setState({
            networkStatus: isConnected ? 'online' : 'offline'
          })
          isConnected && this.props.fetchAPITours()
        })
    })
  }

  componentDidUpdate () {
    // if network is online and data has already stored to db then navigate user to mainscreen
    this.state.networkStatus === 'online' &&
      this.state.readyToLaunch &&
        this.props.navigation.navigate('MainScreen')
    // if network is offline then navigate user to mainscreen
    this.state.networkStatus === 'offline' &&
        this.props.navigation.navigate('MainScreen')
  }

  render () {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <View>
          <Animation
            ref={animation => {
              this.animation = animation
            }}
            style={{
              width: 100,
              height: 100
            }}
            loop
            source={anim}
          />
        </View>
        <Text style={styles.welcome}>loading data</Text>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  const { tours } = state.tours
  return {
    tours
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchAPITours: () => dispatch(APIToursActions.apiToursRequest())
})

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen)
