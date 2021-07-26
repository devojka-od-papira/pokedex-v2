import axios from 'axios';
import {
  FETCH_POKEMONS_REQEST,
  FETCH_POKEMONS_SUCCESS,
  FETCH_POKEMONS_ERROR,
  FETCH_POKEMON_DETAIL_REQEST,
  FETCH_POKEMON_DETAIL_SUCCESS,
  FETCH_POKEMON_DETAIL_ERROR,
} from '../actionTypes';

export const fetchPokemons = () => async (dispatch) => {
  dispatch({ type: FETCH_POKEMONS_REQEST });

  try {
    const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=50&offset=100');
    dispatch({
      type: FETCH_POKEMONS_SUCCESS,
      payload: {
        pokemonsData: data.results,
      },
    });
  } catch (error) {
    dispatch({
      type: FETCH_POKEMONS_ERROR,
    });
  }
};

export const fetchPokemonDetailAction = (id) => async (dispatch) => {
  dispatch({ type: FETCH_POKEMON_DETAIL_REQEST });

  try {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    dispatch({
      type: FETCH_POKEMON_DETAIL_SUCCESS,
      payload: {
        pokemonDetail: data,
      },
    });
  } catch (error) {
    console.log('error', error);
    dispatch({
      type: FETCH_POKEMON_DETAIL_ERROR,
    });
  }
};
