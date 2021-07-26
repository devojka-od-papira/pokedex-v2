import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CardActionArea from '@material-ui/core/CardActionArea';
import { CardMedia, Typography, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import { fetchPokemon } from '../../services/pokemon';
import { capitalize } from '../../utils';

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

function PokemonCard({ name, url, pokemonDetail }) {
  const classes = useStyles();
  const location = useLocation();
  console.log('location', location);

  const [pokemon, setPokemon] = useState(null);
  console.log('pokemon', pokemon);
  console.log('pokemondetail', pokemonDetail);
  const [hoverStatus, setHoverStatus] = useState(false);

  useEffect(() => {
    if (location.pathname === '/') {
      fetchPokemon(url).then((res) => {
        setPokemon(res);
      });
    } else {
      console.log('uzmi podatke iz redu..');
      setPokemon(pokemonDetail);
    }
  }, []);

  const chipColor = (type) => {
    if (type === 'normal') {
      return '#a3a375';
    } if (type === 'water') {
      return '#668cff';
    } if (type === 'electric') {
      return '#ffdb4d';
    }
    if (type === 'fire') {
      return '#ff9933';
    }
    if (type === 'fighting') {
      return '#ff1a1a';
    }
    if (type === 'flying') {
      return '#d9b3ff';
    }
    if (type === 'grass') {
      return '#33ff33';
    }
    if (type === 'poison') {
      return '#9900cc';
    }
    if (type === 'ground') {
      return '#996600';
    }
    if (type === 'psychic') {
      return '#ff0066';
    } if (type === 'rock') {
      return '#558000';
    } if (type === 'ice') {
      return '#99ddff';
    }
    if (type === 'bug') {
      return ' #99e600';
    }
    if (type === 'dragon') {
      return '#6600cc';
    } if (type === 'ghost') {
      return ' #800040';
    } if (type === 'dark') {
      return '#663300';
    } if (type === 'bug') {
      return '#99ddff';
    }
    if (type === 'steel') {
      return ' #e6ccff';
    }
    if (type === 'fairy') {
      return '#ffcce6';
    }
    return '';
  };

  return pokemon ? (
    <>
      <Link to={`/detail/${pokemon.id}`}>
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
                  {pokemon?.types.map((type) => {
                    const color = chipColor(type.type.name);
                    return (
                      <div key={type.type.name}>
                        <Chip
                          style={{ backgroundColor: color, margin: 4 }}
                          variant="outlined"
                          size="small"
                          label={capitalize(type.type.name)}
                        />
                      </div>
                    );
                  })}
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
          </CardActionArea>
        </Card>
      </Link>

    </>
  ) : null;
}

export default PokemonCard;
