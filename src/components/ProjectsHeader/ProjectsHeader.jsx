import './ProjectsHeader.css';

export function ProjectsHeader({ onCreateProject }) {
    return (
        <div className="projects-header">
            <h1 className="projects-title">My Projects</h1>
            <button className="create-project-btn" onClick={onCreateProject}>
                Create New Project
            </button>
        </div>
    );
} 