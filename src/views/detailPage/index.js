import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import { TableCell } from '@material-ui/core';
import { fetchPokemonDetailAction } from '../../redux/actions';
import { capitalize } from '../../utils';

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
    width: '70%',
    margin: 'auto',

  },

});

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
        <div className={classes.imageWrap}>
          <img className={classes.image} src={pokemonDetail?.sprites?.front_default} alt="pokemon_front_default" />

        </div>
      </div>
      <div>
        <TableContainer className={classes.container}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Weight [ kg ]</TableCell>
                <TableCell align="right">Height [ cm ]</TableCell>
                <TableCell align="right">Order</TableCell>
                <TableCell align="right">Abilities</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableCell>{pokemonDetail?.id}</TableCell>
              <TableCell align="right">{capitalize(pokemonDetail?.name)}</TableCell>
              <TableCell align="right">{Math.round(pokemonDetail?.weight * 0.1)}</TableCell>
              <TableCell align="right">{pokemonDetail?.height * 10}</TableCell>
              <TableCell align="right">{pokemonDetail?.order}</TableCell>
              <TableCell align="right">
                {pokemonDetail?.abilities.map((ability) => (
                  <p key={ability.ability.name}>{capitalize(ability.ability.name)}</p>
                ))}
              </TableCell>
              <TableCell />
            </TableBody>
          </Table>
        </TableContainer>
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
