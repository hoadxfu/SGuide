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

import { put } from 'redux-saga/effects'
import TourListRealmActions from '../Redux/TourListRealmRedux'

// realm db
import realm from '../Models'

export function * getTourListRealm (action) {
  // make the call to the api
  let tours = realm.objects('Tour')
  console.log('====================================')
  console.log('get tour list realm')
  console.log(tours)
  console.log('====================================')
  tours = tours.map(tour => { return { ...tour, places: tour.places.slice() } })
  // success?
  if (tours) {
    yield put(TourListRealmActions.tourListRealmSuccess(tours))
  } else {
    yield put(TourListRealmActions.tourListRealmFailure())
  }
}
