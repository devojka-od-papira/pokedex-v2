import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { fetchPokemon } from '../../services/pokemon';

const useStyles = makeStyles({
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

  function Capitalize(string) {
    return string && string[0].toUpperCase() + string.slice(1);
  }

  return (
    <div>
      <Card>
        <CardActionArea>
          <div>
            <Typography>{Capitalize(name)}</Typography>
            <CardMedia>
              <img src={pokemon?.sprites?.front_shiny} alt="pokemon" />
            </CardMedia>
          </div>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default PokemonCard;
