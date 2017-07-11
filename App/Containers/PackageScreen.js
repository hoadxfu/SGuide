import React from 'react'
import { } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
import { TabNavigator } from 'react-navigation'
import DummyScreen from './DummyScreen'
import SightList from './SightList'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
// import styles from './Styles/PackageScreenStyle'
import { Metrics } from '../Themes'
class PackageScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Package',
    drawerIcon: ({ tintColor }) => (
      <Icon name='suitcase' size={Metrics.iconDrawerSize} color={tintColor} />
    )
  };
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  render () {
    const TabNav = TabNavigator({
      Info: {
        screen: DummyScreen,
        navigationOptions: {
          title: 'INFO'
        }
      },
      Sights: {
        screen: SightList,
        navigationOptions: {
          title: 'SIGHTS'
        }

      },
      Tickets: {
        screen: DummyScreen,
        navigationOptions: {
          title: 'TICKET'
        }
      }
    }, {
      tabBarOptions: {
        activeTintColor: '#e91e63'
      }
    })

    return (
      <TabNav />
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PackageScreen)
