import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import LandingPage from '../pages/LandingPage'

class Router extends Component {
    constructor() {
        super() 
        this.state = {
            authenticated: false,
            currentUser: null,
            pageLoading: true
        }
    }

// verifyTokenValid = async () => {
//     const token = localStorage.getItem('token')
//     if (token) {
//         try {
//             const session = await __CheckSession()
//             this.setState(
//                 {
//                     currentUser: session,
//                     authenticated: true
//                 },
//                 () => this.props.history.push('/profile')
//             )
//         } catch (error) {
//             this.setState({currentUser: null, authenticated: false})
//             localStorage.clear()
//         }
//     }
// }
    
    componentDidMount() {}

    render(){
        return(
            <main>
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
                </Switch>
            </main>
        )
    }
}

export default Router