import React, { Component } from 'react'
import TextInput from '../components/TextInput'
import { __GetTrip, __UpdateTrip, __DeleteTrip } from '../services/TripService'

export default class UpdateTrip extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            trip_start: Date,
            trip_end: Date,
            activities: [],
            friends: [],
            reviews: []
        }
    }

    componentDidMount() {
        this.getTrip()
    }

    getTrip = async () => {
        try {
        const trip = await __GetTrip(this.props.match.params.trip_id)
        this.setState({
            name: trip.name,
            trip_start: trip.trip_start,
            trip_end: trip.trip_end,
            activities: trip.activities,
            friends: trip.friends,
            reviews: trip.reviews
        })
        } catch (error) {
        console.log(error)
        }
    }

    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value })
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await __UpdateTrip(this.state, this.props.match.params.trip_id)
            this.props.history.push('/profile')
        } catch (error) {
            console.log(error)
        }
    }

    render(){
        const { name, trip_start, trip_end, activities, friends, reviews } = this.state
        return(
            <div className="upload content">
                <form className="flex-col" onSubmit={this.handleSubmit}>
                    <TextInput 
                    placeholder="Trip Name"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                    />
                    <TextInput
                    placeholder="Trip Start Date"
                    name="trip_start"
                    value={trip_start}
                    onChange={this.handleChange}
                    />
                    <TextInput 
                    placeholder="Trip End Date"
                    name="trip_end"
                    value={trip_end}
                    onChange={this.handleChange}
                    />
                    <TextInput 
                    placeholder="Activities"
                    name="activities"
                    value={activities}
                    onChange={this.handleChange}
                    />
                    <TextInput 
                    placeholder="Friends"
                    name="friends"
                    value={friends}
                    onChange={this.handleChange}
                    />
                    <TextInput 
                    placeholder="Reviews"
                    name="reviews"
                    value={reviews}
                    onChange={this.handleChange}
                    />
                    <button>Update Trip</button>
                </form>
            </div>
        )
    }


}