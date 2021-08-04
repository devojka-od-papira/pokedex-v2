import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CardMedia,
  CardActionArea,
  Typography,
  Chip,
  Card,
  CircularProgress,
  makeStyles,
} from '@material-ui/core';
import { fetchPokemon } from '../../services/pokemon';
import { capitalize } from '../../utils';
import Chips from '../chip';

const useStyles = makeStyles({
  wrap: {
    margin: 30,
  },
  areaCard: {
    width: 250,
    height: 365,
    display: 'flex',
    alignItems: 'center',
  },

  chip: {
    padding: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
  },
  parag: {
    marginRight: 5,
  },
  image: {
    width: 140,
    height: 140,
    border: '2px solid #e6e2d3',
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
  button: {
    position: 'absolute',
    right: 0,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 50,
    textTransform: 'none',
  },
});

function PokemonCard({ name, url }) {
  const classes = useStyles();

  const [pokemon, setPokemon] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchPokemon(url).then((res) => {
      setPokemon(res);
      setIsLoading(false);
    });
  }, []);

  return pokemon ? (
    <>
      <Link to={`/detail/${pokemon.id}`}>
        <Card className={classes.wrap}>
          <CardActionArea className={classes.areaCard}>
            {isLoading ? <CircularProgress /> : (
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
                      <div key={type.type.name}>
                        <Chips
                          pokemonType={type.type.name}
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
                      style={{ backgroundColor: '#e0ebeb' }}
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
                      style={{ backgroundColor: '#e0ebeb' }}
                      variant="outlined"
                      size="small"
                      label={`${pokemon?.height * 10} cm`}
                    />
                  </div>
                </div>
              </div>
            )}
          </CardActionArea>
        </Card>
      </Link>
    </>
  ) : null;
}

export default PokemonCard;
