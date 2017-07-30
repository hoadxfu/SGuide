import React from 'react'
import { View } from 'react-native'
// custom component
import {
  CustomListView,
  NavigationBar,
  TourListRow
} from '../Components'
// import Animation from 'lottie-react-native'
import { connect } from 'react-redux'

// Component from native base
import {
  StyleProvider,
  Container,
  Content,
  Button,
  Icon
} from 'native-base'
import getTheme from '../../native-base-theme/components'
import sguide from '../../native-base-theme/variables/sguide'
// Add Actions - replace 'Your' with whatever your reducer is called :)
import TourListRealmActions from '../Redux/TourListRealmRedux'

// Styles
import styles from './Styles/MainScreenStyle'

class MainScreen extends React.Component {
  // constructor (props) {
  //   super(props)
  // }

  componentWillMount () {
    this.props.fetchTourList()
  }

  // renderHeader () {
  //   return (
  //     <Header>
  //       <Left>
  //         <Button
  //           transparent
  //           onPress={() => this.props.navigation.navigate('DrawerOpen')}>
  //           <Icon name='ios-menu-outline' />
  //         </Button>
  //       </Left>
  //       <Body>
  //         <Title>SGuide</Title>
  //       </Body>
  //       <Right>
  //         <Button transparent>
  //           <Icon name='ios-search-outline' />
  //         </Button>
  //       </Right>
  //     </Header>
  //   )
  // }
  render () {
    console.log('====================================')
    console.log('this.props.tourList=')
    console.log(this.props.tourList)
    console.log('====================================')
    return (

      <StyleProvider style={getTheme(sguide)}>
        <Container>
          <NavigationBar
            buttonLeft={
              <Button
                transparent
                onPress={() => this.props.navigation.navigate('DrawerOpen')}>
                <Icon name='ios-menu-outline' />
              </Button>
            }
            buttonRight={
              <Button transparent>
                <Icon name='ios-search-outline' />
              </Button>
            }
            title='SGuide'
          />
          <Content>
            <View style={styles.navButtonGroup}>
              <View style={styles.navButton}>
                <Button circle danger
                  onPress={() => this.props.navigation.navigate('MainMapScreen')}>
                  <Icon name='ios-map' />
                </Button>
              </View>
              <View style={styles.navButton}>
                <Button circle info

                >
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
            {
              this.props.tourList && <CustomListView
                renderRow={(rowData) =>
                  <TourListRow
                    navigation={this.props.navigation} tour={rowData} />
                }
                dataSource={this.props.tourList} />
            }
          </Content>
        </Container>
      </StyleProvider>
    )
  }
}

const mapStateToProps = (state) => {
  const { tourList } = state.tourListRealm
  return {
    tourList
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchTourList: () => dispatch(TourListRealmActions.tourListRealmRequest())
})

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)
