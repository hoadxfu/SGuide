import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { NavigationBar, TourMap } from '../Components'
import {
  StyleProvider,
  Button,
  Icon
} from 'native-base'

import BottomPlaceList from './BottomPlaceList'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import PlacesActions from '../Redux/PlacesRedux'
import PlacesActions from '../Redux/PlaceListRealmRedux'

// themes
import getTheme from '../../native-base-theme/components'
import sguide from '../../native-base-theme/variables/sguide'
// Styles
import styles from './Styles/MainMapScreenStyle'

class MainMapScreen extends React.Component {
  componentWillMount () {
    this.props.fetchPlaces()
  }

  renderHeader () {
    //  <Left>
    //       <Button
    //         transparent
    //         onPress={() => this.props.navigation.navigate('DrawerOpen')}>
    //         <Icon name='ios-menu-outline' />
    //       </Button>
    //     </Left>
    return (
      <NavigationBar
        hasTabs
        buttonLeft={
          <Button
            transparent
            onPress={() => this.props.navigation.goBack()}>
            <Icon name='ios-arrow-back-outline' />
          </Button>
        }
        buttonRight={
          <View style={{ flexDirection: 'row' }}>

            <Button transparent>
              <Icon name='people' />
            </Button>
            <Button transparent>
              <Icon name='ios-search-outline' />
            </Button>
          </View>
        }
        title='Main Map'
      />
      // <Header backgroundColor='transparent'>
      //   <Left>
      //     <Button
      //       transparent
      //       onPress={() => this.props.navigation.goBack()}>
      //       <Icon name='ios-arrow-back-outline' />
      //     </Button>
      //   </Left>
      //   <Body>
      //     <Title>SGuide</Title>
      //   </Body>
      //   <Right>
      //     <Button transparent>
      //       <Icon name='people' />
      //     </Button>
      //     <Button transparent>
      //       <Icon name='ios-search-outline' />
      //     </Button>

      //   </Right>
      // </Header>
    )
  }

  renderMap () {
    console.log('====================================')
    console.log(this.props.fetching)
    console.log('====================================')
    if (this.props.fetching === null || this.props.fetching === true) {
      console.log('rendermap(), return null')
      return (<View />)
    } else {
      console.log('rendermap(), return this.props.places=')
      console.log(this.props.places)

      return (
        <TourMap locations={this.props.places} />
      )
    }
  }
  render () {
    console.log('renderring mainmapscreen')

    // const locations = [
    //   {
    //     title: 'Location A',
    //     thumbnail: 'https://unsplash.it/200/300/?random',
    //     description: 'abc xyz',
    //     audio: '',
    //     latitude: 21.041385,
    //     longitude: 105.816966
    //   },
    //   {
    //     title: 'Location B',
    //     thumbnail: 'https://unsplash.it/200/300/?random',
    //     description: 'abc xyz',
    //     audio: '',
    //     latitude: 21.023581,
    //     longitude: 105.823987
    //   }, {
    //     title: 'Location C',
    //     thumbnail: 'https://unsplash.it/200/300/?random',
    //     description: 'abc xyz',
    //     audio: '',
    //     latitude: 21.003581,
    //     longitude: 105.793987
    //   }, {
    //     title: 'Location D',
    //     thumbnail: 'https://unsplash.it/200/300/?random',
    //     description: 'abc xyz',
    //     audio: '',
    //     latitude: 21.063581,
    //     longitude: 105.89987
    //   }
    // ]
    return (

      <StyleProvider style={getTheme(sguide)}>
        <View style={styles.mainContainer}>

          {this.renderMap()}
          {/* <View style={styles.absoluteWraper}>
            {this.renderHeader()}
          </View> */}
          <BottomPlaceList />

          {/* <View style={styles.headerWraper}> */}
          {this.renderHeader()}
          {/* </View> */}
        </View>

      </StyleProvider >
    )
  }
}

const mapStateToProps = (state) => {
  return {
    places: state.placeListRealm.placeList,
    fetching: state.placeListRealm.fetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPlaces: () => dispatch(PlacesActions.placeListRealmRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainMapScreen)
