import { StyleSheet, Dimensions } from 'react-native'
import { Metrics, Colors, Fonts } from '../../Themes/'

const window = Dimensions.get('window')

export default StyleSheet.create({
  container: {
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    overflow: 'hidden',
    height: Metrics.navBarMaxHeight,
    backgroundColor: Colors.primary,
    zIndex: 1000
  },
  navBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: Metrics.navBarMarginTop,
    height: Metrics.navBarHeight
  },
  bar: {
    flex: 4,
    backgroundColor: Colors.transparent,
    marginTop: 5
  },
  title: {
    color: Colors.snow,
    fontWeight: 'bold',
    fontSize: Fonts.size.input
  },
  feature: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: Metrics.navBarMaxHeight
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: Metrics.navBarMaxHeight,
    resizeMode: 'cover'
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
  },
  imageInfo: {
    backgroundColor: Colors.transparent,
    position: 'absolute',
    bottom: 0,
    width: window.width,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 8,
    paddingBottom: 8
  },
  imageTitle: {
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
  },
  leftButton: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginLeft: Metrics.marginVertical
  },
  rightButton: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginRight: Metrics.marginVertical
  }
})
