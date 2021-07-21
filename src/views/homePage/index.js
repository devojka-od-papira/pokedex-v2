import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchBar from '../../components/searchBar';
import { fetchPokemons } from '../../redux/actions';

function Home({ fetchPokemonsAction }) {
  useEffect(() => {
    fetchPokemonsAction();
  }, []);

  return (
    <div>
      <SearchBar />
      Home
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPokemonsAction: bindActionCreators(fetchPokemons, dispatch),
  };
}
export default connect(null, mapDispatchToProps)(Home);
