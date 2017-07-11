import React from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Images, Metrics } from '../Themes'
import Icon from 'react-native-vector-icons/FontAwesome'
// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Launch Screen',
    drawerIcon: ({ tintColor }) => (
      <Icon name='rocket' size={Metrics.iconDrawerSize} color={tintColor} />
    )
  };
  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />
          </View>

          <View style={styles.section} >
            <Image source={Images.ready} />
            <Text style={styles.sectionText}>
              This probably isn't what your app is going to look like. Unless your designer handed you this screen and, in that case, congrats! You're ready to ship. For everyone else, this is where you'll see a live preview of your fully functioning app using Ignite.
            </Text>
          </View>

        </ScrollView>
      </View>
    )
  }
}
