import { useNavigate } from 'react-router-dom';
import { registerUser } from '../services/registerService.js';

export function Register() {
    
    const navigate = useNavigate();

    function sendRegisterForm(event) {
        event.preventDefault();

        const username =  event.target[0].value;
        const password =  event.target[1].value;
        
        registerUser(username, password)
            .then((response) => response.json())
            .then((data) => {
                localStorage.setItem("token", data.token);
                navigate("/");
            }) 

    }
    return (
        <>
        <div className="RegistrationForm">
            <form onSubmit={sendRegisterForm}>
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