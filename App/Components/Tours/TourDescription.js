import React from 'react'
import { Text } from 'react-native'
import styles from './Styles/TourDescriptionStyle'

export default class TourDescription extends React.Component {
  render () {
    return (
      <Text style={styles.content}>
        {this.props.content}
      </Text>
    )
  }
}

// // Prop type warnings
// TabTourInfo.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// TabTourInfo.defaultProps = {
//   someSetting: false
// }
