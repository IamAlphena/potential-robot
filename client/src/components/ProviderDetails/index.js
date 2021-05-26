import React from 'react'

function WatchCard(props){
    return (
        <>
            <p className="providerList">
                <img
                src= {`https://image.tmdb.org/t/p/w500/` + props.image}
                alt={props.provider}
                className="icon" />
                <br />
            {props.provider}
            </p>
        </>
    )
}

export default WatchCard;