import React from 'react'
import { View, Text as TextRA } from 'react-native'
import {
  Item,
  Input,
  Button,
  List,
  ListItem,
  Thumbnail,
  Body,
  Text
} from 'native-base'
import Icon from 'react-native-vector-icons/Ionicons'
import styles from './Styles/TabTourReviewStyle'

export default class TabTourReview extends React.Component {
  render () {
    return (
      <View style={styles.content}>
        <TextRA style={styles.title}>Please give a review!</TextRA>
        <View style={styles.stars}>
          <Icon name='ios-star' style={styles.star} />
          <Icon name='ios-star' style={styles.star} />
          <Icon name='ios-star' style={styles.star} />
          <Icon name='ios-star-outline' style={styles.star} />
          <Icon name='ios-star-outline' style={styles.star} />
        </View>
        <Item underline>
          <Input placeholder='Name' />
        </Item>
        <Item underline>
          <Input placeholder='Your comment' />
        </Item>
        <Button block>
          <Text>Send</Text>
        </Button>
        <TextRA style={styles.commentTitle}>Comment List</TextRA>
        <List>
          <ListItem>
            <Thumbnail square size={80} source={require('../Images/launch-icon.png')} />
            <Body>
              <Text>Sankhadeep</Text>
              <Text note>Its time to build a difference . .</Text>
            </Body>
          </ListItem>
          <ListItem>
            <Thumbnail square size={80} source={require('../Images/launch-icon.png')} />
            <Body>
              <Text>Sankhadeep</Text>
              <Text note>Its time to build a difference . .</Text>
            </Body>
          </ListItem>
          <ListItem>
            <Thumbnail square size={80} source={require('../Images/launch-icon.png')} />
            <Body>
              <Text>Sankhadeep</Text>
              <Text note>Its time to build a difference . .</Text>
            </Body>
          </ListItem>
          <ListItem>
            <Thumbnail square size={80} source={require('../Images/launch-icon.png')} />
            <Body>
              <Text>Sankhadeep</Text>
              <Text note>Its time to build a difference . .</Text>
            </Body>
          </ListItem>
          <ListItem>
            <Thumbnail square size={80} source={require('../Images/launch-icon.png')} />
            <Body>
              <Text>Sankhadeep</Text>
              <Text note>Its time to build a difference . .</Text>
            </Body>
          </ListItem>
          <ListItem>
            <Thumbnail square size={80} source={require('../Images/launch-icon.png')} />
            <Body>
              <Text>Sankhadeep</Text>
              <Text note>Its time to build a difference . .</Text>
            </Body>
          </ListItem>
          <ListItem>
            <Thumbnail square size={80} source={require('../Images/launch-icon.png')} />
            <Body>
              <Text>Sankhadeep</Text>
              <Text note>Its time to build a difference . .</Text>
            </Body>
          </ListItem>
        </List>
      </View>
    )
  }
}

// // Prop type warnings
// TabTourReview.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// TabTourReview.defaultProps = {
//   someSetting: false
// }
