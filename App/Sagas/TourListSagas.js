/* ***********************************************************
* A short word on how to use this automagically generated file.
* We're often asked in the ignite gitter channel how to connect
* to a to a third party api, so we thought we'd demonstrate - but
* you should know you can use sagas for other flow control too.
*
* Other points:
*  - You'll need to add this saga to sagas/index.js
*  - This template uses the api declared in sagas/index.js, so
*    you'll need to define a constant in that file.
*************************************************************/

import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import TourListActions from '../Redux/TourListRedux'

export function * getTourList (api, action) {
  const { data } = action
  // make the call to the api
  const response = yield call(api.getTourList, data)

  // success?
  if (response.ok) {
    const tourList = path(['data'], response)
    yield put(TourListActions.tourListSuccess(tourList))
  } else {
    yield put(TourListActions.tourListFailure())
  }
}