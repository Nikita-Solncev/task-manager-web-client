import '../App.css'
import { useState, useEffect } from 'react';
import { Navigation } from '../components/Navigation.jsx'
import { ProjectsSideBar } from '../components/ProjectsSideBar.jsx';
import { CenterZone } from '../components/CenterZone.jsx';

export function Home() { 
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [dogImages, setDogImages] = useState([]);

    useEffect(
      () => {
        const token = localStorage.getItem("token")
        if (token) {
          setIsAuthenticated(true)
        }
      },
      []
    )

    function getDog() {
      fetch("https://dog.ceo/api/breeds/image/random")
            .then((response) => response.json())
            .then((data) => {
              setDogImages((prevImages)=> [...prevImages, data.message])
            })
    }

    return (
    <>
    {isAuthenticated ? 
      (<main>
        <ProjectsSideBar></ProjectsSideBar>
        <CenterZone></CenterZone>










{/* 
          <button onClick={getDog}>get dog</button>
          <div className="image-container">{dogImages.map((url, inx) => (
            <img key={inx} src={url} alt="" />
          ) )}</div> */}

      </main>):
      (<h1>Plesase authorizate first</h1>)
    }
    </>
    )
}
