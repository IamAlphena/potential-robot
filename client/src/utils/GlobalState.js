import React, { useReducer, createContext, useContext } from "react";
import { ADD_FAVORITE, REMOVE_FAVORITE, USER_LOGIN } from "./action";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [action.movie, ...state.favorites],
      };

    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((movie) => {
          return movie._id !== action._id;
        }),
      };
    // case USER_LOGIN:
    //   return {
    //     ...state,
    //     user: action.payload,
    //   };

    default:
      return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    favorites: [],
  });
  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };


//save to req.session.user
