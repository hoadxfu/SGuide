import { StyleSheet } from 'react-native'
import { Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Metrics.titlePadding
  },
  starRate: {
    alignSelf: 'flex-end',
    width: 80,
    marginRight: Metrics.smallMargin
    // ,backgroundColor: 'red'

  },
  bodyContainer: {
    padding: Metrics.smallMargin,
    flex: 1,
    width: null,
    height: 60
  },
  image: { height: 100, width: 140 },
  title: {
    fontSize: 14,
    // fontFamily: 'Roboto',
    color: 'black'
  },
  rateNumber: {
    fontSize: 12
  },
  footerContainer: {
    padding: Metrics.smallMargin,
    flexDirection: 'row'

  }
})
