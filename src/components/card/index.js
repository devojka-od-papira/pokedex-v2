import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
});
function PokemonCard() {
  const classes = useStyles();
  return (
    <div>
      <Card>
       <CardActionArea>
       </CardActionArea>
      </Card>
    </div>
  );
}

export default PokemonCard;