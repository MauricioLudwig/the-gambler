import { connect } from 'react-redux';
import { createLoadingSelector, createErrorMessageSelector } from '../../utilities/api-selectors';
import { signOut } from '../../services/auth';
import { getMessages } from '../../services/messages';
import { addMessage } from '../../actions/messages';
import Home from './home';

const loadMessages = createLoadingSelector(['GET_MESSAGES']);
const signingOut = createLoadingSelector(['LOGOUT']);

const mapStateToProps = state => ({
  user: state.auth,
  messages: state.messages,
  loadMessages: loadMessages(state),
  signingOut: signingOut(state)
});

export default connect(
  mapStateToProps,
  {
    addMessage,
    getMessages,
    signOut
  }
)(Home);