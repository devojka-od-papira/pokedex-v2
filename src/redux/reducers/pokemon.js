import { FETCH_BY_POKEMONS_REQEST, FETCH_BY_POKEMONS_SUCCESS, FETCH_BY_POKEMONS_ERROR } from '../actionTypes';

const initialState = {
  pokemonsData: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BY_POKEMONS_REQEST:
      return {
        ...state,
      };
    case FETCH_BY_POKEMONS_SUCCESS:
      return {
        ...state,
        pokemonsData: action.payload.pokemonsData,
      };
    default:
      return state;
  }
};
