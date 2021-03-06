import ApiClient from './ApiClient'

export const __GetPlaces = async (page, limit) => {
    try { 
        const res = await ApiClient.get(`/places/all`)
        return res.data
    } catch (error) {
        throw error
    }
}

export const __GetPlaceById = async (place_id) => {
    try {
        const res = await ApiClient.get(`/places/${place_id}`)
        return res.data
    } catch (error) {
        throw error
    }
}