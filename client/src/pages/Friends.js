import React, { Component } from 'react'
import Card from '../components/Card'
import { __GetProfile } from "../services/UserService"


export default class Friends extends Component {
    constructor() {
        super()
        this.state = {
            friends: [],
            trips: [],
            friendFetchError: false
        }
    }

    componentDidMount() {
        this.getFriendsData(this.currentUser)
        console.log(this.state)
    }

    getFriendsData = async (props) => {
        try {
            const profileData = await __GetProfile(this.props.currentUser._id)
            this.setState({ friends: profileData.friends, trips: profileData.trips })
        } catch (error) {
            this.setState({ friendFetchError: true })
        }
    }

    
    removeFriend = async (id) => {
        try {
            const friendsToKeep = this.state.friends.filter((friend) => friend._id !== id)
            this.setState({ friends: friendsToKeep })
        } catch (error) {
            console.log(error)
        }
    }

/* TODO 
    - addFriendToFriends

    - addFriendToTrip
*/


render() {
    return(
        <div className="profile">
                <div>
                  <button
                    onClick={() =>
                    this.props.history.push(`/friends/create`)
                    }
                    >Make Some Friends!
                  </button>
                </div>
        <div>
          {this.state.friends.length ? (
            <div className="flex-row">
              {this.state.friends.map((friend, trip) => (
                <div key={friend._id} trip={trip}>
                  <Card
                    onClick={() =>
                      this.props.history.push(`/friends/invite/${trip._id}`)
                    }
                  >
                    <div className="">
                      <div className="">
                        <h3>{friend.name}</h3>
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
                      Invite to Trip
                    </button>
                  </div>
                  <button onClick={() => this.removeFriend(friend._id)}>
                      Uninvite to Trip
                    </button>
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