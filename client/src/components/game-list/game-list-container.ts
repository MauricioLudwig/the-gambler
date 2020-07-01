import { connect } from 'react-redux';
import GameList from './game-list';

const mapStateToProps = state => ({
  games: state.games
});

export default connect(
  mapStateToProps
)(GameList);