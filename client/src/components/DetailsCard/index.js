import React from 'react';
import {Button} from 'react-bulma-components';


function DetailsCard(props) {
    return(
        <>
        <div className="details-container">
            <div className="detailsCard">
                <img src={props.image}
                    alt={props.title} />
        </div>
                <div className="desc">
                    <h1 className="descTitle">{props.title}</h1>
                    <p className="descDetails">{props.overview}</p>
                
                    <p className="release">Original Release: {props.release}</p>
                    </div>
                    </div> 
            <div className="flexspace">
            <Button className=" is-outlined savebtn" onClick={props.addFavorite}>Save</Button>
            </div>

   </>
    )
}

export default DetailsCard;