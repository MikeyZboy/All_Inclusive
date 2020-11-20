import React, { Component, useReducer } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import Home from '../pages/Home'
import LandingPage from '../pages/LandingPage'
import Layout from './Layout'
import Discover from '../pages/Discover'
import SignUp from '../pages/SignUp'
import SignIn from '../pages/SignIn'
import CreateTrip from '../pages/CreateTrip'
import Profile from '../pages/Profile'
import UpdateTrip from '../pages/UpdateTrip'
import ProtectedRoute from './ProtectedRoute'
import Friends from '../pages/Friends'
import CreateFriend from '../pages/CreateFriend'
import { __CheckSession } from '../services/UserService'

class Router extends React.Component {
    constructor() {
        super() 
        this.state = {
            authenticated: false,
            currentUser: null,
            pageLoading: true
        }
    }

    verifyTokenValid = async () => {
        const token = localStorage.getItem('token')
            if (token) {
                try {
                const session = await __CheckSession()
                this.setState(
                    {
                        currentUser: session,
                        authenticated: true
                    },
                    () => this.props.history.push('/profile')
                )
            } catch (error) {
                this.setState({ currentUser: null, authenticated: false })
                localStorage.clear()
            }
        }
    }
    
    toggleAuthenticated =  (value, user, done) => {
        this.setState({authenticated: value, currentUser: user}, () => done())
    }

    componentDidMount() {
        this.verifyTokenValid()
        this.setState({ pageLoading: false })
    }

    render(){
        return(
            <main>
                {this.state.pageLoading ? (
                    <h3>Loading...</h3>
                ):(
                <Switch>
                    <Route 
                    exact 
                    path="/"
                    component={() => (
                        <LandingPage>
                            <Home />
                        </LandingPage>
                    )}
                    />
                    <Route 
                    path="/register"
                    component={(props) => (
                        <LandingPage>
                            <SignUp {...props} />
                        </LandingPage>
                    )}
                    />
                    <Route
                    path="/places"
                    component={(props) => (
                        <Layout
                        currentUser={this.state.currentUser}
                        authenticated={this.state.authenticated}
                        >
                            <Discover {...props}/>
                        </Layout>
                    )}
                    />
                    <Route 
                    path="/login"
                    component={(props) => (
                        <LandingPage>
                            <SignIn 
                            toggleAuthenticated={this.toggleAuthenticated}
                            {...props} />
                        </LandingPage>
                    )}
                    />
                    <ProtectedRoute 
                    authenticated={this.state.authenticated}
                    path="/profile"
                    component={(props) => (
                        <Layout 
                        currentUser={this.state.currentUser}
                        authenticated={this.state.authenticated}
                        >
                            <Profile {...props} currentUser={this.state.currentUser} />
                        </Layout>
                    )}
                    />
                    <ProtectedRoute
                    authenticated={this.state.authenticated}
                    path="/trips/create"
                    component={(props)=> (
                        <Layout 
                        currentUser={this.state.currentUser}
                        authenticated={this.state.authenticated}
                        >
                            <CreateTrip {...props} currentUser={this.state.currentUser}/>
                        </Layout>
                    )}     
                    />
                    <ProtectedRoute
                    authenticated={this.state.authenticated}
                    path="/trips/update/:trip_id"
                    component={(props) => (
                        <Layout 
                        currentUser={this.state.currentUser}
                        authenticated={this.state.authenticated}
                        >
                            <UpdateTrip {...props} currentUser={this.state.currentUser}/>
                        </Layout>
                        )}
                    />
                    <ProtectedRoute
                    authenticated={this.state.authenticated}
                    path="/update/:trip_id"
                    component={(props) => (
                        <Layout 
                        currentUser={this.state.currentUser}
                        authenticated={this.state.authenticated}
                        >
                            <UpdateTrip {...props} currentUSer={this.state.currentUser}/> 
                        </Layout>
                    )}
                    />
                    <ProtectedRoute
                    authenticated={this.state.authenticated}
                    path="/friends"
                    component={(props) => (
                        <Layout
                        currentUser={this.state.currentUser}    
                        authenticated={this.state.authenticated}
                        >
                            <Friends {...props} currentUser={this.state.currentUser}/>
                        </Layout>
                    )}
                    />
                    <ProtectedRoute 
                    authenticated={this.state.authenticated}
                    path="/friends/create"
                    component={(props) => (
                        <Layout
                        currentUser={this.state.currentUser}
                        authenticated={this.state.authenticated}
                        >
                            <CreateFriend {...props} currentUser={this.state.currentUser}/>
                        </Layout>
                    )}
                    />
                </Switch>
                )}
            </main>
        )
    }
}

export default withRouter(Router)