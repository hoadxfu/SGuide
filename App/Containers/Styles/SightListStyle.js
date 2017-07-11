import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },
  row: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    height: 200
  },
  title: {
    fontFamily: 'Roboto',
    fontSize: 20,
    alignSelf: 'flex-start',
    color: Colors.snow,
    textAlign: 'left'
    // ,
    // marginBottom: Metrics.baseMargin,
    // marginLeft: Metrics.baseMargin
  },
  gradient_container: {
    flex: 1,
    height: 50,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: Metrics.baseMargin
  },
  listContent: {
    marginTop: Metrics.baseMargin
  },
  starRate: {
    alignSelf: 'flex-end',
    width: 100
    // ,backgroundColor: 'red'

  }
})
