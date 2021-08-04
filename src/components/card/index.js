import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CardActionArea from '@material-ui/core/CardActionArea';
import {
  CardMedia, Typography, Card, CircularProgress,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTint, faStar, faBolt, faFire, faHandRock,
  faFeatherAlt, faLeaf, faSkull, faGlobeEurope,
  faBrain, faDiceD20, faSnowflake, faBug, faDragon,
  faGhost, faAdjust, faDrumSteelpan, faHatWizard,
} from '@fortawesome/free-solid-svg-icons';
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

  const chipColor = (type) => {
    if (type === 'normal') {
      return {
        color: '#a3a375',
        icon: <FontAwesomeIcon icon={faStar} />,
      };
    } if (type === 'water') {
      return {
        color: '#668cff',
        icon: <FontAwesomeIcon icon={faTint} />,
      };
    } if (type === 'electric') {
      return {
        color: '#ffdb4d',
        icon: <FontAwesomeIcon icon={faBolt} />,
      };
    }
    if (type === 'fire') {
      return {
        color: '#ff9933',
        icon: <FontAwesomeIcon icon={faFire} />,
      };
    }
    if (type === 'fighting') {
      return {
        color: '#ff1a1a',
        icon: <FontAwesomeIcon icon={faHandRock} />,
      };
    }
    if (type === 'flying') {
      return {
        color: '#d9b3ff',
        icon: <FontAwesomeIcon icon={faFeatherAlt} />,
      };
    }
    if (type === 'grass') {
      return {
        color: '#33ff33',
        icon: <FontAwesomeIcon icon={faLeaf} />,
      };
    }
    if (type === 'poison') {
      return {
        color: '#9900cc',
        icon: <FontAwesomeIcon icon={faSkull} />,
      };
    }
    if (type === 'ground') {
      return {
        color: '#996600',
        icon: <FontAwesomeIcon icon={faGlobeEurope} />,
      };
    }
    if (type === 'psychic') {
      return {
        color: '#ff0066',
        icon: <FontAwesomeIcon icon={faBrain} />,
      };
    } if (type === 'rock') {
      return {
        color: '#558000',
        icon: <FontAwesomeIcon icon={faDiceD20} />,
      };
    } if (type === 'ice') {
      return {
        color: '#99ddff',
        icon: <FontAwesomeIcon icon={faSnowflake} />,
      };
    }
    if (type === 'bug') {
      return {
        color: '#99e600',
        icon: <FontAwesomeIcon icon={faBug} />,
      };
    }
    if (type === 'dragon') {
      return {
        color: '#6600cc',
        icon: <FontAwesomeIcon icon={faDragon} />,
      };
    } if (type === 'ghost') {
      return {
        color: ' #800040',
        icon: <FontAwesomeIcon icon={faGhost} />,
      };
    } if (type === 'dark') {
      return {
        color: '#663300',
        icon: <FontAwesomeIcon icon={faAdjust} />,
      };
    } if (type === 'steel') {
      return {
        color: '#e6ccff',
        icon: <FontAwesomeIcon icon={faDrumSteelpan} />,
      };
    } if (type === 'fairy') {
      return {
        color: '#ffcce6',
        icon: <FontAwesomeIcon icon={faHatWizard} />,
      };
    }
    return '';
  };

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
                    {pokemon?.types.map((type) => {
                      const { color, icon } = chipColor(type.type.name);
                      return (
                        <div key={type.type.name}>
                          <Chip
                            style={{ backgroundColor: color, margin: 4 }}
                            variant="outlined"
                            size="medium"
                            label={capitalize(type.type.name)}
                            icon={icon}
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
            )}
          </CardActionArea>
        </Card>
      </Link>
    </>
  ) : null;
}

export default PokemonCard;
