import { StyleSheet, Dimensions } from 'react-native'

const window = Dimensions.get('window')

export default StyleSheet.create({
  loading: {
    position: 'absolute',
    top: window.height / 2 - 50,
    left: window.width / 2 - 50,
    flex: 1,
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)'
  },
  navButtonGroup: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  navButton: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10
  }
})
