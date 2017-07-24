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
import TourRealmActions from '../Redux/TourRealmRedux'

// realm db
import realm from '../Models'

export function * getTourRealm (action) {
  const { query } = action
  // make the call to the api
  let tours = realm.objects('Tour')
  let tour = tours.filtered('tour_id = "' + query + '"')

  console.log('====================================')
  console.log(tour[0])
  console.log('====================================')

  tour = tour[0]
  tour = {...tour, places: tour.places.slice()}

  // let places = tour.places

  // convert from realm results to array
  // tour.places = tour.places.map(x => Object.assign({}, x))

  // success?
  if (tour) {
    // You might need to change the response here - do this with a 'transform',
    // located in ../Transforms/. Otherwise, just pass the data back from the api.
    yield put(TourRealmActions.tourRealmSuccess(tour))
  } else {
    yield put(TourRealmActions.tourRealmFailure())
  }
}
