const App = () => {
  return (
    <div className="login-container">
      <h2 className="form-title">Log in with</h2>
      <div className="social-login">
        <button className="social-button">
        <img src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo" className="social-icon"/>
        Google
        </button>
        <button className="social-button">
        <img src="https://img.icons8.com/ios-filled/50/mac-os.png" alt="mac-os" className="social-icon"/>
        Apple
        </button>
      </div>
      <p className="seperator"><span>or</span></p>

      <form action="#" className="login-form">
        <div className="input-wrapper">
         <input type="email" placeholder="Email address" className="input-field" required />
         <i className="material-symbols-outlined">mail</i>
        </div>
        
        <div className="input-wrapper">
         <input type="password" placeholder="Password" className="input-field" required />
         <i className="material-symbols-outlined">lock</i>
        </div>
          <a href="#" className="forgot-pass-link">Forgot Password</a>

          <button className="login-button">Log In</button>
      </form>  
        <p className="signup-text" >Don&apos;t have an account?
        <a href="#">Signup now</a></p>
          </div>
  )
}

export default App;

