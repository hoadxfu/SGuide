import { StyleSheet } from 'react-native'
import { Colors } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: Metrics.navBarHeight,
    backgroundColor: Colors.background
  },
  iconMenuBar: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 25,
    left: 15,
    zIndex: 1000
  }
})
