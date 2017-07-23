import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { TourMap } from '../Components'
import {
  StyleProvider,
  Header,
  Left,
  Body,
  Title,
  Right,
  Button,
  Icon
} from 'native-base'
import getTheme from '../../native-base-theme/components'
import sguide from '../../native-base-theme/variables/sguide'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import PlacesActions from '../Redux/PlacesRedux'

// Styles
import styles from './Styles/TourMapScreenStyle'

class TourMapScreen extends React.Component {
  componentWillMount () {
    // const { tour } = this.props.navigation.state
    // default = 1
    // this.props.fetchTourById(id)
  }

  renderHeader () {
    return (<Header backgroundColor='transparent'>
      <Left>
        <Button
          transparent
          onPress={() => this.props.navigation.navigate('DrawerOpen')}>
          <Icon name='ios-menu-outline' />
        </Button>
      </Left>
      <Body>
        <Title>SGuide</Title>
      </Body>
      <Right>
        <Button transparent>
          <Icon name='people' />
        </Button>
        <Button transparent>
          <Icon name='ios-search-outline' />
        </Button>

      </Right>
    </Header>)
  }

  renderMap () {
    const places = this.props.places
    const fetching = this.props.fetching
    console.log(fetching)

    if (fetching === null || fetching === true) {
      console.log('rendermap(), return null')
      return (<View />)
    } else {
      console.log('rendermap(), return this.props.places=')
      console.log(places)

      return (
        <TourMap enableLines locations={places} />
      )
    }
  }

  render () {
    console.log('rendering TOURmapscreen')
    // const places = this.props.places
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
        < View style={styles.container} >
          {this.renderMap()}
          <View style={styles.headerWraper}>
            {this.renderHeader()}
          </View>
        </View >

      </StyleProvider>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    places: state.tourRealm.tour.places,
    fetching: state.tourRealm.fetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // fetchTourById: (id = 1) => dispatch(PlacesActions.placesByTourRequest(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TourMapScreen)
