import React from 'react'
import { Animated, View } from 'react-native'
import { TourListItem } from '../Components'
// import Animation from 'lottie-react-native'
import { connect } from 'react-redux'

// Component from native base
import {
  StyleProvider,
  Container,
  Content,
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
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/MainScreenStyle'

class MainScreen extends React.Component {
  constructor (props) {
    super(props)
    // init dataSource
    this.state = {
      progress: new Animated.Value(0),
      isLoading: 1,
      tours: []
    }
  }

  componentWillMount () {
    fetch('http://fihatech.com.vn/webservice/api/tours')
      .then(response => response.json())
      .then((responseJSON) => {
        // this.animation.reset()
        this.setState({
          isLoading: 0,
          tours: responseJSON
        })
      })
      .catch(error => console.log(error))
  }

  componentDidMount () {
    // this.animation.play()
  }

  renderTours () {
    return this.state.tours.map(tour => <TourListItem key={tour.tour_id} tour={tour} />)
  }

  render () {
    return (
      <StyleProvider style={getTheme(sguide)}>
        <Container>
          <Header>
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
                <Icon name='ios-search-outline' />
              </Button>
            </Right>
          </Header>
          {/* <Animated.View style={[
            styles.loading,
            {
              opacity: this.state.isLoading
            }
          ]}>
            <Animation
              ref={animation => { this.animation = animation }}
              loop
              style={{
                width: 100,
                height: 100
              }}
              source={require('../Themes/loading.json')}
              progress={this.state.progress}
            />
          </Animated.View> */}
          <Content>
            <View style={styles.navButtonGroup}>
              <View style={styles.navButton}>
                <Button circle danger>
                  <Icon name='ios-map' />
                </Button>
              </View>
              <View style={styles.navButton}>
                <Button circle info>
                  <Icon name='ios-navigate' />
                </Button>
              </View>
              <View style={styles.navButton}>
                <Button circle warning>
                  <Icon name='ios-albums' />
                </Button>
              </View>
              <View style={styles.navButton}>
                <Button circle primary>
                  <Icon name='ios-pricetag' />
                </Button>
              </View>
            </View>
            {this.renderTours()}
          </Content>
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

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)
