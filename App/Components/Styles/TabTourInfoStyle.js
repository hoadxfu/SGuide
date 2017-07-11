import { StyleSheet } from 'react-native'
import { Metrics } from '../../Themes'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    marginTop: Metrics.navBarMaxHeight + Metrics.tabBarHeight,
    padding: 10
  },
  contentText: {
    textAlign: 'justify',
    lineHeight: 22
  }
})
