import React from 'react'

const socialLogin = () => {
  return (
    <div>
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
    </div>
  )
}

export default socialLogin
