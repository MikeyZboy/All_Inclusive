import React from 'react'
import Card from '../components/Card'

const Home = () => {
    return (
        <div className="">
             <div className="">             
            <section className="card-wrapper flex-row">
                <Card>
                 <div className="mask flex-col">
                    <div className="card-content">
                     <h3>Mexico</h3>
                     <p></p>
                     </div> 
                 </div>
                  <img
                    src="https://images.pexels.com/photos/2227774/pexels-photo-2227774.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="Sunset in pool of Mexican resort"
                    />
                </Card>
                <Card>
                    <div className="mask flex-col">
                        <div className="card-content">
                        <h3>Greece</h3>
                        <p></p>
                        </div>
                    </div>
                    <img
                    src="https://media.vanityfair.com/photos/56cc5268ae46dea861df1599/master/w_1600%2Cc_limit/dam-culture-whereigo-2012-08-john-stamos-john-stamos-01.png"
                    alt="Greek island rooftops overlooking sea"
                    />
                </Card>
                <Card>
                    <div className="mask flex-col">
                        <div className="card-content">
                        <h3>Maldives</h3>
                        <p></p>
                        </div>
                    </div>
                    <img 
                    src="https://images.pexels.com/photos/3601426/pexels-photo-3601426.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                    alt="Floating hotel rooms in Maldives"
                    />
                </Card>
            </section>
            </div>
        </div>
    )
}

export default Home