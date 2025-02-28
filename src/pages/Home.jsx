import '../App.css'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProjectsSideBar } from '../components/ProjectsSideBar/ProjectsSideBar.jsx';
import { useAuth } from '../context/AuthContext';
import { getProjects } from '../services/getProjectsService.js';

export function Home() { 
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/register');
        }
        
        getProjects()
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch projects');
                }
                return response.json();
            })
            .then((data) => {
                const projectsArray = Array.isArray(data.projects) ? data.projects : [];
                setProjects(projectsArray);
            })
            .catch(error => {
                console.error('Error fetching projects:', error);
                setProjects([]);
            });
    }, [isAuthenticated, navigate]);

    return isAuthenticated ? (
        <main>
            <ProjectsSideBar projects={projects} />
        </main>
    ) : null;
}
