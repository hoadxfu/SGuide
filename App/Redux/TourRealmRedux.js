import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  tourRealmRequest: ['query'],
  tourRealmSuccess: ['tour'],
  tourRealmFailure: null
})

export const TourRealmTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  query: null,
  fetching: null,
  tour: null,
  error: null
})

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, { query }) =>
  state.merge({ fetching: true, query, tour: null })

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
  [Types.TOUR_REALM_REQUEST]: request,
  [Types.TOUR_REALM_SUCCESS]: success,
  [Types.TOUR_REALM_FAILURE]: failure
})
