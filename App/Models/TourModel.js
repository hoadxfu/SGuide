import Realm from 'realm'

export default class TourModel extends Realm.Object {}

TourModel.schema = {
  name: 'Tour',
  primaryKey: 'tour_id',
  properties: {
    tour_id: 'string',
    tour_name: 'string',
    tour_description: 'string',
    tour_audio: { type: 'string', optional: true },
    tour_video: { type: 'string', optional: true },
    tour_album: { type: 'string', optional: true },
    tour_time: { type: 'string', optional: true },
    tour_distance: { type: 'string', optional: true },
    places: { type: 'list', objectType: 'Place' }
  }
}
