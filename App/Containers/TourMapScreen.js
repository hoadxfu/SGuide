import React from 'react'
import { ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { TourMap } from '../Components'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/TourMapScreenStyle'

class TourMapScreen extends React.Component {
  render () {
    return (
      <ScrollView style={styles.container}>
        <TourMap />
      </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(TourMapScreen)
