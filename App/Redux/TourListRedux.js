import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  tourListRequest: ['data'],
  tourListSuccess: ['tourList'],
  tourListFailure: null
})

export const TourListTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  fetching: null,
  tourList: null,
  error: null
})

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, { data }) =>
  state.merge({ fetching: true, data, tourList: null })

// successful api lookup
export const success = (state, action) => {
  const { tourList } = action
  return state.merge({ fetching: false, error: null, tourList })
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true, tourList: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.TOUR_LIST_REQUEST]: request,
  [Types.TOUR_LIST_SUCCESS]: success,
  [Types.TOUR_LIST_FAILURE]: failure
})
