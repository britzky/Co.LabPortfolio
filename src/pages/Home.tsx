import me from '../assets/me.jpg'
import { InfoCard } from '../components'

export const Home = () => {

  return (
    <main id="about" className="bg-emerald-50">
        <div className="flex flex-col items-center p-2 max-w-screen-xl mx-auto relative py-16">
            <div className="absolute top-2/3 left-1/4 transform translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-72 sm:h-72 bg-amber-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/2 transform -translate-y-1/2 w-48 h-48 sm:w-72 sm:h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-2/3 right-1/4 transform -translate-y-1/2 -translate-x-1/2 w-48 h-48 sm:w-72 sm:h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                <img className=" z-10 rounded-xl w-44 m-3" src={me} alt="Smiling man" />
                <h1 className="text-2xl font-bold">Software Engineer</h1>
                <h1 className="text-2xl font-bold">+</h1>
                <h1 className="text-2xl font-bold">Christmas Fanatic</h1>
        </div>
        <div className="grid sm:grid-cols-2 gap-7">
            <div className="m-5 rounded-xl z-10">
            <InfoCard 
                title="About me"
                description="Hey there! I'm John, a Software Engineer from Pittsfield, MA. My favorite languages are JavaScript and Python, lately I've been interested in Golang too.
                When I'm not honing my skills as a Software Engineer, I like to play discgolf or go for hikes."
            />
            </div>
            <div className="m-5 rounded-xl z-10">
                <InfoCard
                    title="Early Career" 
                    description="I started my career in restaurants as a dishwasher. Over the years, through hard work and education, I worked my way up to executive chef. My time in restaurants taught me a lot about working in general and I see a lot of parallels with software engineering."
                />
            </div>
        </div>
        <div className="m-5 z-10">
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
    </main>
  )
}
