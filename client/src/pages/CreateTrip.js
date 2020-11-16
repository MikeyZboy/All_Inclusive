import React, { Component } from 'react'
import TextInput from '../components/TextInput'
import { __UploadTrip } from '../services/TripService'

export default class CreateTrip extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            trip_start: '',
            trip_end: '',
            hotel: '',
            activity: '',
            friend: ''
        }
    }

handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
}

handleSubmit = async (e) => {
    e.preventDefault()
    try {
        await __UploadTrip(this.state, this.props.currentUser._id)
        this.props.history.push(`/create`)
        console.log(`${this.props.currentUser._id} created a new trip`)
    } catch (error) {
        console.log(error)
    }
}

handleClick = async (e) => {

}

render(){
    const { name, trip_start, trip_end, friend, hotel, activity } = this.state
    return(
        <div className="signin flex-col">
            <form className="" onSubmit={this.handleSubmit}>
                <TextInput 
                placeholder="Where are you going?"
                name="name"
                value={name}
                onChange={this.handleChange}
                />
                <TextInput
                placeholder="Trip Start (YYYY-MM-DAY)"
                name="trip_start"
                value={trip_start}
                onChange={this.handleChange}
                />
                <TextInput
                placeholder="Trip End (YYYY-MM-DAY)"
                name="trip_end"
                value={trip_end}
                onChange={this.handleChange}
                />
                <TextInput 
                placeholder="Where will you stay?"
                name="hotel"
                value={hotel}
                onChange={this.handleChange}
                />
                <TextInput 
                placeholder="What do you want to do?"
                name="activity"
                value={activity}
                onChange={this.handleChange}
                />
                <TextInput 
                placeholder="Who do you want to invite?"
                name="friend"
                value={friend}
                onChange={this.handleChange}
                />
            <button onSubmit={this.handleSubmit}>Create Trip!</button>
            </form>
        </div>
    )
}



}