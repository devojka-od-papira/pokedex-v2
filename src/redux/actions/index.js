import axios from 'axios';
import {
  FETCH_BY_POKEMONS_REQEST,
  FETCH_BY_POKEMONS_SUCCESS,
  FETCH_BY_POKEMONS_ERROR,
} from '../actionTypes';

export const fetchPokemons = () => async (dispatch) => {
  dispatch({ type: FETCH_BY_POKEMONS_REQEST });

  try {
    const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=50&offset=100');
    dispatch({
      type: FETCH_BY_POKEMONS_SUCCESS,
      payload: {
        pokemonsData: data.results,
      },
    });
  } catch (error) {
    console.log('error', error);
  }
};
