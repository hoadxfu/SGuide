import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  placeListRealmRequest: null,
  // getPlaceListByTourId: ['tourId'],
  placeListRealmSuccess: ['placeList'],
  placeListRealmFailure: null
})

export const PlaceListRealmTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  fetching: null,
  places: null,
  error: null
})

/* ------------- Reducers ------------- */
// getPlaceList by Tour Id
export const getPlaceListByTourId = (state, { tourId }) =>
  state.merge({ fetching: true, data: tourId, placeList: null })

// request the data from an api
export const request = (state, { data }) =>
  state.merge({ fetching: true, data, placeList: null })

// successful api lookup
export const success = (state, action) => {
  const { placeList } = action
  console.log('====================================')
  console.log('place list realm success')
  console.log(action)
  console.log(placeList)
  console.log('====================================')
  return state.merge({ fetching: false, error: null, placeList })
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true, placeList: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  //  [Types.GET_PLACE_LIST_BY_TOUR_ID]: getPlaceListByTourId,
  [Types.PLACE_LIST_REALM_REQUEST]: request,
  [Types.PLACE_LIST_REALM_SUCCESS]: success,
  [Types.PLACE_LIST_REALM_FAILURE]: failure
})
