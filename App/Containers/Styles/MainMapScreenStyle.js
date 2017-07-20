import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {

  },
  headerWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  absoluteWraper: {
    backgroundColor: Colors.transparent,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 0,
    transform: [{ 'translate': [0, 0, 5] }]
  }
})
