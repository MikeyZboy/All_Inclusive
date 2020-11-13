import React from 'react'
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
import ViewTrip from '../pages/ViewTrip'
import ProtectedRoute from './ProtectedRoute'
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
                this.setState({currentUser: null, authenticated: false})
                localStorage.clear()
            }
        }
    }
    
    toggleAuthenticated =  (value, user, done) => {
        this.setState({authenticated: value, currentUser: user}, () => done)
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
                    path="/discover"
                    component={(props) => (
                        <Layout>
                            <Discover {...props} />
                        </Layout>
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
                    path="/login"
                    component={(props) => (
                        <LandingPage>
                            <SignIn {...props} />
                        </LandingPage>
                    )}
                    />
                </Switch>
                )}
            </main>
        )
    }
}

export default withRouter(Router)