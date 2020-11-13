import ApiClient from './ApiClient'

export const __GetProfile = async (user_id) => {
    try {
        const res = await ApiClient.get(`/users/${user_id}`)
        console.log(res.data)
        return res.data
    } catch (error){
        throw error
    }
}

export const __RegisterUser = async (formData) => {
    try {
        const res = await ApiClient.post(`/users/register`, formData)
        return res.data
    } catch (error) {
        throw error
    }
}

export const __LoginUser = async (userData) => {
    try {
        const res = await ApiClient.post(`users/login`, userData)
        return res.data
    } catch (error) {
        throw error
    }
}

export const __CheckSession = async () => {
    try {
        const res = await ApiClient.get(`/users/refresh/session`)
        return res.data
    } catch (error){
        throw error
    }
}

