import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { __GetTrip } from '../services/TripService'
import Card from '../components/Card'
import '../styles/postview.css'

export default class ViewTrip extends Component {
    constructor() {
        super()
        this.state= {
            trip: null
        }
    }

    componentDidMount() {

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
        if (this.state.post) {
            return(
                <div className="trips detail">
                    <div className="content-wrapper flex-row">
                            <div className="left-content col-1">
                                <div className="card image-wrapper">
                                    <img src={trip.image_url} alt="post"/>
                                </div>
                            </div>
                        <div className="right-content col-2 flex-col">
                            <div className="card">
                                    <Card />    
                                <div className="card card-content">
                                    <h2>{trip.name}</h2>
                                </div>
                            <div className="stats flex-row">
                                <div>
                                    <p>Comments</p> 
                                    <p>{trip.reviews.length}</p>
                                </div>
                            </div>
                            <div className="comments">
                                {trip.reviews.length ? (
                                    trip.reviews.map((review) => (
                                        <li className="comment=item"
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
        return <h3>Loading...</h3>
    }
}