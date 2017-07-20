import { Dimensions, Platform } from 'react-native'

const { width, height } = Dimensions.get('window')

// Used via Metrics.baseMargin
const metrics = {
  marginHorizontal: 10,
  marginVertical: 10,
  section: 25,
  baseMargin: 10,
  doubleBaseMargin: 20,
  smallMargin: 5,
  doubleSection: 50,
  horizontalLineHeight: 1,
  searchBarHeight: 30,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  // navBarHeight: (Platform.OS === 'ios') ? 64 : 54,
  navBarHeight: 54,

  navBarMaxHeight: 240,
  navBarMarginTop: (Platform.OS === 'ios') ? 25 : 15,
  tabBarHeight: 40,
  buttonRadius: 4,
  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 50
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 200
  },
  iconDrawer: {
    width: 24,
    height: 24
  },
  iconDrawerSize: 24,
  statusBar: 25
}

export default metrics
