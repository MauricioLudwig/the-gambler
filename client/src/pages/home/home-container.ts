import { connect } from 'react-redux';
import { createLoadingSelector } from '../../utilities/api-selectors';
import { getProfile, signOut } from '../../services/auth';
import { getMessages } from '../../services/messages';
import { getGames } from '../../services/games';
import { addMessage } from '../../actions/messages';
import { raiseLevel } from '../../actions/auth';
import Home from './home';

const loadingInitialData = createLoadingSelector([
  'GET_MESSAGES',
  'GET_GAMES',
  'GET_PROFILE'
]);

const mapStateToProps = state => ({
  user: state.auth,
  loadingInitialData: loadingInitialData(state)
});

export default connect(
  mapStateToProps,
  {
    getProfile,
    getMessages,
    getGames,
    addMessage,
    raiseLevel,
    signOut,
  }
)(Home);