import React, { Component } from 'react'
import { __GetTrips } from '../services/TripService'
import Card from '../components/Card'
import '../styles/discover.css'

export default class Discover extends Component {
    constructor() {
        super()
        this.state = {
            trips: []
        }
    }

    componentDidMount() {
        this.loadTrips()
    }

    loadTrips = async () => {
        const trips = await __GetTrips()
        console.log(trips)
        this.setState({ trips: trips })
    }

    render(){
        return(
            <div className="discover wrapper">
                <div className="content-wrapper">
                    {this.state.trips.map((trip) => {
                        return (
                        <Card key={trip.id}>
                            <div className="mask flex-col discover">
                                <div className="flex-col">
                                        <div className="card-content">
                                        <h3>{trip.name}</h3>
                                        <p>...</p>
                                        </div>
                                        <div className="card-content-top flex-row">
                                        <div className="stats">
                                            <p>Comments</p>
                                            <p>{trip.reviews.length}</p>
                                        </div>
                                        <div className="stats">
                                        <p>Activities</p>
                                        <p>{trip.activities.length}</p>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            <img src={trip.image_url} alt="location_image" />
                        </Card>
                        )
                    })}
                </div>
            </div>
        )
    }


}
