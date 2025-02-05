export async function registerUser(username, password) {
    const URL = "http://127.0.0.1:5000/register";

    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username, 
            password: password
        })
    }

    return await fetch(URL, options)
}
