import Realm from 'realm'

export default class PlaceModel extends Realm.Object {}

PlaceModel.schema = {
  name: 'Place',
  primaryKey: 'place_id',
  properties: {
    place_id: 'string',
    place_name: 'string',
    place_description: 'string',
    place_website: { type: 'string', optional: true },
    place_phone: { type: 'string', optional: true },
    place_latitude: { type: 'string', optional: true },
    place_longitude: { type: 'string', optional: true },
    place_album: { type: 'string', optional: true },
    place_audio: { type: 'string', optional: true },
    place_video: { type: 'string', optional: true },
    place_note: { type: 'string', optional: true }
  }
}
