import React from 'react'

function AuctionDetails (props){
    return (
        <div>
            <h2><b>Title:</b> {props.title}</h2>
            <p><b>Description:</b> {props.description}</p>
            <p><b>Ends at:</b> {props.ends_at}</p>
            <p><b>Reserve price:</b> {props.reserve_price}</p>

            <p>
            </p>  
        </div>
    )
}

export default AuctionDetails;