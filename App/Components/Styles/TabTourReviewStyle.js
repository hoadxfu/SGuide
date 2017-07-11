import { StyleSheet } from 'react-native'
import { Metrics, Fonts, Colors } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    marginTop: Metrics.navBarMaxHeight + Metrics.tabBarHeight,
    paddingLeft: Metrics.marginVertical,
    paddingRight: Metrics.marginVertical
  },
  title: {
    fontSize: Fonts.size.h3,
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 10
  },
  commentTitle: {
    fontSize: Fonts.size.h3,
    paddingTop: 20,
    paddingBottom: 10
  },
  stars: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  star: {
    fontSize: Metrics.icons.medium,
    color: Colors.panther,
    padding: 5
  }
})
