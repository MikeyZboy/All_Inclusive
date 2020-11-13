import ApiClient from './ApiClient'

export const __GetTrips = async (page, limit) => {
    try {
        const res = await ApiClient.get(`/trips?page${page || 1}&limit=${limit || 10}`)
        return res.data
    } catch (error) {
        throw error
    }
}

export const __GetTrip = async (trip_id) => {
    try {
        const res = await ApiClient.get(`/trips/${trip_id}`)
        return res.data
    } catch (error) {
        throw error
    }
}

export const __UpdateTrip = async (formData, trip_id) => {
    try {
        const res = await ApiClient.put(`/trips/${trip_id}`, formData)
        return res.data
    } catch (error){
        throw error
    }
}

export const __UploadTrip = async (formData, user_id) => {
    try {
        const res = await ApiClient.post(`/trips/${user_id}/?active=true`, formData)
        return res.data
    } catch (error){
        throw error
    }
}

export const __DeleteTrip = async (trip_id) => {
    try {
        const res = await ApiClient.delete(`/trips/delete/${trip_id}`)
        return res.send({msg: `trip deleted`})
    } catch (error){
        throw error
    }
}