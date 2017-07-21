import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  apiToursRequest: ['data'],
  apiToursSuccess: ['tours'],
  apiToursFailure: null
})

export const APIToursTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  fetching: null,
  tours: null,
  error: null
})

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, { data }) =>
  state.merge({ fetching: true, data, tours: null })

// successful api lookup
export const success = (state, action) => {
  const { tours } = action
  return state.merge({ fetching: false, error: null, tours })
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true, tours: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.API_TOURS_REQUEST]: request,
  [Types.API_TOURS_SUCCESS]: success,
  [Types.API_TOURS_FAILURE]: failure
})
