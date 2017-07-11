import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    backgroundColor: Colors.background
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: Metrics.smallMargin
  },
  title: {
    fontSize: 40,
    color: Colors.text
  },
  buttonText: {
    color: Colors.blue
  }
})
