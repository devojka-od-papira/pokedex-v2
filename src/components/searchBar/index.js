import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { fade, makeStyles } from '@material-ui/core/styles';
import { Icon } from '@iconify/react';
import pokeballIcon from '@iconify/icons-mdi/pokeball';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.2),
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.3),
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
    width: '100%',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(16)}px)`,
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

function SearchBar() {
  const classes = useStyles();

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
