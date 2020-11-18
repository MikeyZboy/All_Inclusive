import React, { Component } from 'react'
import TextInput from '../components/TextInput'
//import { } from '../services/FriendService'
import { __RegisterUser } from '../services/UserService' 

export default class CreateFriend extends Component {
    constructor(){
        super()
        this.state = {
            user: {
                name: '',
                email: '',
                password_digest: null
            }
        }
    }

handleChange = ({ target }) => {
    this.setState ({ [target.name]: target.value })
}

handleSubmit = async (e, formData) => {
    e.preventDefault()
    try{
        const newFriend = await __RegisterUser(formData)
        console.log(newFriend)
        // newFriend.save()
    }catch (error) {
        throw error
    }
}


//handleClick = async () => {}
//may not be necessary

render(){
    const { friend } = this.state
    return(
        <div className="signin flex-col">
            <form className="" onSubmit={this.handleSubmit}>
                <TextInput
                placeholder="Friend's Name"
                name="name"
                value={friend.name}
                onChange={this.handleChange}
                />
                <TextInput
                placeholder="Friend's Email"
                name="email"
                value={friend.email}
                onChange={this.handleChange}
                />
            </form>
        </div>
    )
}










}