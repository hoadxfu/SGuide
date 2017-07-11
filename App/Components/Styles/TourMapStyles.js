import { StyleSheet, Dimensions } from 'react-native'

// Enable this if you have app-wide application styles
// import { ApplicationStyles } from '../../Themes/'

const window = Dimensions.get('window')

export default StyleSheet.create({
  // Merge in the screen styles from application styles
  // ...ApplicationStyles.screen,
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    width: window.width,
    height: window.height,
    // For Android :/
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
})
