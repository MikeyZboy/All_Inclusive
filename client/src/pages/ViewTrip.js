import React, { Component } from 'react'
import { __GetTrip } from '../services/TripService'
import UpdateTrip from './UpdateTrip'

export default class ViewTrip extends Component {
    constructor() {
        super()
        this.state= {
            trip: null
        }
    }

    componentDidMount() {
        console.log('ViewTrip:',this.state)
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