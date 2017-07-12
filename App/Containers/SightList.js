import React from 'react'
import { View, Text, ListView, Image } from 'react-native'
import { connect } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient'
import StarRating from 'react-native-star-rating'
// For empty lists
// import AlertMessage from '../Components/AlertMessage'

// Styles
import styles from './Styles/SightListStyle'

class SightList extends React.Component {
  state: {
    dataSource: Object
  }

  constructor (props) {
    super(props)
    /* ***********************************************************
    * STEP 1
    * This is an array of objects with the properties you desire
    * Usually this should come from Redux mapStateToProps
    *************************************************************/
    const dataObjects = [
      { title: 'Chatuchak Market', img: 'https://unsplash.it/800/400/?random', rate: 4.5 },
      { title: 'National Peace Memoriessssssss and fucking long', img: 'https://unsplash.it/800/400/?random', rate: 5 },
      { title: 'Chatuchak Market', img: 'https://unsplash.it/800/400/?random', rate: 5 },
      { title: 'Chatuchak Market', img: 'https://unsplash.it/800/400/?random', rate: 3 },
      { title: 'Chatuchak Market', img: 'https://unsplash.it/800/400/?random', rate: 5 },
      { title: 'Chatuchak Market', img: 'https://unsplash.it/800/400/?random', rate: 5 },
      { title: 'Chatuchak Market', img: 'https://unsplash.it/800/400/?random', rate: 5 },
      { title: 'Chatuchak Market', img: 'https://unsplash.it/800/400/?random', rate: 5 }

    ]

    /* ***********************************************************
    * STEP 2
    * Teach datasource how to detect if rows are different
    * Make this function fast!  Perhaps something like:
    *   (r1, r2) => r1.id !== r2.id}
    *************************************************************/
    const rowHasChanged = (r1, r2) => r1 !== r2

    // DataSource configured
    const ds = new ListView.DataSource({ rowHasChanged })

    // Datasource is always in state
    this.state = {
      dataSource: ds.cloneWithRows(dataObjects)
    }
  }

  /* ***********************************************************
  * STEP 3
  * `renderRow` function -How each cell/row should be rendered
  * It's our best practice to place a single component here:
  *
  * e.g.
    return <MyCustomCell title={rowData.title} description={rowData.description} />
  *************************************************************/
  renderRow (rowData) {
    return (
      <View style={styles.row}>
        <Image source={{ uri: rowData.img }}
          style={styles.backgroundImage} resizeMode='stretch' />

        <LinearGradient colors={['transparent', 'rgba(0, 0, 0, 0.6)']}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 0, y: 1 }}
          location={[0, 0.8]}
          style={[styles.gradient_container]}
        >
          <Text
            numberOfLines={1}
            style={styles.title}>{rowData.title}</Text>
          <View style={styles.starRate}>
            <StarRating
              maxStars={5}
              rating={rowData.rate}
              starColor='white'
              emptyStarColor='white'
              starSize={15}
            />
          </View>
        </LinearGradient>

      </View>
    )
  }
  renderSeparator (sectionID, rowID, adjacentRowHighlighted) {
    return (
      <View style={{
        flex: 1,
        height: 1,
        backgroundColor: '#fff'
      }} />
    )
  }

  /* ***********************************************************
  * STEP 4
  * If your datasource is driven by Redux, you'll need to
  * reset it when new data arrives.
  * DO NOT! place `cloneWithRows` inside of render, since render
  * is called very often, and should remain fast!  Just replace
  * state's datasource on newProps.
  *
  * e.g.
    componentWillReceiveProps (newProps) {
      if (newProps.someData) {
        this.setState(prevState => ({
          dataSource: prevState.dataSource.cloneWithRows(newProps.someData)
        }))
      }
    }
  *************************************************************/

  // Used for friendly AlertMessage
  // returns true if the dataSource is empty
  noRowData () {
    return this.state.dataSource.getRowCount() === 0
  }

  render () {
    return (
      <View style={styles.container}>
        <ListView
          contentContainerStyle={styles.listContent}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          renderSeparator={this.renderSeparator}
          enableEmptySections
          pageSize={15}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // ...redux state to props here
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SightList)
