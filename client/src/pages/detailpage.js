import React, { useEffect, useState } from 'react';
import { useStoreContext } from "../utils/GlobalState";
import { ADD_FAVORITE } from "../utils/action";
import API from "../utils/API";
import { useParams } from 'react-router-dom';
import DetailsCard from '../components/DetailsCard';
import WatchCard from '../components/ProviderDetails';



function MovieDetails() {
    const [results, setResults] = useState("");
    const [buy, setBuy] = useState("");
    const [rent, setRent] = useState("");
    const [flatrate, setFlatrate] = useState("");
    const [state, dispatch] = useStoreContext()

    let { id } = useParams();

    useEffect(() => {
        API.getDetails(id)
            .then(res => {
                const showDetails = {
                    title: res.data.original_title,
                    id: res.data.id,
                    release: res.data.release_date,
                    image: `https://image.tmdb.org/t/p/w500${res.data.poster_path}`,
                    backsplash: `https://image.tmdb.org/t/p/original${res.data.backdrop_path}`,
                    overview: res.data.overview,
                };
                setResults(showDetails)
            })
    }, [])

    const addFavorite = () => {
        dispatch({
            type: ADD_FAVORITE,
            movie: id
        })
    }

    useEffect(() => {
        API.providers(id)
            .then(res => {
                const showBuy = res.data.results.US ? res.data.results.US.buy : null
                setBuy(showBuy)
                const showFlatrate = res.data.results.US ? res.data.results.US.flatrate : null
                setFlatrate(showFlatrate)
                const showRent = res.data.results.US ? res.data.results.US.rent : null
                setRent(showRent)
            })
    }, [])

    // console.log(state)

    return (
        <div>
            <div className="backsplash" style={{backgroundImage: `url(${results.backsplash})`}}>
            <DetailsCard
                key={results.id}
                image={results.image}
                title={results.title}
                overview={results.overview}
                release={results.release}
                rating={results.rating}
                addFavorite={addFavorite}
            />

            <div className="whereToWatch">

                <p className="option">Buy</p>
                <div className="providerBox">
                    {!buy ? (<h2>Not Currently Available</h2>) : (buy.map(
                        buy => (
                            <WatchCard
                                key={buy.provider_id}
                                image={buy.logo_path}
                                provider={buy.provider_name}
                            />

                        )
                    ))}
                </div>
                <div className="spacer"></div>

                <p className="option">Rent</p>
                <div className="providerBox">
                    {!rent ? (<h2>Not Currently Available</h2>) : (rent.map(
                        rent => (
                            <WatchCard
                                key={rent.provider_id}
                                image={rent.logo_path}
                                provider={rent.provider_name}
                            />
                        )
                    ))}
                </div>
                <div className="spacer"></div>
                <p className="option">Subscription</p>
                <div className="providerBox">
                    {!flatrate ? (<h2>Not Currently Available</h2>) : (flatrate.map(
                        flatrate => (
                            <WatchCard
                                key={flatrate.provider_id}
                                image={flatrate.logo_path}
                                provider={flatrate.provider_name}
                            />
                        )
                    ))}
                </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails;