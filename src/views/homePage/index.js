import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PokemonCard from '../../components/card';
import SearchBar from '../../components/searchBar';
import { fetchPokemons } from '../../redux/actions';

function Home({ fetchPokemonsAction, pokemonsData }) {
  useEffect(() => {
    fetchPokemonsAction();
  }, []);

  return (
    <div>
      <SearchBar />
      {pokemonsData.map((pokemon) => (
        <PokemonCard
          key={pokemon.name}
          pokemonsData={pokemonsData}
          name={pokemon.name}
          url={pokemon.url}
        />
      ))}
    </div>
  );
}
function mapStateToProps(state) {
  return {
    pokemonsData: state.pokemon.pokemonsData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPokemonsAction: bindActionCreators(fetchPokemons, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
