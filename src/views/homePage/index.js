import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import PokemonCard from '../../components/card';
import SearchBar from '../../components/searchBar';
import { fetchPokemons } from '../../redux/actions';

const useStyles = makeStyles({
  conteiner: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',

  },
});

function Home({
  fetchPokemonsAction, pokemonsData, pokemonDataLoading,
}) {
  const classes = useStyles();

  useEffect(() => {
    fetchPokemonsAction();
  }, []);

  return (
    <div>
      <SearchBar />
      <div className={classes.conteiner}>
        {pokemonDataLoading ? <CircularProgress style={{ display: 'flex', alignSelf: 'center' }} /> : pokemonsData.map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
            pokemonsData={pokemonsData}
            name={pokemon.name}
            url={pokemon.url}
          />
        )) }
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    pokemonsData: state.pokemon.pokemonsData,
    pokemonDataLoading: state.pokemon.pokemonDataLoading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPokemonsAction: bindActionCreators(fetchPokemons, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
