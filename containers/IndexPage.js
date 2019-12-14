import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import IndexPage from '../components/IndexPage';
import * as LoginActions from '../actions/login';

const mapStateToProps = ({ login: { token } }) => ({ token });

const mapDispatchToProps = dispatch =>
  bindActionCreators(LoginActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
