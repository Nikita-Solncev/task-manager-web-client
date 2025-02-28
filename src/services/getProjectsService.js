export async function getProjects() {
    const URL = "/api/projects";

    const token = localStorage.getItem("token");

    const options = {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        credentials: 'include'
    }
    return await fetch(URL, options)
}
