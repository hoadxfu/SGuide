import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  tourRequest: ['data'],
  tourSuccess: ['tour'],
  tourFailure: null
})

export const TourTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  fetching: null,
  tour: null,
  error: null
})

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, { data }) =>
  state.merge({ fetching: true, data, tour: null })

// successful api lookup
export const success = (state, action) => {
  const { tour } = action
  return state.merge({ fetching: false, error: null, tour })
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true, tour: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.TOUR_REQUEST]: request,
  [Types.TOUR_SUCCESS]: success,
  [Types.TOUR_FAILURE]: failure
})
