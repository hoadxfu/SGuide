import { DrawerNavigator } from 'react-navigation'
import PackageScreen from '../Containers/PackageScreen'
// import DummyScreen from '../Containers/DummyScreen'
import LaunchScreen from '../Containers/LaunchScreen'
import PlacesScreen from '../Containers/PlacesScreen'
import TourMapScreen from '../Containers/TourMapScreen'
import TourDetailScreen from '../Containers/TourDetailScreen'
// import HorizontalPlaceList from '../Containers/HorizontalPlaceList'
// import SightList from '../Containers/SightList'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = DrawerNavigator({
  PackageScreen: { screen: PackageScreen },
  LaunchScreen: { screen: LaunchScreen },
  TourMapScreen: { screen: TourMapScreen },
  TourDetailScreen: { screen: TourDetailScreen },
  PlacesScreen: { screen: PlacesScreen }
}, {
    // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'TourDetailScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
