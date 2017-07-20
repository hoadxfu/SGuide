import {
  StyleSheet
  //  ,Dimensions,
  //  Platform
} from 'react-native'

// Enable this if you have app-wide application styles
// import { ApplicationStyles } from '../../Themes/'
// import { Metrics } from '../../Themes/'

// const window = Dimensions.get('window')

export default StyleSheet.create({
  // Merge in the screen styles from application styles
  // ...ApplicationStyles.screen,
  // container: {
  //   // ...StyleSheet.absoluteFillObject,
  //   // justifyContent: 'flex-end',
  //   alignItems: 'center'
  // },
  map: {
    ...StyleSheet.absoluteFillObject
    // width: window.width,
    // height: (Platform.OS === 'ios') ? window.height : window.height - Metrics.statusBar
    // flex: 1
    // ...Platform.select({
    //   ios: {
    //     width: window.width,
    //     height: window.height
    //   },
    //   android: {
    //     ...StyleSheet.absoluteFillObject
    //   }
    // })
  }
})
