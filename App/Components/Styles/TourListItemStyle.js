import { StyleSheet, Dimensions } from 'react-native'
import { Metrics } from '../../Themes'

const window = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: '#fff'
  },
  gradientContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: Metrics.baseMargin
  },
  info: {
    flex: 1,
    padding: 10
  },
  name: {
    fontSize: 14,
    textAlign: 'left',
    paddingBottom: 4,
    backgroundColor: 'transparent'
  },
  subInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  more: {
    alignSelf: 'flex-start',
    color: '#999',
    fontSize: 12
  },
  rating: {
    alignSelf: 'flex-end'
  },
  image: {
    height: 200,
    width: window.width,
    flex: 1
  }
})
