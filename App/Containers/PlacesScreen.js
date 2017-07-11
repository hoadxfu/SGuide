import React from 'react'
import { ScrollView, View, Text } from 'react-native'
import { connect } from 'react-redux'
import HorizontalPlaceList from './HorizontalPlaceList'
import { Button } from 'native-base'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/PlacesScreenStyle'

class PlacesScreen extends React.Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  render () {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.section}>
          <View style={{ alignSelf: 'flex-start' }}>
            <Button transparent >
              <Text sytle={styles.title}> Sightseeing </Text>
            </Button>
          </View>
          <View style={{ alignSelf: 'flex-end' }}>
            <Button transparent >
              <Text style={styles.buttonText}>SHOW ON MAP </Text>
            </Button>
          </View>
        </View>
        <HorizontalPlaceList placesData={this.props.sight} />
        <View style={styles.section}>
          <View style={{ alignSelf: 'flex-start' }}>
            <Button transparent >
              <Text sytle={styles.title}> Sightseeing </Text>
            </Button>
          </View>
          <View style={{ alignSelf: 'flex-end' }}>
            <Button transparent >
              <Text style={styles.buttonText}>SHOW ON MAP </Text>
            </Button>
          </View>
        </View>
        <HorizontalPlaceList placesData={this.props.food} />
        <View style={styles.section}>
          <View style={{ alignSelf: 'flex-start' }}>
            <Button transparent >
              <Text sytle={styles.title}> Sightseeing </Text>
            </Button>
          </View>
          <View style={{ alignSelf: 'flex-end' }}>
            <Button transparent >
              <Text style={styles.buttonText}>SHOW ON MAP </Text>
            </Button>
          </View>
        </View>
        <HorizontalPlaceList placesData={this.props.play} />

      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  const { sight, food, play } = state.places
  console.log('sight ==' + sight)
  return {
    sight,
    food,
    play
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlacesScreen)
