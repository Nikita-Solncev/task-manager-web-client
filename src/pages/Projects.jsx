import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { getProjects } from '../services/getProjectsService.js';
import { createProject } from '../services/createProjectService.js';
import { ProjectCard } from '../components/ProjectCard/ProjectCard.jsx';
import { ProjectsHeader } from '../components/ProjectsHeader/ProjectsHeader.jsx';
import './css/Projects.css';

export function Projects() {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login');
            return;
        }
        fetchProjects();
    }, [isAuthenticated, navigate]);

    const fetchProjects = async () => {
        try {
            const response = await getProjects();

            if (!response.ok) {
                throw new Error('Failed to fetch projects'); 
            }
            const data = await response.json(); 
            console.log(data);
            // Преобразуем объект проектов в массив с нужной структурой
            const projectsArray = Object.entries(data).map(([projectId, projectData]) => ({
                id: parseInt(projectId),
                projectId: projectData.id,
                role: projectData.role,
                userId: projectData.userId,
                name: projectData.name
            }));
            
            setProjects(projectsArray);
            console.log('Transformed projects:', projectsArray);
        } catch (error) {
            setError('Failed to load projects');
            console.error('Error:', error);       
        } finally {
            setIsLoading(false);
        }
    };

    const handleCreateProject = async () => {
        const projectName = prompt('Enter project name:');
        console.log(projectName);
        if (!projectName) return;

        try {
            const response = await createProject(projectName);
            if (!response.ok) throw new Error('Failed to create project');
            fetchProjects();
        } catch (error) {
            setError('Failed to create project');
            console.error('Error:', error);
        }
    };

    if (!isAuthenticated) return null;

    return (
        <div className="projects-container">
            <ProjectsHeader onCreateProject={handleCreateProject} />
            
            {isLoading && <div className="loading-message">Loading projects...</div>}
            {error && <div className="error-message">{error}</div>}

            <div className="projects-grid">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        onClick={() => navigate(`/projects/${project.id}`)}
                    />
                ))}
            </div>

            {!isLoading && projects.length === 0 && (
                <div className="empty-message">
                    No projects yet. Create your first project!
                </div>
            )}
        </div>
    );
}

