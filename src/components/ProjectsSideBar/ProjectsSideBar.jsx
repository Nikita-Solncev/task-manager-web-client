import "./ProjectsSideBar.css"

export function ProjectsSideBar({ projects }) {
    // Преобразуем объект проектов в массив, если он еще не массив
    const projectsList = Array.isArray(projects) 
        ? projects 
        : Object.entries(projects).map(([id, project]) => ({
            id: parseInt(id),
            ...project,
            name: `Project ${id}`
        }));
    
    return(
        <aside className="sidebar">
            <h2 className="sidebar-title">All projects</h2>
            <ul className="project-list">
                {projectsList.map((project) => (
                    <li key={project.id} className="project-item">
                        <span className="project-name">{project.name}</span>
                        <div className="project-details">
                            <span className="project-role">{project.role}</span>
                            <span className="project-user">ID: {project.userId}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </aside>
    )
}