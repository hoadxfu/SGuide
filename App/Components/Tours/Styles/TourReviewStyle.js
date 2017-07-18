import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '../../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: Colors.coal
  },
  title: {
    fontSize: Fonts.size.h5,
    marginBottom: 16
  }
})
