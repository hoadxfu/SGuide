import React from 'react'
// import { Text } from 'react-native'
import { connect } from 'react-redux'

// custom component
import {
  TourDescription,
  TourImageFeature,
  NavigationBar
} from '../Components'
// native base
import {
  StyleProvider,
  Container,
  Content,
  Button,
  Icon,
  Tabs,
  Tab
} from 'native-base'
import getTheme from '../../native-base-theme/components'
import sguide from '../../native-base-theme/variables/sguide'

// import StarRating from 'react-native-star-rating'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
// import styles from './Styles/PlaceDetailScreenStyle'

class PlaceDetailScreen extends React.Component {
  render () {
    const { place } = this.props.navigation.state.params
    return (
      place && <StyleProvider style={getTheme(sguide)}>
        <Container>
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
              <Button transparent>
                <Icon name='ios-download-outline' />
              </Button>
            }
            title={place.name}
          />
          <Tabs initialPage={0}>
            <Tab heading='Info'>
              <Content>
                <TourImageFeature
                  image={require('../Images/Icons/68595214-travelling-wallpapers.jpg')}
                  title={place.name}
                />
                <TourDescription content={place.description} />
              </Content>
            </Tab>
            <Tab heading='Map' />
            <Tab heading='Review' />
          </Tabs>
        </Container>
      </StyleProvider>
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

export default connect(mapStateToProps, mapDispatchToProps)(PlaceDetailScreen)
