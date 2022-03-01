import "./login.css";
const Login = () => {
  return (
    <div className="login login-form">
      <img src="./images/login.png" alt="login img" />
      <form action="" className="center-v">
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <hr noshade="noshade" />
        <div className="google-login">
          <img src="./images/google-login.png" alt="" />
        </div>
        <div className="login-btn">Log In</div>
      </form>
    </div>
  );
};

export default Login;
