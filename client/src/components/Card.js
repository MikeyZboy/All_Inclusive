import React from 'react'

const Card = ({ children, ...rest }) => {
    return ( 
        <div className="card" {...rest}>
            {children}
        </div>
    )
}

export default Card
