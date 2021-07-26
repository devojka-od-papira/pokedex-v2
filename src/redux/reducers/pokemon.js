import {
  FETCH_POKEMONS_REQEST, FETCH_POKEMONS_SUCCESS, FETCH_POKEMONS_ERROR, FETCH_POKEMON_DETAIL_REQEST,
  FETCH_POKEMON_DETAIL_SUCCESS,
  FETCH_POKEMON_DETAIL_ERROR,
} from '../actionTypes';

const initialState = {
  pokemonsData: [],
  pokemonDetail: null,
// satla sam ovde
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POKEMONS_REQEST:
      return {
        ...state,
      };
    case FETCH_POKEMONS_SUCCESS:
      return {
        ...state,
        pokemonsData: action.payload.pokemonsData,
      };
    case FETCH_POKEMON_DETAIL_REQEST:
      return {
        ...state,
      };
    case FETCH_POKEMON_DETAIL_SUCCESS:
      return {
        ...state,
        pokemonDetail: action.payload.pokemonDetail,
      };
    default:
      return state;
  }
};
