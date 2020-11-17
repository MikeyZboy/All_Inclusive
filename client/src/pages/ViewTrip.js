import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { __GetTrip } from '../services/TripService'
import Card from '../components/Card'

export default class ViewTrip extends Component {
    constructor() {
        super()
        this.state= {
            trip: null
        }
    }

    componentDidMount() {
        console.log(this.state)
    }

    getTrip = async () => {
        try {
            const trip = await __GetTrip(this.props.match.params.trip_id)
            this.setState({ trip })
        } catch (error) {
            console.log(error)
        }
    } 

    render() {
        const { trip } = this.state
        if (this.state.trip) {
            return(
                <div className="">
                    <div className="">
                            <div className="">
                                <div className="">
                                    <img src={trip.image_url} alt="post"/>
                                </div>
                            </div>
                        <div className="">
                            <div className="card">
                                    <Card />    
                                <div className="">
                                    <h2>{trip.name}</h2>
                                </div>
                            <div className="">
                                <div>
                                    <p>Hotels</p> 
                                    <p>{trip.hotels.length}</p>
                                </div>
                            </div>
                            <div className="">
                                {trip.reviews.length ? (
                                    trip.reviews.map((review) => (
                                        <li className=""
                                        key={review._id}>
                                            <p>
                                                <Link>{review.user_id.name}</Link>
                                            </p>
                                            <p>{review.review}</p>
                                        </li>
                                    ))
                                ) : ( 
                                    <h3>No Reviews</h3>
                                )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        return <h3>Why am I at ViewTrip.js?...</h3>
    }
}