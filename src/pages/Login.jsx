import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/loginService.js';

export function Login() {

    const navigate = useNavigate();
    
    function sendLoginForm(event) {
        event.preventDefault();

        const username =  event.target[0].value;
        const password =  event.target[1].value;

        loginUser(username, password)
            .then((response) => response.json())
            .then((data) => {
                localStorage.setItem("token", data.token);
                console.log(data);
                navigate("/");
            }) 

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