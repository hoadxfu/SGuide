export default (payload) => {
  const INITIAL_PLACE = {
    id: null,
    title: null,
    thumbnail: 'https://unsplash.it/200/300/?random',
    audio: '',
    description: null,
    latitude: null,
    longitude: null
  }
  console.log(payload)
  console.log(typeof payload)
  payload = payload.filter(
    (place) => {
      return (place.place_latitude !== '' && place.place_longitude !== '')
    })

  return (payload.map((place, index, array) => {
    return {
      ...INITIAL_PLACE,
      id: place.place_id,
      title: place.place_name,
      // thumbnail: place.place_album,
      description: place.place_description,
      audio: '',
      latitude: Number.parseFloat(place.place_latitude),
      longitude: Number.parseFloat(place.place_longitude)
    }
  }))
}
