import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createLoadingSelector, createErrorMessageSelector } from '../../utilities/api-selectors';
import { signIn } from '../../services/auth';
import Login from './login';

const loading = createLoadingSelector(['LOGIN']);
const loginError = createErrorMessageSelector(['LOGIN']);

const mapStateToProps = state => ({
  loading: loading(state),
  loginError: loginError(state)
});

export default withRouter(connect(
  mapStateToProps,
  { signIn }
)(Login));