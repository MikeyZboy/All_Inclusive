const { Place } = require('../db/schema')

const GetPlace = async (req, res) => {
    const place = await Place.findById(req.params.place_id).select('name description image_url')
    res.send(place)
}

const AllPlaces = async (req, res) => {
    const { page, limit } = req.body
    const offset = page === '1' ? '0' : Math.floor(parseInt(page) * parseInt(limit))
    const places = await Trip.find()
        .limit(parseInt(limit))
        .skip(offset)
        .sort({ popularity_rating: 'desc' })
    res.send({ results: places.length, places })
}

module.exports = {
    GetPlace,
    AllPlaces
}