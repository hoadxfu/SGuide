import { DrawerNavigator } from 'react-navigation'
import BottomPlaceList from '../Containers/BottomPlaceList'
import MainMapScreen from '../Containers/MainMapScreen'
import MainScreen from '../Containers/MainScreen'
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
  BottomPlaceList: { screen: BottomPlaceList },
  MainMapScreen: { screen: MainMapScreen },
  MainScreen: { screen: MainScreen },
  LaunchScreen: { screen: LaunchScreen },
  TourMapScreen: { screen: TourMapScreen },
  TourDetailScreen: { screen: TourDetailScreen },
  PlacesScreen: { screen: PlacesScreen },
  PackageScreen: { screen: PackageScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'MainScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
