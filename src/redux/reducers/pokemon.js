import {
  FETCH_POKEMONS_REQEST, FETCH_POKEMONS_SUCCESS, FETCH_POKEMONS_ERROR, FETCH_POKEMON_DETAIL_REQEST,
  FETCH_POKEMON_DETAIL_SUCCESS,
  FETCH_POKEMON_DETAIL_ERROR,
} from '../actionTypes';

const initialState = {
  pokemonsData: [],
  pokemonDataLoading: false,
  pokemonDetail: null,
  pokemonsDetailIsLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POKEMONS_REQEST:
      return {
        ...state,
        pokemonDataLoading: true,
      };
    case FETCH_POKEMONS_SUCCESS:
      return {
        ...state,
        pokemonsData: action.payload.pokemonsData,
        pokemonDataLoading: false,
      };
    case FETCH_POKEMONS_ERROR:
      return {
        ...state,
        pokemonDataLoading: false,
      };
    case FETCH_POKEMON_DETAIL_REQEST:
      return {
        ...state,
        pokemonDetailIsLoading: true,
      };
    case FETCH_POKEMON_DETAIL_SUCCESS:
      return {
        ...state,
        pokemonDetail: action.payload.pokemonDetail,
        pokemonDetailIsLoading: false,
      };
    default:
      return state;
  }
};
