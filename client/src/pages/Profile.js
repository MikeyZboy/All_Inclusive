import React, { Component } from 'react'
import { __DeleteTrip } from '../services/TripService'
import { __GetProfile } from '../services/UserService'
import Card from '../components/Card'

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

    deleteTrip = async (id) => {
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
        <div>
          {this.state.trips.length ? (
            <div className="post-content wrapper flex-row">
              {this.state.trips.map((trip) => (
                <div key={trip._id}>
                  <Card
                    onClick={() =>
                      this.props.history.push(`/trips/${trip._id}`)
                    }
                  >
                    <div className="mask flex-col">
                      <div className="card-content">
                        <h3>{trip.title}</h3>
                        <p>{trip.description}</p>
                      </div>
                    </div>
                    <img src={trip.image_url} alt="" />
                  </Card>
                  <div className="flex-row button-wrapper">
                    <button
                      onClick={() =>
                        this.props.history.push(`/trips/update/${trip._id}`)
                      }
                    >
                      Edit
                    </button>
                    <button onClick={() => this.__DeleteTrip(trip._id)}>
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="span message">No Posts</div>
          )}
        </div>
      </div>
        )
    }
}