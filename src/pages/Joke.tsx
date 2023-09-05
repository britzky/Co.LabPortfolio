import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import chuck from '../assets/chuck-norris.jpg'

export const Joke = () => {
    const [joke, setJoke] = useState("")
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<Boolean>(true)
    const navigate = useNavigate()

    const getJoke = async () => {
        setLoading(true)
        try {
            const response = await fetch('https://api.chucknorris.io/jokes/random')
            if(!response.ok){
                navigate('/')
            }
            const data = await response.json()
            setJoke(data.value)
            setError(null)
        } catch(error) {
            if (error instanceof Error){
                setError(error.message)
            }
        } finally {
            setLoading(false)
        }
    }
    
    useEffect(() => {
        getJoke();
    }, [])

    if (loading) {
        return <main>Loading...</main>
    }

    if (error) {
        return <main>{error}</main>
    }

  return (
    <main>
        <div className="flex flex-col gap-2 py-7 items-center">
            <h1 className="text-2xl font-bold">Random Chuck Norris joke</h1>
            <p>I chose this as my API because there are a ton of Chuck Norris jokes I dont know yet.</p>
    
            <img src={chuck} alt="Chuck Norris" className="rounded-lg" />
            {joke && <p>{joke}</p>}
            <button onClick={getJoke} type="button" className="focus:outline-none text-white bg-pink-400 hover:bg-pink-600 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-pink-500 dark:hover:bg-pink-600 dark:focus:ring-pink-700">More Chuck!</button>
        </div>
        
    </main>
  )
}
