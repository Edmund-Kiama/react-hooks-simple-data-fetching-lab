// create your App component here
import React,{ useEffect } from "react";
import { useState } from "react";
 
export default function App () {
    const [ isData, setIsData] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setIsData(data.message)
                setIsLoaded(true)
            })
    },[])
    if (!isLoaded) {
        return <p>Loading...</p>
    }

    return <img src={isData} alt="A Random Dog" />
}
