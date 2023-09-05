import me from '../assets/me.jpg'
import resume from '../assets/John_Clapper_Resume.pdf'
import { InfoCard } from '../components'

export const Home = () => {
    
    const openResume = () => {
        window.open(resume, '_blank')
    }

  return (
    <main>
        <div className="flex flex-col items-center p-2">
            <img className="rounded-2xl w-48 m-3" src={me} alt="Smiling man" />
            <h1 className="text-2xl font-bold">Software Engineer</h1>
            <h1 className="text-2xl font-bold">+</h1>
            <h1 className="text-2xl font-bold">Lunch Fanatic</h1>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
            <div >
            <InfoCard 
                title="About me"
                description="Hey there! I'm John, a Software Engineer from Pittsfield, MA. My favorite languages are JavaScript and Python, lately I've been interested in Golang too.
                When I'm not honing my skills as a Software Engineer, I like to play discgolf or go for hikes."
            />

            </div>
            <InfoCard
                title="Early Career" 
                description="I started my career in restaurants as a dishwasher. Over the years, through hard work and education, I worked my way up to executive chef. My time in restaurants taught me a lot about working in general and I see a lot of parallels to software engineering."
            />
        </div>
        <div className="my-2">
            <InfoCard
                title="Parallels"
                isList={true}
                listItems={[
                    "Creativity: As a Chef I was able to build menus and menu items that compliment eachother similar to a software engineer choosing tools and technologies that would compliment eachother",
                    "Problem Solving: In both professions we need to be able to adapt to unexpected issues constantly in a calm and professional manor.",
                    "Team work: Managing a team and working in team based settings for most of my life taught me how important communication is."
                ]} 
            />
        </div>
        <div className="flex flex-col">
            <button onClick={openResume} type="button" className="focus:outline-none text-white bg-emerald-400 hover:bg-emerald-600 focus:ring-4 focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">My Resume</button>
        </div>
    </main>
  )
}
