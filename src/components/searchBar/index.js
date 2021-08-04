/* eslint-disable max-len */
import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import {
  alpha, makeStyles, AppBar, Toolbar, InputBase, Button,
} from '@material-ui/core';
import { Icon } from '@iconify/react';
import pokeballIcon from '@iconify/icons-mdi/pokeball';

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.2),
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.3),
    },
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '400px',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '100%',
    },
  },
  buttonIcon: {
    marginRight: theme.spacing(2),
    position: 'absolute',
    right: theme.spacing(2),
    backgroundColor: 'white',

    '&:hover': {
      backgroundColor: '#ff3509',
      '& svg ': {
        color: 'white',
      },
    },
  },
  ballIcon: {
    color: '#ff3509',
    iconSize: '50x50',
  },
  form: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },

}));

function SearchBar({ pokemonsData, filterPokemons, setFilteredPokemonActive }) {
  const classes = useStyles();

  console.log('pokemoni', pokemonsData);
  function handleChange(event) {
    console.log('eventTarget', event.target.value.length);
    if (event.target.value.length !== 0) {
      setFilteredPokemonActive(true);
    } else {
      setFilteredPokemonActive(false);
    }
    const filteredPokemons = pokemonsData.filter((pokemon) => pokemon.name.includes(event.target.value));
    console.log('filtered', filteredPokemons);
    filterPokemons(filteredPokemons);
  }

  return (
    <div>
      <AppBar className={classes.form} position="static">
        <Toolbar>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <form className={classes.form}>
              <InputBase
                placeholder="Search…"
                onChange={handleChange}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
              <Button className={classes.buttonIcon}>
                <Icon className={classes.ballIcon} icon={pokeballIcon} />
              </Button>
            </form>
          </div>
        </Toolbar>
      </AppBar>

    </div>
  );
}
export default SearchBar;
