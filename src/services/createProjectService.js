export async function getProjects() {
    const URL = "http://127.0.0.1:5000/projects";

    const token = localStorage.getItem("token");

    const options = {
        method: 'POST',
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    }       // not finished

    return await fetch(URL, options)
}
