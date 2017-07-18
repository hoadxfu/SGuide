import { StyleSheet } from 'react-native'
import { Metrics, Colors } from '../../Themes/'

// const window = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Metrics.titlePadding
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
    textAlign: 'left',
    backgroundColor: 'transparent'
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
    // marginTop: Metrics.baseMargin
  },
  starRate: {
    alignSelf: 'flex-end',
    width: 100,
    backgroundColor: 'transparent'
  }
})
