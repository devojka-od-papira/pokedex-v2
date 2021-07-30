import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography, TableCell, TableContainer, Table, TableRow, TableBody, TableHead, CircularProgress,
} from '@material-ui/core';
import { fetchPokemonDetailAction } from '../../redux/actions';
import { capitalize } from '../../utils';
import PokemonStats from '../../components/pokemonStats';

const useStyles = makeStyles({
  image: {
    width: 120,
    height: 120,

  },
  imageWrap: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  name: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: 24,
    lineHeight: 2,
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function Detail({ fetchPokemonDetail, pokemonDetail, pokemonDetailIsLoading }) {
  const classes = useStyles();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetchPokemonDetail(id);
    }
  }, []);

  return (
    <div
      className={classes.container}
    >
      {
        pokemonDetailIsLoading ? <CircularProgress /> : (
          <div>
            <div>
              <Typography className={classes.name}>{capitalize(pokemonDetail?.name)}</Typography>
              <div className={classes.imageWrap}>
                <img className={classes.image} src={pokemonDetail?.sprites?.front_shiny} alt="pokemon_front_default" />

              </div>
            </div>
            <div>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell align="right">Name</TableCell>
                      <TableCell align="right">Order</TableCell>
                      <TableCell align="right">Weight [ kg ]</TableCell>
                      <TableCell align="right">Height [ cm ]</TableCell>
                      <TableCell align="right">Abilities</TableCell>
                      <TableCell align="right">Types</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableCell>{pokemonDetail?.id}</TableCell>
                    <TableCell align="right">{capitalize(pokemonDetail?.name)}</TableCell>
                    <TableCell align="right">{pokemonDetail?.order}</TableCell>
                    <TableCell align="right">{Math.round(pokemonDetail?.weight * 0.1)}</TableCell>
                    <TableCell align="right">{pokemonDetail?.height * 10}</TableCell>
                    <TableCell align="right">
                      {pokemonDetail?.abilities.map((ability) => (
                        <p key={ability.ability.name}>{capitalize(ability.ability.name)}</p>
                      ))}
                    </TableCell>
                    <TableCell align="right">
                      {pokemonDetail?.types.map((type) => (
                        <p>{capitalize(type.type.name)}</p>
                      ))}

                    </TableCell>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            <div>
              <PokemonStats stats={pokemonDetail?.stats} />
            </div>
          </div>
        )
      }
    </div>
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
    pokemonDetailIsLoading: state.pokemon.pokemonDetailIsLoading,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
