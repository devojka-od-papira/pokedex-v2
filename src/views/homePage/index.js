import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { makeStyles, CircularProgress } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import PokemonCard from '../../components/card';
import SearchBar from '../../components/searchBar';
import { fetchPokemons, filterPokemonsAction } from '../../redux/actions';

const useStyles = makeStyles({
  conteiner: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',

  },
  loadingContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
});

function Home({
  fetchPokemonsAction, pokemonsData, pokemonDataLoading, filterPokemons, filteredPokemons,
}) {
  const classes = useStyles();
  const [filteredPokemonsActive, setFilteredPokemonActive] = useState(false);
  console.log('filteredPokem', filteredPokemonsActive);

  useEffect(() => {
    fetchPokemonsAction();
  }, []);

  if (pokemonDataLoading === true) {
    return (
      <div className={classes.loadingContainer}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <div>
      <SearchBar
        setFilteredPokemonActive={setFilteredPokemonActive}
        filterPokemons={filterPokemons}
        pokemonsData={pokemonsData}
      />
      <div className={classes.conteiner}>
        {filteredPokemonsActive ? filteredPokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
            pokemonsData={pokemonsData}
            name={pokemon.name}
            url={pokemon.url}
          />
        )) : pokemonsData.map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
            pokemonsData={pokemonsData}
            name={pokemon.name}
            url={pokemon.url}
          />
        ))}
        {filteredPokemons.length === 0 && filteredPokemonsActive === true && <Alert severity="error">This is a warning alert — pokemon in not found!</Alert>}
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    pokemonsData: state.pokemon.pokemonsData,
    pokemonDataLoading: state.pokemon.pokemonDataLoading,
    filteredPokemons: state.pokemon.filteredPokemons,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPokemonsAction: bindActionCreators(fetchPokemons, dispatch),
    filterPokemons: bindActionCreators(filterPokemonsAction, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
