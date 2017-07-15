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
    tourList: require('./TourListRedux').reducer,
    tour: require('./TourRedux').reducer
  })

  return configureStore(rootReducer, rootSaga)
}
