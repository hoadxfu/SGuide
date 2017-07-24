import Realm from 'realm'

export default class PlaceModel extends Realm.Object {}

PlaceModel.schema = {
  name: 'Place',
  primaryKey: 'id',
  properties: {
    id: 'string',
    name: 'string',
    description: 'string',
    website: { type: 'string', optional: true },
    phone: { type: 'string', optional: true },
    latitude: { type: 'double', optional: true },
    longitude: { type: 'double', optional: true },
    album: { type: 'string', optional: true },
    audio: { type: 'string', optional: true },
    video: { type: 'string', optional: true },
    note: { type: 'string', optional: true }
  }
}
