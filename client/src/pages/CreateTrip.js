import React, { Component } from 'react'
import TextInput from '../components/TextInput'
import { __UploadTrip } from '../services/TripService'

export default class CreateTrip extends Component {
    constructor(){
        super()
        this.state = {
            title: '',
            place: '',
            image_url: '',
            description: ''
        }
    }

handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
}

handleSubmit = async (e) => {
    e.preventDefault()
    try {
        await __UploadTrip(this.state, this.props.currentUser._id)
        this.props.history.push('/profile')
    } catch (error) {
        console.log(error)
    }
}

render(){
    const { title, place, description, image_url } = this.state
    return(
        <div className="upload content">
            <form className="flex-col" onSubmit={this.handleSubmit}>
                <TextInput 
                placeholder="Title"
                name="title"
                value={title}
                onChange={this.handleChange}
                />
                <TextInput 
                placeholder="Place"
                name="place"
                value={place}
                onChange={this.handleChange}
                />
                <TextInput 
                fieldType="textfield"
                placeholder="Description"
                name="description"
                value={description}
                onChange={this.handleChange}
                />
                <TextInput
                placeholder="Image"
                name="image_url"
                value={image_url}
                onChange={this.handleChange}
                />
            <button>Create Trip!</button>
            </form>
        </div>
    )
}



}