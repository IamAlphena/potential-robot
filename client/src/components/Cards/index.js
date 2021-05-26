import React from 'react';
import { Card } from 'react-bulma-components';
import { useHistory } from 'react-router-dom';


function MovieCard(props) {
    const history = useHistory();
    return (
        <Card
            className="card"
            onClick={() => history.push(`/details/${props.id}`)}
        >
            <Card.Image
                size="3by4"
                src={props.image}
            />
            <Card.Header.Title
                style={{ height: 'auto' }}
            >
                {props.title}
            </Card.Header.Title>
            {/* <button className="is-primary" onClick={props.addFavorite}>Save</button> */}
        </Card>
    )
}

export default MovieCard;