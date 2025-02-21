import "./ProjectsSideBar.css"

export function ProjectsSideBar({ projects }) {
    const projectsList = Array.isArray(projects) ? projects : [];
    
    return(
        <aside className="sidebar">
            <h2 className="sidebar-title">All projects</h2>
            <ul className="project-list">
                {projectsList.map((project) => (
                    <li key={project.id} className="project-item">
                        {project.name}
                    </li>
                ))}
            </ul>
        </aside>
    )
}