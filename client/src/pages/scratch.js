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
                    path="/trips"
                    component={(props) => (
                        <Layout
                        currentUser={this.state.currentUser}
                        authenticated={this.state.authenticated}
                        >
                            <Trips {...props}/>
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
                    path="/trips/:trip_id"
                    component={(props) => (
                        <Layout 
                        currentUser={this.state.currentUser}
                        authenticated={this.state.authenticated}
                        >
                            <ViewTrip {...props} currentUser={this.state.currentUser}/>
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
                    path="/trips/update/:trip_id"
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
                    path="/friends/invite"
                    component={(props) => (
                        <Layout
                        currentUser={this.state.currentUser}    
                        authenticated={this.state.authenticated}
                        >
                            <Friends {...props} currentUser={this.state.currentUser}/>
                        </Layout>
                    )}
                    />
                </Switch>