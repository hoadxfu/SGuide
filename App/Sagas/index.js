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
import { TourTypes } from '../Redux/TourRedux'
import { PlacesTypes } from '../Redux/PlacesRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { getUserAvatar } from './GithubSagas'
import { getTourList } from './TourListSagas'
import { getTour } from './TourSagas'
import { getAllPlaces, getPlacesByTour } from './PlacesSagas'

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

    // get tour
    takeLatest(TourTypes.TOUR_REQUEST, getTour, sguideapi),

    // get All Places
    takeLatest(PlacesTypes.PLACES_REQUEST, getAllPlaces, sguideapi),

    // get Places by tour id
    takeLatest(PlacesTypes.PLACES_BY_TOUR_REQUEST, getPlacesByTour, sguideapi)
  ]
}
