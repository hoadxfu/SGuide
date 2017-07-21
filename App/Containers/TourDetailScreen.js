import React from 'react'
import { View, Animated, TouchableHighlight, Text } from 'react-native'
import { connect } from 'react-redux'

// custom component
import {
  TourDescription,
  TourImageFeature,
  NavigationBar,
  CustomListView,
  PlaceListRow
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

import StarRating from 'react-native-star-rating'

// Add Actions - replace 'Your' with whatever your reducer is called :)
import TourRealmActions from '../Redux/TourRealmRedux'

// Styles
import styles from './Styles/TourDetailScreenStyle'
import { Colors } from '../Themes'

// const HEADER_SCROLL_DISTANCE = Metrics.navBarMaxHeight - Metrics.navBarHeight

class TourDetailScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      scrollY: new Animated.Value(0)
    }
  }

  componentWillMount () {
    this.props.fetchTour(this.props.navigation.state.params.tourId)
  }

  render () {
    const { tour } = this.props
    return (
      tour && <View style={styles.container}>
        <StyleProvider style={getTheme(sguide)}>
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
              title={tour.tour_name}
            />
            <Tabs initialPage={0}>
              <Tab heading='Info'>
                <Content>
                  <TourImageFeature
                    image={require('../Images/Icons/68595214-travelling-wallpapers.jpg')}
                    title={tour.tour_name}
                    subtitleLeft={
                      <Text style={styles.subtitle}>{tour.tour_time} hour, {tour.tour_distance} km</Text>
                    }
                    subtitleRight={
                      <StarRating
                        style={styles.rating}
                        maxStars={5}
                        rating={4.5}
                        starColor='white'
                        emptyStarColor='white'
                        starSize={12}
                      />
                    }
                  />
                  <TourDescription content={tour.tour_description} />
                </Content>
              </Tab>
              <Tab heading='Places'>
                <CustomListView
                  renderRow={(rowData) =>
                    <PlaceListRow
                      navigation={this.props.navigation} place={rowData} />
                  }
                  dataSource={tour.places} />
              </Tab>
              <Tab heading='Review' />
            </Tabs>
          </Container>
        </StyleProvider>
        <TouchableHighlight
          style={styles.btnLetGo}
          onPress={() => this.props.navigation.navigate('TourMapScreen')}>
          <Icon
            name='ios-navigate-outline'
            style={{color: Colors.snow}}
          />
        </TouchableHighlight>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  const { tour } = state.tourRealm
  return {
    tour
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchTour: (tourId) => dispatch(TourRealmActions.tourRealmRequest(tourId))
})

export default connect(mapStateToProps, mapDispatchToProps)(TourDetailScreen)
