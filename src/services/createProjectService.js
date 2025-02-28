export async function createProject(projectName) {
    const URL = "/api/projects";
    const token = localStorage.getItem("token");

    const options = {
        method: 'POST',
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        credentials: 'include',
        body: JSON.stringify({name: projectName})
    }
    
    console.log(options);

    return await fetch(URL, options);
}
    