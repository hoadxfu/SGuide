import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import destruct from '../Transforms/DestructPlacesFromResponse'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  placesRequest: ['data'],
  placesByTourRequest: ['data'],
  placesSuccess: ['payload'],
  placesFailure: null
})

export const PlacesTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  fetching: null,
  payload: null,
  error: null
})

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, { data }) => {
  console.log('Making request, data=')
  console.log(data)
  return state.merge({ fetching: true, data, payload: null })
}

// successful api lookup
export const success = (state, action) => {
  const payload = destruct(action.payload)

  console.log('fetch success, state.payload= ')
  console.log(payload)
  return state.merge({ fetching: false, error: null, payload })
}

// Something went wrong somewhere.
export const failure = state => {
  console.log('fetch FAILDED')
  return state.merge({ fetching: false, error: true, payload: null })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.PLACES_REQUEST]: request,
  [Types.PLACES_BY_TOUR_REQUEST]: request,
  [Types.PLACES_SUCCESS]: success,
  [Types.PLACES_FAILURE]: failure
})
