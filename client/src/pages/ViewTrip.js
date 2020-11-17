import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { __GetTrip } from '../services/TripService'
import Card from '../components/Card'
import UpdateTrip from './UpdateTrip'

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
            return(
                <div className="signup flex-col">
                    <UpdateTrip {...this.props} />                    
                </div>
            )
    }
}