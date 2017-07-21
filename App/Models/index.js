import Realm from 'realm'

import TourModel from './TourModel'
import PlaceModel from './PlaceModel'

const realm = new Realm({
  schema: [PlaceModel, TourModel],
  schemaVersion: 3
  // migration: (oldRealm, newRealm) => {
  //   newRealm.deleteAll()
  // }
})

export default realm
