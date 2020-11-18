import React, { Component } from 'react'
import TextInput from '../components/TextInput'
import { __GetTrip, __UpdateTrip } from '../services/TripService'

export default class UpdateTrip extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            trip_start: Date,
            trip_end: Date,
            activities: [],
            friends: []
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
            friends: trip.friends
        })
        } catch (error) {
        console.log(error)
        }
    }

    handleChange = ({ target }) => {
        console.log(target.name, target.value)
        this.setState({ [target.name]: target.value })
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await __UpdateTrip(this.state, this.props.match.params.trip_id)
            console.log('await__UpdateTrip',this.props.match.params.trip_id)
            this.props.history.push('/profile')
        } catch (error) {
            throw error
        }
    }

    render(){
        const { name, trip_start, trip_end, activities, friends } = this.state
        return(
            <div className="signup flex-col">
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
                    <button>Update Trip</button>
                    {/* {this.state.formError ? <p>Update Trip Data Error - Try Again</p> : <p></p>} */}
                </form>
            </div>
        )
    }


}

// onClick={()=> this.props.history.push(`/profile`)}