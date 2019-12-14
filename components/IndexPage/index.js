import PropTypes from 'prop-types';
import FacebookLogin from 'react-facebook-login';
import './style.scss';

const IndexPage = ({
  login,
}) => (
  <main id='login-page'>
    <h1>Admin Login</h1>
    <h3>Welcome to share your thought. Make a different.</h3>
    <FacebookLogin
      appId=''
      autoLoad={true}
      redirectUri='/login'
      fields='name,email,picture'
      callback={login}
    />
  </main>
);

IndexPage.propTypes = {
  login: PropTypes.func.isRequired,
};

export default IndexPage;
