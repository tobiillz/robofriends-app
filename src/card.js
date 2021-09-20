import React from 'react'


const Card=(props)=> {
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src='https://robohash.org/test?200*200' alt="robots" />
            <div>
                <h2>Name: {props.name}</h2>
                <p>Email: {props.email}</p>
            </div>
        </div>
    )
}

export default Card



