import Router from '../../../routes/UserRouter'
import ApiClient from './ApiClient'
// think i need an AddFriend and RemoveFriend function for Friends.js...


export const __InviteFriend = async (formData) => {
    try {
        const res = await ApiClient.post(`/friends/invite`, formData)
        return res.data
    } catch (error){
        throw error
    }
}

export const __AddFriendToTrip = async () => {
    try {
        const res = await ApiClient.put(`/friends/${trip_id}`)
        return res.data
    } catch (error) {
        throw error
    }
}

<-- look at UserService for guidance...