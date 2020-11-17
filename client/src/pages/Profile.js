import React, { Component } from 'react'
import { __DeleteTrip } from '../services/TripService'
import { __GetProfile } from '../services/UserService'
import Card from '../components/Card'

export default class Profile extends Component {
    constructor() {
        super()
        this.state = {
            trips: [],
            tripFetchError: false
        }
    }

    componentDidMount() {
        // this.setState({ trips: this.currentUser.trips })
        this.getUserDetails(this.currentUser)
        console.log(this.state)
    }

    getUserDetails = async (props) => {
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
            <div className="profile">
              {this.state.trips.map((trip) => (
                <div key={trip._id}>
                  <Card
                    onClick={() =>
                      this.props.history.push(`/trips/${trip._id}`)
                    }
                  >
                    <div className="">
                      <div className="">
                        <h3>{trip.name}</h3>
                      </div>
                    </div>
                  </Card>
                  <div className="">
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
            <div className="">
              <button
                onClick={() =>
                  this.props.history.push(`/trips/create`)
              }
              >Plan your first trip!
              </button>
            </div>
          )}
        </div>
      </div>
        )
    }
}