import { connect } from 'react-redux';
import MessageList from './message-list';

const mapStateToProps = state => ({
  messages: state.messages
});

export default connect(
  mapStateToProps
)(MessageList);