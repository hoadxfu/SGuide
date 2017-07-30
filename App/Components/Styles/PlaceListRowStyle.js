import { StyleSheet, Dimensions } from 'react-native'
import { Metrics, Colors } from '../../Themes/'

const window = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Metrics.titlePadding
  },
  row: {
    flex: 1
  },
  backgroundImage: {
    width: window.width,
    height: 200
  },
  title: {
    flex: 3,
    fontFamily: 'Roboto',
    fontSize: 20,
    color: Colors.snow,
    textAlign: 'left',
    backgroundColor: 'transparent',
    marginRight: 16
  },
  gradient_container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: Metrics.baseMargin
  },
  listContent: {
    // marginTop: Metrics.baseMargin
  },
  starRate: {
    flex: 1,
    paddingTop: 6,
    backgroundColor: 'transparent'
  }
})
