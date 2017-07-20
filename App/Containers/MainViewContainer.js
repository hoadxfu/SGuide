import React from 'react'
import { Dimensions, View } from 'react-native'
import { connect } from 'react-redux'
import { Metrics } from '../Themes'
import { Container, Icon, Header, Left, Right, Content, Button, Text } from 'native-base'
// import YourActions from '../Redux/YourRedux'

const window = Dimensions.get('window')

class MainViewContainer extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Places',
    drawerIcon: ({ tintColor }) => (
      <Icon name='map-marker' size={Metrics.iconDrawerSize} color={tintColor} />
    )
  };
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  render () {
    const { navigate } = this.props.navigation
    return (
      <Container>
        <Header>
          <Left>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Button transparent onPress={() => navigate('DrawerOpen')}>
                <Icon name='menu' />
              </Button>
              <Text style={{ color: 'black', marginLeft: 20, fontSize: 18, fontFamily: 'Roboto' }}> Ha Noi </Text>
            </View>
          </Left>
          <Right>
            <Button transparent>
              <Icon name='download' style={{ fontSize: 30, color: 'red' }} />
            </Button>
            <Button transparent>
              <Icon name='people' style={{ fontSize: 30, color: 'red' }} />
            </Button>
            <Button transparent>
              <Icon name='search' style={{ fontSize: 30, color: 'red' }} />
            </Button>
          </Right>
        </Header>
        <View style={{ height: window.height / 8.5, backgroundColor: 'gray', flexDirection: 'row' }}>
          <Button style={{ marginLeft: 25, marginTop: 20, flex: 1, marginRight: 10 }} iconLeft>
            <Icon name='map' />
            <Text>Bản đồ</Text>

          </Button>
          <Button style={{ marginRight: 25, marginTop: 20, flex: 1 }} iconLeft>
            <Icon name='map' />
            <Text>Địa điểm </Text>
          </Button>
        </View>
        <View style={{ height: window.height / 8.5, backgroundColor: 'gray', flexDirection: 'row' }}>
          <Button style={{ marginLeft: 25, flex: 1, marginRight: 10 }} iconLeft>
            <Icon name='information-circle' />
            <Text>Thông tin </Text>

          </Button>
          <Button style={{ marginRight: 25, flex: 1 }} iconLeft>
            <Icon name='pricetag' />
            <Text>Vé</Text>
          </Button>
        </View>

        <Content>
          <View style={{ height: window.height / 11, backgroundColor: 'red', justifyContent: 'center' }}>
            <Text style={{ fontSize: 15, fontFamily: 'Roboto', marginLeft: 20 }}>
              Tour du lịch bằng audio
            </Text>

          </View>
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(MainViewContainer)
