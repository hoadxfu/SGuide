// import BottomPlaceList from '../Containers/BottomPlaceList'
import MainMapScreen from '../Containers/MainMapScreen'
import { DrawerNavigator, StackNavigator } from 'react-navigation'
import PlaceDetailScreen from '../Containers/PlaceDetailScreen'
import MainScreen from '../Containers/MainScreen'
import LaunchScreen from '../Containers/LaunchScreen'
import TourMapScreen from '../Containers/TourMapScreen'
import TourDetailScreen from '../Containers/TourDetailScreen'
// import PlacesScreen from '../Containers/PlacesScreen'
// import PackageScreen from '../Containers/PackageScreen'

// import HorizontalPlaceList from '../Containers/HorizontalPlaceList'
// import SightList from '../Containers/SightList'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const SlideMenu = DrawerNavigator({
  MainScreen: { screen: MainScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  PlaceDetailScreen: { screen: PlaceDetailScreen },
  HomeScreen: { screen: SlideMenu },
  TourMapScreen: { screen: TourMapScreen },
  TourDetailScreen: { screen: TourDetailScreen },
  MainMapScreen: { screen: MainMapScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'HomeScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
