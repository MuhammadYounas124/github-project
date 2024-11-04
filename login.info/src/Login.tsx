import './App.css'
import {useState} from 'react';
const Login = () => {
     // State to store email and passwords
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
 };

 return (
    <div>
        <div className="login-form">
            <h2>Login Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input
                    type='email'
                    id='email'
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    required
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password:</label>
                    <input
                    type='password'
                    id='password'
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    required
                    />
                </div>
                <button type='submit'>Login</button>
            </form>
        </div>
    </div>
) ;
};

export default Login;