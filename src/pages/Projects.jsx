import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { getProjects } from '../services/getProjectsService.js';

export function Projects() {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login');
        }

        getProjects()
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch projects');
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
            })
            .catch(error => {
                console.error('Error fetching projects:', error);
            });
    }, [isAuthenticated, navigate]);

    return isAuthenticated ? (
        <main>
            <h1>Hi</h1>
        </main>
    ) : null;
}

