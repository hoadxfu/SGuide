import { DrawerNavigator } from 'react-navigation'
// import DummyScreen from '../Containers/DummyScreen'
import LaunchScreen from '../Containers/LaunchScreen'
import TourMapScreen from '../Containers/TourMapScreen'
import TourDetailScreen from '../Containers/TourDetailScreen'
import PlacesScreen from '../Containers/PlacesScreen'
import PackageScreen from '../Containers/PackageScreen'

// import HorizontalPlaceList from '../Containers/HorizontalPlaceList'
// import SightList from '../Containers/SightList'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = DrawerNavigator({
  LaunchScreen: { screen: LaunchScreen },
  TourMapScreen: { screen: TourMapScreen },
  TourDetailScreen: { screen: TourDetailScreen },
  PlacesScreen: { screen: PlacesScreen },
  PackageScreen: { screen: PackageScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'TourDetailScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
