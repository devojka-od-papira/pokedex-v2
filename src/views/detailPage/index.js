import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PokemonCard from '../../components/card';
import { fetchPokemonDetailAction } from '../../redux/actions';
import { capitalize } from '../../utils';

const useStyles = makeStyles({});

function Detail({ fetchPokemonDetail, pokemonDetail }) {
  const classes = useStyles();
  const { id } = useParams();
  useEffect(() => {
    fetchPokemonDetail(id);
  }, []);
  console.log('pokem', pokemonDetail);

  return (
    <>
      <div>
        <Typography className={classes.name}>{capitalize(pokemonDetail?.name)}</Typography>
        <img src={pokemonDetail?.sprites?.front_default} alt="pokemon_front_default" />
        <img src={pokemonDetail?.sprites?.back_shiny} alt="pokemon_back_shiny" />
        <img src={pokemonDetail?.sprites?.back_default} alt="pokemon_back_default" />
        <img src={pokemonDetail?.sprites?.front_shiny} alt="pokemon_front_shiny" />
      </div>
    </>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPokemonDetail: bindActionCreators(fetchPokemonDetailAction, dispatch),
  };
}
function mapStateToProps(state) {
  return {
    pokemonDetail: state.pokemon.pokemonDetail,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
