import React from 'react';

// Define the type for the props
interface LoginProps {
  setIsLoggedIn: (value: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ setIsLoggedIn }) => {
  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    // Simulate login success
    setIsLoggedIn(true); // Updates the state in App.tsx to navigate to Home
  };

  return (
    <div className="login-container">
      <h2 className="form-title">Log in with</h2>
      <div className="social-login">
        <button className="social-button">
          <img src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo" className="social-icon" />
          Google
        </button>
        <button className="social-button">
          <img src="https://img.icons8.com/ios-filled/50/mac-os.png" alt="mac-os" className="social-icon" />
          Apple
        </button>
      </div>

      <p className="separator"><span>or</span></p>

      <form onSubmit={handleLogin} className="login-form">
        <div className="input-wrapper">
          <input type="email" placeholder="Email address" className="input-field" required />
          <i className="material-symbols-outlined">mail</i>
        </div>

        <div className="input-wrapper">
          <input type="password" placeholder="Password" className="input-field" required />
          <i className="material-symbols-outlined">lock</i>
        </div>

        <a href="#" className="forgot-pass-link">Forgot Password</a>

        <button type="submit" className="login-button">Log In</button>
      </form>

      <p className="signup-text">Don&apos;t have an account?&nbsp;
        <a href="#">Signup now</a>
      </p>
    </div>
  );
};

export default Login;

