import React, { Component } from 'react'
import { __GetTrips } from '../services/TripService'
import { __GetPlaces, __GetPlaceById } from '../services/PlaceService'
import Card from '../components/Card'
import '../styles/discover.css'
import TextInput from '../components/TextInput'

export default class Discover extends Component {
    constructor() {
        super()
        this.state = {
            places: []
        }
    }

    componentDidMount() {
        this.loadPlaces()
    }

    loadPlaces = async () => {
        const places = await __GetPlaces()
        console.log(places)
        this.setState({ places: places })
    }

    render(){
        return (
            
            <div className="home content-wrapper flex-col">
              <div className="content flex-col">
                  <form>
                    <TextInput name="search" type="search" placeholder="Find New Places" />
                  </form>
            
            <div className="discover card flex-col">
            {this.state.places.length ? (
            <div className="flex-row">
              {this.state.places.map((place) => (
                <div key={place._id}>
                  <Card
                    onClick={() =>
                      this.props.history.push(`/places/${place._id}`)
                    }
                    >
                    <div className="">
                      <div className="">
                        <h3>{place.name}</h3>
                        <img src={place.image_url}alt="random"></img>
                      </div>
                    </div>
                  </Card>
                  <div className="">
                    <button
                      onClick={() =>
                        this.props.history.push(`/profile`)
                      }
                      >
                      Add this to your Profile!
                    </button>
                  </div>
              </div>
              ))}
            </div>
            ) : (
              <div>
                <h3>Loading Places To Explore...</h3>
            </div>
            )
          }
          </div>
        </div>
    </div>
    )
    }
}