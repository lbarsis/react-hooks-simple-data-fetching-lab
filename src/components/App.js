// create your App component here
import { useEffect, useState } from "react";

function App() {
  const [dog, setDog] = useState('https://dog.ceo/api/breeds/image/random')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(r => r.json())
      .then(data => {
        if (!data) {
          setIsLoaded(false)
        } else {
          setIsLoaded(true)
          setDog(data.message)
        }
      })
  }, [])

  return (
    <div>
      {isLoaded ? <img src={dog} alt="A Random Dog" /> : <p>{isLoaded ? null : "Loading..."}</p>}
    </div>
  )
}

export default App