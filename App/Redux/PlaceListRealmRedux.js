import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  placeListRealmRequest: ['data'],
  placeListRealmSuccess: ['placeList'],
  placeListRealmFailure: null
})

export const PlaceListRealmTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  fetching: null,
  placeList: null,
  error: null
})

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, { data }) =>
  state.merge({ fetching: true, data, placeList: null })

// successful api lookup
export const success = (state, action) => {
  const { placeList } = action
  return state.merge({ fetching: false, error: null, placeList })
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true, placeList: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.PLACE_LIST_REALM_REQUEST]: request,
  [Types.PLACE_LIST_REALM_SUCCESS]: success,
  [Types.PLACE_LIST_REALM_FAILURE]: failure
})
