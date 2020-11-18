import Router from '../../../routes/UserRouter'
import ApiClient from './ApiClient'
// think i need an AddFriend and RemoveFriend function for Friends.js...


export const __InviteUser = async (formData) => {
    try {
        const res = await ApiClient.post(`/friends/invite`)
    }
}


<-- look at UserService for guidance...