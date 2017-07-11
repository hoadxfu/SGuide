import { StackNavigator } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'
import PlacesScreen from '../Containers/PlacesScreen'
import HorizontalPlaceList from '../Containers/HorizontalPlaceList'
import SightList from '../Containers/SightList'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  HorizontalPlaceList: { screen: HorizontalPlaceList },
  SightList: { screen: SightList },
  PlacesScreen: { screen: PlacesScreen }
}, {
    // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'SightList',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
