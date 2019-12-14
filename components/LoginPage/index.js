const LoginPage = ({ token }) => (
  <div>
    <h1>Logined!</h1>
    <p>{JSON.stringify(token)}</p>
  </div>
);

export default LoginPage;
