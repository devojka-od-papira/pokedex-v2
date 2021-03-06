import axios from 'axios';
import {
  FETCH_POKEMONS_REQEST,
  FETCH_POKEMONS_SUCCESS,
  FETCH_POKEMONS_ERROR,
  FETCH_POKEMON_DETAIL_REQEST,
  FETCH_POKEMON_DETAIL_SUCCESS,
  FETCH_POKEMON_DETAIL_ERROR,
  FILTER_POKEMONS,
} from '../actionTypes';
import { capitalize } from '../../utils';

export const fetchPokemons = () => async (dispatch) => {
  dispatch({ type: FETCH_POKEMONS_REQEST });

  try {
    const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=50&offset=100');
    setTimeout(() => {
      dispatch({
        type: FETCH_POKEMONS_SUCCESS,
        payload: {
          pokemonsData: data.results,
        },
      });
    }, 3000);
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

    const newStats = data.stats.map((value) => ({
      ...value,
      id: capitalize(value.stat.name),
      label: capitalize(value.stat.name),
      value: value.base_stat,
      color: 'hsl(115, 70%, 50%)',
    }));

    const newData = { ...data, stats: newStats };

    setTimeout(() => {
      dispatch({
        type: FETCH_POKEMON_DETAIL_SUCCESS,
        payload: {
          pokemonDetail: newData,
        },
      });
    }, 3000);
  } catch (error) {
    dispatch({
      type: FETCH_POKEMON_DETAIL_ERROR,
    });
  }
};

export const filterPokemonsAction = (filteredPokemons) => (dispatch) => {
  dispatch({
    type: FILTER_POKEMONS,
    payload: {
      filteredPokemons,
    },
  });
};
