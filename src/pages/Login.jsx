import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/loginService.js';
import { useAuth } from '../context/AuthContext';

export function Login() {
    const { setIsAuthenticated } = useAuth();
    const navigate = useNavigate();
    
    function sendLoginForm(event) {
        event.preventDefault();

        const username =  event.target[0].value;
        const password =  event.target[1].value;

        loginUser(username, password)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Login failed');
                }
                return response.json();
            })
            .then((data) => {
                console.log('Login successful:', data);
                localStorage.setItem("token", data.token);
                setIsAuthenticated(true);
                navigate("/");
            })
            .catch(error => {
                console.error('Login error:', error);
            });
    }
    return (
        <>
        <div className="LoginForm">
            <form onSubmit={sendLoginForm}>
                <div>
                    <label>Username</label>
                    <input name="username" type="text"/>
                </div>
                <div>
                    <label>Password</label>
                    <input name="password" type="password"/>
                </div>
                <div>
                    <button type="submit">Enter</button>
                </div>
            </form>
        </div>
        </>
    )
}