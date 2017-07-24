import React from 'react'
import { View, Text, ListView, Image, TouchableOpacity } from 'react-native'
// import {Button } from 'native-base'
import { connect } from 'react-redux'

// For empty lists
// import AlertMessage from '../Components/AlertMessage'

// Styles
import styles from './Styles/BottomPlaceListStyle'

class BottomPlaceList extends React.Component {
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
    const locations = [
      {
        title: 'Location A',
        thumbnail: 'https://unsplash.it/200/300/?random',
        description: 'abc xyz',
        audio: '',
        latitude: 21.041385,
        longitude: 105.816966
      },
      {
        title: 'Location B',
        thumbnail: 'https://unsplash.it/200/300/?random',
        description: 'abc xyz',
        audio: '',
        latitude: 21.023581,
        longitude: 105.823987
      }, {
        title: 'Location C',
        thumbnail: 'https://unsplash.it/200/300/?random',
        description: 'abc xyz',
        audio: '',
        latitude: 21.003581,
        longitude: 105.793987
      }, {
        title: 'Location D',
        thumbnail: 'https://unsplash.it/200/300/?random',
        description: 'abc xyz',
        audio: '',
        latitude: 21.063581,
        longitude: 105.89987
      }, {
        title: 'Location D',
        thumbnail: 'https://unsplash.it/200/300/?random',
        description: 'abc xyz',
        audio: '',
        latitude: 21.063581,
        longitude: 105.89987
      }, {
        title: 'Location D',
        thumbnail: 'https://unsplash.it/200/300/?random',
        description: 'abc xyz',
        audio: '',
        latitude: 21.063581,
        longitude: 105.89987
      }, {
        title: 'Location D',
        thumbnail: 'https://unsplash.it/200/300/?random',
        description: 'abc xyz',
        audio: '',
        latitude: 21.063581,
        longitude: 105.89987
      }
    ]
    const dataObjects = locations

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
    // console.log(rowData)
    return (
      <View style={styles.row}>
        {/* source={{uri: rowData.thumbnail}}  */}

        <Image
          style={styles.thumbnail}
          source={{ uri: rowData.thumbnail }}
        />

      </View>
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

  // Render a footer.

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>Popular places</Text>
          <TouchableOpacity oPress={() => {}} >
            <Text style={styles.buttonText}>SHOW MORE</Text>
          </TouchableOpacity >

        </View>
        <ListView
          horizontal
          contentContainerStyle={styles.listContent}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
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

export default connect(mapStateToProps, mapDispatchToProps)(BottomPlaceList)
