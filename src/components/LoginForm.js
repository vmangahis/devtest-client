import React from 'react'

const LoginForm = () => {
  return (
    <form className="login-form" >

        <div className="form-control">
            <label for="username-input">Username</label>
            <input type="text" />
        </div>

        <div className="form-control">
            <label for="password-input">Password</label>
            <input type="password"  className="password-input"/>
        </div>

    </form>
  )
}

export default LoginForm