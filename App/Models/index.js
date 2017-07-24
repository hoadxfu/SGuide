import Realm from 'realm'

import TourModel from './TourModel'
import PlaceModel from './PlaceModel'

const realm = new Realm({
  schema: [PlaceModel, TourModel],
  schemaVersion: 4
  // migration: (oldRealm, newRealm) => {
  //   oldRealm.deleteAll()
  // }
})

export default realm
