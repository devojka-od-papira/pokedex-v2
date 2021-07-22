import axios from 'axios';

async function fetchPokemon(url) {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    return error;
  }
}

export {
  fetchPokemon,
};
