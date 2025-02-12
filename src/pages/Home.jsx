import '../App.css'
import { useState, useEffect } from 'react';
import { Navigation } from '../components/Navigation.jsx'
import { ProjectsSideBar } from '../components/ProjectsSideBar.jsx';
import { CenterZone } from '../components/CenterZone.jsx';

export function Home() { 
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [dogImages, setDogImages] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            setIsAuthenticated(true)
        }
    }, [])

    function getDog() {
      fetch("https://dog.ceo/api/breeds/image/random")
            .then((response) => response.json())
            .then((data) => {
              setDogImages((prevImages)=> [...prevImages, data.message])
            })
    }

    return (
        <>
            {isAuthenticated ? (
                <main>
                    <ProjectsSideBar />
                    <CenterZone />
                </main>
            ) : (
                <h1>Please authorize first</h1>
            )}
        </>
    )
}
