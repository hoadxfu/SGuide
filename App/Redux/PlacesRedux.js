import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  dataChanged: ['data']
})
// for testing
export const GithubTypes = Types

// action creators
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  sight: [
    { title: 'Alaska', img: 'https://unsplash.it/800/600/?random', rate: 4.5, rateNumber: 131 },
    { title: 'Alaska', img: 'https://unsplash.it/800/600/?random', rate: 4.5, rateNumber: 131 },
    { title: 'Alaska', img: 'https://unsplash.it/800/600/?random', rate: 4.5, rateNumber: 131 },
    { title: 'Alaska', img: 'https://unsplash.it/800/600/?random', rate: 4.5, rateNumber: 131 },
    { title: 'Alaska', img: 'https://unsplash.it/800/600/?random', rate: 4.5, rateNumber: 131 },
    { title: 'Alaska', img: 'https://unsplash.it/800/600/?random', rate: 4.5, rateNumber: 131 },
    { title: 'Alaska', img: 'https://unsplash.it/800/600/?random', rate: 4.5, rateNumber: 131 }
  ],
  food: [
    { title: 'Food', img: 'https://unsplash.it/800/600/?random', rate: 3, rateNumber: 72 },
    { title: 'Food', img: 'https://unsplash.it/800/600/?random', rate: 3, rateNumber: 72 },
    { title: 'Food', img: 'https://unsplash.it/800/600/?random', rate: 3, rateNumber: 72 },
    { title: 'Food', img: 'https://unsplash.it/800/600/?random', rate: 3, rateNumber: 72 },
    { title: 'Food', img: 'https://unsplash.it/800/600/?random', rate: 3, rateNumber: 72 },
    { title: 'Food', img: 'https://unsplash.it/800/600/?random', rate: 3, rateNumber: 72 },
    { title: 'Food', img: 'https://unsplash.it/800/600/?random', rate: 3, rateNumber: 72 }
  ],
  play: [
    { title: 'Playground', img: 'https://unsplash.it/800/600/?random', rate: 5, rateNumber: 21 },
    { title: 'Playground', img: 'https://unsplash.it/800/600/?random', rate: 5, rateNumber: 21 },
    { title: 'Playground', img: 'https://unsplash.it/800/600/?random', rate: 5, rateNumber: 21 },
    { title: 'Playground', img: 'https://unsplash.it/800/600/?random', rate: 5, rateNumber: 21 },
    { title: 'Playground', img: 'https://unsplash.it/800/600/?random', rate: 5, rateNumber: 21 },
    { title: 'Playground', img: 'https://unsplash.it/800/600/?random', rate: 5, rateNumber: 21 },
    { title: 'Playground', img: 'https://unsplash.it/800/600/?random', rate: 5, rateNumber: 21 }
  ]
})

/* ------------- Reducers ------------- */
// data changed event handler when receive data
export const dataChanged = (state, action) => {
  const { data } = action
  const { sight, food, play } = data
  return state.merge({ sight, food, play })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.DATA_CHANGED]: dataChanged
})
