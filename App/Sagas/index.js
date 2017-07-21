import { takeLatest, takeEvery } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

// load sguide api
import SGuideAPI from '../Services/SGuideAPI'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { GithubTypes } from '../Redux/GithubRedux'
import { TourListTypes } from '../Redux/TourListRedux'
import { PlaceListTypes } from '../Redux/PlaceListRedux'
import { TourTypes } from '../Redux/TourRedux'
import { TourListRealmTypes } from '../Redux/TourListRealmRedux'
import { TourRealmTypes } from '../Redux/TourRealmRedux'
import { APIToursTypes } from '../Redux/APIToursRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { getUserAvatar } from './GithubSagas'
import { getTourList } from './TourListSagas'
import { getPlaceList } from './PlaceListSagas'
import { getTour } from './TourSagas'
import { getTourListRealm } from './TourListRealmSagas'
import { getTourRealm } from './TourRealmSagas'
import { getAPITours } from './APIToursSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create()
const sguideapi = SGuideAPI.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield [
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),

    // some sagas receive extra parameters in addition to an action
    takeLatest(GithubTypes.USER_REQUEST, getUserAvatar, api),

    // get tour list from api
    takeEvery(TourListTypes.TOUR_LIST_REQUEST, getTourList, sguideapi),

    // get place list from api
    takeEvery(PlaceListTypes.PLACE_LIST_REQUEST, getPlaceList, sguideapi),

    // get tour
    takeLatest(TourTypes.TOUR_REQUEST, getTour, sguideapi),

    // get tour list from realm
    takeEvery(TourListRealmTypes.TOUR_LIST_REALM_REQUEST, getTourListRealm),

    // get tour from realm
    takeLatest(TourRealmTypes.TOUR_REALM_REQUEST, getTourRealm),

    // get api tours (tours and places)
    takeEvery(APIToursTypes.API_TOURS_REQUEST, getAPITours, sguideapi)
  ]
}
