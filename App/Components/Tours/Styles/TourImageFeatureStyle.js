import { StyleSheet, Dimensions } from 'react-native'
import { Metrics, Fonts } from '../../../Themes/'

const window = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: 'transparent'
  },
  image: {
    width: window.width,
    height: 220,
    resizeMode: 'cover'
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    width: window.width,
    padding: Metrics.baseMargin
  },
  title: {
    fontSize: Fonts.size.h4,
    color: '#fff',
    marginBottom: 8
  },
  subtitle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  subLeft: {
    alignSelf: 'flex-start'
  },
  subRight: {
    alignSelf: 'flex-end'
  }
})
