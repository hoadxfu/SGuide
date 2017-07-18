import React from 'react'

// Component from native base
import {
  Header,
  Left,
  Body,
  Title,
  Right
} from 'native-base'

// import styles from './Styles/NavigationBarStyle'

export default class NavigationBar extends React.Component {
  render () {
    return (
      <Header hasTabs={this.props.hasTabs}>
        <Left>
          {this.props.buttonLeft}
        </Left>
        <Body style={{flex: 4}}>
          <Title>{this.props.title}</Title>
        </Body>
        <Right>
          {this.props.buttonRight}
        </Right>
      </Header>
    )
  }
}

// // Prop type warnings
// NavigationBar.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// NavigationBar.defaultProps = {
//   someSetting: false
// }
