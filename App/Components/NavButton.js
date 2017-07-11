import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import styles from './Styles/NavButtonStyle'
import { Metrics } from '../Themes'

export default class NavButton extends React.Component {
  render () {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={this.props.onPress}>
        <Icon name={this.props.icon} size={Metrics.icons.medium} style={styles.icon} />
      </TouchableOpacity>
    )
  }
}

// // Prop type warnings
// NavButton.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// NavButton.defaultProps = {
//   someSetting: false
// }
