import React, { useEffect, useState } from "react";
import ListCard from "../components/Cards";
import { REMOVE_FAVORITE } from "../utils/action";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState"


function ListPage() {
  const [state, dispatch] = useStoreContext();
  const [list, setList] = useState("");

  console.log(state.favorites)
  // Code needed to make sure we're importing StoreProvider properly to pass into props below 
  // const removeFavorite = () => {
  //   dispatch({
  //     type: REMOVE_FAVORITE,
  //     _id: id
  //   })
  // }



    useEffect(() =>{
      Promise.all(state.favorites.map(item => API.getDetails(item)))
      .then(res => {
        const listDetails = res.map( info => ({
          title: info.data.title,
          id: info.data.id,
          image: `https://image.tmdb.org/t/p/w500/${info.data.poster_path}`,
        }));
        setList(listDetails)
      })
  }, [])



  return (
    <>
    
      <div className="cardContainer ">

        {list.length === 0 ? (<h2 className="noResult"> No Results</h2>) : (list.map(card => (
          <ListCard
            key={card.id}
            id={card.id}
            image={card.image}
            title={card.title}
            // removeFavorite={removeFavorite}
            />
        )))
        }
      </div>
    </>
  );
}

export default ListPage;
