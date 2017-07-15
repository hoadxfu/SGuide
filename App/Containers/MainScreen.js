import React from 'react'
import { View } from 'react-native'
import { TourList } from '../Components'
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
import TourListActions from '../Redux/TourListRedux'

// Styles
import styles from './Styles/MainScreenStyle'

class MainScreen extends React.Component {
  // constructor (props) {
  //   super(props)
  // }

  componentWillMount () {
    this.props.fetchTourList()
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
            {this.props.tourList && <TourList navigation={this.props.navigation} dataSource={this.props.tourList} />}
          </Content>
        </Container>
      </StyleProvider>
    )
  }
}

const mapStateToProps = (state) => {
  const { tourList } = state.tourList
  return {
    tourList
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchTourList: () => dispatch(TourListActions.tourListRequest())
})

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)
