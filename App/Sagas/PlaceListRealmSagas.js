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
import PlaceListRealmActions from '../Redux/PlaceListRealmRedux'

// realm db
import realm from '../Models'

export function * getPlaceListRealm (api, action) {
  // make the call to the api
  let places = realm.objects('Place')

  // success?
  if (places) {
    // You might need to change the response here - do this with a 'transform',
    // located in ../Transforms/. Otherwise, just pass the data back from the api.
    yield put(PlaceListRealmActions.placeListRealmSuccess(places))
  } else {
    yield put(PlaceListRealmActions.placeListRealmFailure())
  }
}
