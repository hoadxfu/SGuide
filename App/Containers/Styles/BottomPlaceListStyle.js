import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    position: 'absolute',
    backgroundColor: Colors.snow,
    height: 130,
    elevation: 100,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'space-between'

  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: Metrics.baseMargin
  },
  buttonText: {
    color: Colors.lightBlue,
    fontWeight: 'bold'
  },
  row: {
    backgroundColor: Colors.snow,
    marginVertical: 4,
    marginLeft: 4,
    justifyContent: 'center'
  },
  boldLabel: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: Colors.snow,
    textAlign: 'center',
    marginBottom: Metrics.smallMargin
  },
  label: {
    textAlign: 'center',
    color: Colors.snow
  },
  listContent: {
    marginRight: 4
  },
  thumbnail: { width: 80, height: 80 }

})
