import React, { Component } from 'react'
import { __DeleteTrip } from ''
import { __GetProfile } from ''




export default class Profile extends Component {
    constructor() {
        super()
        this.state = {
            tripFetchError: false,
            trips: []
        }
    }

    componentDidMount() {
        this.getTrips()
    }

    getTrips = async () => {
        try {
            const profileData = await __GetProfile(this.props.currentUser._id)
            this.setState({ trips: profileData.trips })
        } catch (error) {
            this.setState({ tripFetchError: true })
        }
    }

    deleteTrip = async () => {
        try {
            const tripsToKeep = this.state.trips.filter((trip) => trip._id !== id)
            this.setState({ trips: tripsToKeep })
            await __DeleteTrip(id)
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return(
            <div className="profile">
                <div></div>
            </div>
        )
    }
}