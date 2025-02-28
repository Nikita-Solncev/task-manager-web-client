import './ProjectCard.css';

export function ProjectCard({ project, onClick }) {
    return (
        <div className="project-card" onClick={onClick}>
            <h2 className="project-title">{project.name}</h2>
            <div className="project-info">
                <span className="project-role">Role: {project.role}</span>
            </div>
        </div>
    );
} 