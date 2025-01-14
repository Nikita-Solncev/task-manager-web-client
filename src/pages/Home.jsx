import '../App.css'
import { useState, useEffect } from 'react';
import { Navigation } from '../components/Navigation'

export function Home() { 
    const [isAuthenticated, setIsAuthenticated] = useState(false)

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
        .then((response) => {
          console.log(response.message);
          const container = document.getElementsByClassName("image-container")[0];
          const imageElement = document.createElement("img");
          imageElement.src = response.message;
          console.log(container)
          console.log(imageElement)
          container.appendChild(imageElement)
        })
    }

    console.log(localStorage.getItem("token"))
    return (
    <>
    {isAuthenticated ? 
      (<main>
          <h1>You are at HOME page</h1>
          <button onClick={getDog}>get dog</button>
          <div className="image-container"></div>
      </main>):
      (<h1>Plesase authorizate first</h1>)
    }
    </>
    )
}
