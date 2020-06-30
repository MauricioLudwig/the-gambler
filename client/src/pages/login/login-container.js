import { connect } from 'react-redux';
import Login from './login';
import { createLoadingSelector, createErrorMessageSelector } from '../../utilities/api-selectors';
import { login } from '../../services/auth';

const loading = createLoadingSelector(['LOGIN']);
const loadingError = createErrorMessageSelector(['LOGIN']);

const mapStateToProps = state => ({
  loading: loading(state),
  loadingError: loadingError(state)
});

export default connect(
  mapStateToProps,
  { login }
)(Login);