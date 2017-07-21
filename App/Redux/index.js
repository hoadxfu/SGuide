import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    nav: require('./NavigationRedux').reducer,
    github: require('./GithubRedux').reducer,
    search: require('./SearchRedux').reducer,
    places: require('./PlacesRedux').reducer,
    tours: require('./APIToursRedux').reducer,
    tourList: require('./TourListRedux').reducer,
    placeList: require('./PlaceListRedux').reducer,
    tourListRealm: require('./TourListRealmRedux').reducer,
    placeListRealm: require('./PlaceListRealmRedux').reducer,
    tourRealm: require('./TourRealmRedux').reducer,
    tour: require('./TourRedux').reducer
  })

  return configureStore(rootReducer, rootSaga)
}
