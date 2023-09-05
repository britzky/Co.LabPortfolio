import me from '../assets/me.jpg'
import { InfoCard } from '../components'

export const Home = () => {
  return (
    <main>
        <div className="flex flex-col items-center p-2">
            <img className="rounded-2xl w-48 m-3" src={me} alt="Smiling man" />
            <h1 className="text-2xl font-bold">Software Engineer</h1>
            <h1 className="text-2xl font-bold">+</h1>
            <h1 className="text-2xl font-bold">Lunch Fanatic</h1>
        </div>
        <div>
            <InfoCard 
                title="About me"
                description="Hey there! I'm John, a Software Engineer from Pittsfield, MA. My favorite languages are JavaScript and Python, lately I've been interested in Golang too.
                When I'm not honing my skills as a Software Engineer, I like to play discgolf or go for hikes."
            />
        </div>
    </main>
  )
}
