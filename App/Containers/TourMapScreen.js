import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { TourMap, NavigationBar } from '../Components'
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
        {/* <Button
          transparent
          onPress={() => this.props.navigation.navigate('DrawerOpen')}>
          <Icon name='ios-menu-outline' />
        </Button> */}
        <Button
          transparent
          onPress={() => this.props.navigation.goBack()}>
          <Icon name='ios-arrow-back-outline' />
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
    const tour = this.props.navigation.state.params.tour
    console.log('====================================')
    console.log(tour)
    console.log('====================================')
    const places = tour.places
    console.log('====================================')
    console.log(places)
    console.log('====================================')
    // const fetching = this.props.fetching
    // console.log(fetching)

    // if (fetching === null || fetching === true) {
    // console.log('rendermap(), return null')
    // return (<View />)
    // } else {
    // console.log('rendermap(), return this.props.places=')
    // console.log(places)

    return (
      <TourMap enableLines locations={places} />
    )
    // }
  }

  renderNavigationBar () {
    const tour = this.props.navigation.state.params.tour
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

        title={tour.tour_name}
      />

    )
  }
  render () {
    console.log('rendering TOURmapscreen')
    console.log('====================================')
    console.log(this.props)
    console.log('====================================')
    return (
      <StyleProvider style={getTheme(sguide)}>
        < View style={styles.mainContainer} >
          {this.renderMap()}
          {this.renderNavigationBar()}

          {/* <View style={styles.headerWraper}>
            {this.renderNavigationBar()}
          </View> */}
        </View >

      </StyleProvider>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // places: state.tourRealm.tour.places,
    // fetching: state.tourRealm.fetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // fetchTourById: (id = 1) => dispatch(PlacesActions.placesByTourRequest(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TourMapScreen)
