import React, { Component } from 'react'
import TextInput from '../components/TextInput'
import { __RegisterUser } from '../services/UserService'
import '../styles/signup.css'

export default class Signup extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }
    
    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value })
        console.log(this.state)
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await __RegisterUser(this.state)
            this.props.history.push('/login')
        } catch (error) {
            console.log(error)
        }
    }

    render(){
        const { name, email, password } = this.state
        return(
            <div className="signup flex-col">
                <form className="flex-col" onSubmit={this.handleSubmit}>
                    <TextInput 
                    placeholder="your email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                    />
                    <TextInput 
                    placeholder="your name"
                    type="name"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                    />
                     <TextInput 
                    placeholder="password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                    />
                    <button>Join Us!</button>
                </form>
            </div>
        )
    }
}
