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
import APIToursActions from '../Redux/APIToursRedux'

export function * getAPITours (api, action) {
  const { data } = action
  // make the call to the api
  const tourResponse = yield call(api.getTourList, data)

  // success?
  if (tourResponse.ok) {
    var tours = path(['data'], tourResponse)

    // fetch places of a tour
    for (let tour in tours) {
      if (tours.hasOwnProperty(tour)) {
        var element = tours[tour]
        const placeResponse = yield call(api.getPlaceList, element.tour_id)
        if (placeResponse.ok) {
          const places = path(['data'], placeResponse)
          tours[tour].places = places
        }
      }
    }

    yield put(APIToursActions.apiToursSuccess(tours))
  } else {
    yield put(APIToursActions.apiToursFailure())
  }
}
