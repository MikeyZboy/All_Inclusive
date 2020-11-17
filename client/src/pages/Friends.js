import React, { Component } from 'react'
import Card from '../components/Card'
import { __GetProfile } from "../services/UserService"


export default class Friends extends Component {
    constructor() {
        super()
        this.state = {
            friends: [],
            friendFetchError: false
        }
    }

    componentDidMount() {
        this.getFriends(this.currentUser)
        console.log(this.state)
    }

    getFriends = async (props) => {
        try {
            const profileData = await __GetProfile(this.props.currentUser._id)
            this.setState({ friends: profileData.friends })
        } catch (error) {
            this.setState({ friendFetchError: true })
        }
    }

    removeFriend = async (id) => {
        try {
            const friendsToKeep = this.state.friends.filter((friend) => friend._id !== id)
            this.setState({ friends: friendsToKeep })
            //await __DeleteTrip(id)
            // we dont have a remove friend yet...
        } catch (error) {
            console.log(error)
        }
    }


render() {
    //const { friends } = this.state
    return(
        <div className="profile">
                <div>
                  <button
                    onClick={() =>
                    this.props.history.push(`/friends/invite`)
                    }
                    >Invite People!
                  </button>
                </div>
        <div>
          {this.state.friends.length ? (
            <div className="profile">
              {this.state.friends.map((friend) => (
                <div key={friend._id}>
                  <Card
                    onClick={() =>
                      this.props.history.push(`/friends/invite`)
                    }
                  >
                    <div className="">
                      <div className="">
                        <h3>{friend.user}</h3>
                        <img alt=""></img>
                      </div>
                    </div>
                  </Card>
                  <div className="">
                    <button
                      onClick={() =>
                        this.props.history.push(`/friends/invite`)
                      }
                    >
                      Invite
                    </button>
                  </div>
              </div>
              ))}
            </div>
          ) : (
            <div className="">
              <button
                onClick={() =>
                  this.props.history.push(`/friends/invite`)
              }
              >Make some friends!
              </button>
            </div>
          )}
        </div>
      </div>
        )
    }
    
}



                    // <button onClick={() => this.__DeleteTrip(trip._id)}>
                    //   Delete
                    // </button>