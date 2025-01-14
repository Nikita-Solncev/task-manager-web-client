import { useNavigate } from 'react-router-dom';

export function Register() {
    
    const navigate = useNavigate();

    function sendRegisterForm(event) {
        event.preventDefault();

        const URL = "http://127.0.0.1:5000/register";

        const options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: event.target[0].value, 
                password: event.target[1].value
            })
        }

        console.log(event.target[0].value);
        console.log(event.target[1].value);
        console.log(options)

        fetch(URL, options)
            .then((response) => response.json())
            .then((data) => {
                localStorage.setItem("token", data.token);
                debugger
                console.log(data);
                navigate("/");
            }) 

        console.log("form submited")
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