import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import { fetchPokemon } from '../../services/pokemon';

const useStyles = makeStyles({
  wrap: {
    padding: 20,
    margin: 30,
    maxWidth: 250,
  },
  areaCard: {
    width: 250,
    height: 250,
    display: 'flex',
    alignItems: 'center',
  },
  chip: {
    padding: 5,
    display: 'flex',
    alignItems: 'center',
  },
  parag: {
    marginRight: 5,
  },
  image: {
    width: 120,
    height: 120,
    border: '1px solid #e6e2d3',
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 7,
    boxSizing: 'border-box',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  name: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: 24,
    lineHeight: 2,
  },
});
function PokemonCard({ name, url }) {
  const classes = useStyles();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetchPokemon(url).then((res) => {
      console.log('res', res);
      setPokemon(res);
    });
  }, []);
  console.log('pokemon5', pokemon);

  function capitalize(string) {
    return string && string[0].toUpperCase() + string.slice(1);
  }

  return (
    <Card className={classes.wrap}>
      <CardActionArea className={classes.areaCard}>
        <div>
          <Typography className={classes.name}>{capitalize(name)}</Typography>
          <CardMedia className={classes.image}>
            <img src={pokemon?.sprites?.front_shiny} alt="pokemon" />
          </CardMedia>
          <div>
            <div className={classes.chip}>
              <p className={classes.parag}>
                Type :
              </p>
              {pokemon?.types.map((type) => (
                <div>
                  <Chip
                    variant="outlined"
                    size="small"
                    label={capitalize(type.type.name)}
                  />
                </div>
              ))}
            </div>
            <div className={classes.chip}>
              <p className={classes.parag}>
                Weight :
              </p>
              <Chip
                variant="outlined"
                size="small"
                label={`${Math.round(pokemon?.weight * 0.1)} kg`}
              />
            </div>
            <div className={classes.chip}>
              <p className={classes.parag}>
                Height :
              </p>
              <Chip
                variant="outlined"
                size="small"
                label={`${pokemon?.height * 10} cm`}
              />
            </div>
          </div>
        </div>
      </CardActionArea>
    </Card>
  );
}

export default PokemonCard;
