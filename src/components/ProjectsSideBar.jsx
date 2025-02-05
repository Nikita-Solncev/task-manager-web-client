import "./ProjectsSideBar.css"
export function ProjectsSideBar() {
    return(
        <aside className="sidebar">
        <h2 className="sidebar-title">All projects</h2>
        <ul className="project-list">
            <li className="project-item">Project 1</li>
            <li className="project-item">Project 2</li>
            <li className="project-item">Project 3</li>
            <li className="project-item">Project 4</li>
            <li className="project-item">Project 5</li>
        </ul>
    </aside>
    )
}