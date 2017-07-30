import React from 'react'
import { View, Dimensions } from 'react-native'
import MapView from 'react-native-maps'
import TourMapCallout from './TourMapCallout'
import Styles from './Styles/TourMapStyles'
import { Thumbnail } from 'native-base'
// import Icon from 'react-native-vector-icons/FontAwesome'

// Generate this MapHelpers file with `ignite generate map-utilities`
// You must have Ramda as a dev dependency to use this.
// import { calculateRegion } from '../Lib/MapHelpers'

let { width, height } = Dimensions.get('window')
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.05
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

/* ***********************************************************
* IMPORTANT!!! Before you get started, if you are going to support Android,
* PLEASE generate your own API key and add it to android/app/src/main/AndroidManifest.xml
* https://console.developers.google.com/apis/credentials
* Also, you'll need to enable Google Maps Android API for your project:
* https://console.developers.google.com/apis/api/maps_android_backend/
*************************************************************/

class TourMap extends React.Component {
  /* ***********************************************************
  * This generated code is only intended to get you started with the basics.
  * There are TONS of options available from traffic to buildings to indoors to compass and more!
  * For full documentation, see https://github.com/lelandrichardson/react-native-maps
  *************************************************************/

  constructor (props) {
    super(props)
    /* ***********************************************************
    * STEP 1
    * Set the array of locations to be displayed on your map. You'll need to define at least
    * a latitude and longitude as well as any additional information you wish to display.
    *************************************************************/

    /* ***********************************************************
    * STEP 2
    * Set your initial region either by dynamically calculating from a list of locations (as below)
    * or as a fixed point, eg: { latitude: 123, longitude: 123, latitudeDelta: 0.1, longitudeDelta: 0.1}
    * You can generate a handy `calculateRegion` function with
    * `ignite generate map-utilities`
    *************************************************************/
    // const region = calculateRegion(locations, { latPadding: 0.05, longPadding: 0.05 })
    navigator.geolocation.getCurrentPosition(
      (position) => {
        let initialPosition = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA
        }
        this.setState({ initialPosition })
      },
      (error) => console.log(JSON.stringify(error)),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    )

    // todo debugging
    this.state = {
      showUserLocation: true,
      initialPosition: {
        latitude: 21.041385,
        longitude: 105.816966,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      },
      coords: []
    }
    this.renderMapMarkers = this.renderMapMarkers.bind(this)
    this.onRegionChange = this.onRegionChange.bind(this)
  }
  pushCords (newCoords) {
    console.log('pushing cords')
    this.setState(state => ({
      // state.coords.push(newCoords)
      // return state
      ...state,
      coords: [...state.coords, ...newCoords]
    })
    )
  }
  addCordinates (originLocation, destinationLocation, waypoints = null) {
    const mode = 'walking' // 'walking';
    const origin = '' + originLocation.latitude + ',' + originLocation.longitude
    const destination = '' + destinationLocation.latitude + ',' + destinationLocation.longitude

    const APIKEY = 'AIzaSyCdBnbQpT_azhpOr41hZjyEKIK33YgRcQQ'
    let waypointUrl = ''
    if (waypoints !== null) {
      waypoints.forEach(function (location, index, array) {
        waypointUrl += location.latitude + ',' + location.longitude
        if (index < array.length - 1) {
          waypointUrl += '|'
        }
      }, this)
    }
    const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}${waypoints !== null ? ('&waypoints=' + waypointUrl) : ''}&key=${APIKEY}&mode=${mode}`
    console.log('url=' + url)
    console.log('fetching routes, origin=')
    console.log(origin)
    console.log('fetching routes, destination=')
    console.log(destination)

    const decode = function (t, e) { for (var n, o, u = 0, l = 0, r = 0, d = [], h = 0, i = 0, a = null, c = Math.pow(10, e || 5); u < t.length;) { a = null, h = 0, i = 0; do a = t.charCodeAt(u++) - 63, i |= (31 & a) << h, h += 5; while (a >= 32); n = 1 & i ? ~(i >> 1) : i >> 1, h = i = 0; do a = t.charCodeAt(u++) - 63, i |= (31 & a) << h, h += 5; while (a >= 32); o = 1 & i ? ~(i >> 1) : i >> 1, l += n, r += o, d.push([l / c, r / c]) } return d = d.map(function (t) { return { latitude: t[0], longitude: t[1] } }) }

    fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.routes.length) {
          const responseCoords = decode(responseJson.routes[0].overview_polyline.points)
          console.log('responseCoords: ')
          console.log(responseCoords)
          this.pushCords(responseCoords) // definition below
        }
      }).catch(e => { console.warn(e) })
  }

  // transforms something like this geocFltrhVvDsEtA}ApSsVrDaEvAcBSYOS_@... to an array of coordinates
  componentWillMount () {
    // todo debugging
    if (this.props.enableLines === true) {
      this.fetchLineCoordinates()
    }
  }

  fetchLineCoordinates () {
    const locations = this.props.locations
    console.log('starting componentWillMount(), locations=')
    console.log(locations)

    if (locations.length > 1) {
      // for (var i = 1; i < locations.length - 1; i++) {
      //   this.addCordinates(locations[i], locations[i + 1])

      //   // this.addCordinates(locations[0], locations[0 + 1])

      // }
      this.addCordinates(locations[0],
        locations[locations.length - 1],
        locations.slice(1, locations.length))
    }
    console.log('finishing componentWillMount(): this.state.coords=')
    console.log(this.state.coords)
  }

  watchID = null

  componentWillReceiveProps (newProps) {
    /* ***********************************************************
    * STEP 3
    * If you wish to recenter the map on new locations any time the
    * props change, do something like this:
    *************************************************************/
    this.watchID = navigator.geolocation.watchPosition(
      (position) => {
        let lastPosition = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA
        }
        this.setState({ lastPosition })
      },
      (error) => console.log(JSON.stringify(error)),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 })
  }

  onRegionChange (newRegion) {
    /* ***********************************************************
    * STEP 4
    * If you wish to fetch new locations when the user changes the
    * currently visible region, do something like this:
    *************************************************************/
    navigator.geolocation.clearWatch(this.watchID)
    // Fetch new data...
  }

  calloutPress (location) {
    /* ***********************************************************
    * STEP 5
    * Configure what will happen (if anything) when the user
    * presses your callout.
    *************************************************************/
    // console.tron.log(location) // Reactotron
  }

  renderMapRoutes () {
    if (this.state.coords.length) {
      console.log('renderingMaproutes:: this.state.coords=')
      console.log(this.state.coords)

      // DEBUGGINg
      return (
        <MapView.Polyline
          coordinates={this.state.coords}
          strokeWidth={4}
          lineCap='round'
          strokeColor='orange'
        />
      )
    }
  }
  renderMapMarkers (location) {
    /* ***********************************************************
    * STEP 6
    * Customize the appearance and location of the map marker.
    * Customize the callout in ./TourMapCallout.js
    *************************************************************/

    if (typeof location.longitude === 'number') {
      return (
        <MapView.Marker key={location.name} anchor={{ x: 0.5, y: 0.5 }} flat coordinate={{ latitude: location.latitude, longitude: location.longitude }}>
          <View>
            {/* <Icon name='rocket' size={24} color='red' /> */}
            <Thumbnail source={{ uri: location.album }} />
          </View>
          <TourMapCallout location={location} onPress={this.calloutPress} />
        </MapView.Marker >
      )
    } else {
      return null
    }
  }

  render () {
    const locations = this.props.locations
    console.log('====================================')
    console.log(locations)
    console.log('====================================')

    // locations.map((location) => null)
    // return <View />
    return (

      <MapView
        style={Styles.map}
        initialRegion={this.state.initialPosition}
        onRegionChangeComplete={this.onRegionChange}
        showsUserLocation={this.state.showUserLocation}
        provider='google'
        region={this.state.lastPosition}
      >
        {locations !== null ? locations.map(location => this.renderMapMarkers(location), this) : null}
        {this.renderMapRoutes()}
      </MapView>

    )
  }
}

export default TourMap
