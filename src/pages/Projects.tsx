import taskManager from '../assets/taskManager.png'
import cinemaCenter from '../assets/cinema-center.png'
import britzkysDungeon from '../assets/expandedCharactersImage.png'
import weatherReport from '../assets/weatherImage.png'
import { ProjectCard } from "../components"

export const Projects = () => {
  return (
    <main>
      <div className="flex flex-col items-center gap-5 py-7 ">
        <h1 className="text-2xl font-bold">Projects</h1>
          <ProjectCard
            title="Weather Report"
            description="Access current high, low, forecast, and humidity based on zipcode input.
            Built with HTML, CSS, JavaScript, and openweathermap.org API.
            Asynchronous operations for seamless data fetching, dynamic background images, and intuitive UI."
            image={weatherReport}
            live="https://www.loom.com/share/87f0225171204086a074e6967479abd2"
            github="https://github.com/britzky/WeatherReport"
            />
        <ProjectCard
          title="Task Manager"
          description="Efficiently manage daily tasks, projects, and one-time events. 
          Offers theme cusomization, local storage, an intuitive UI, and responsive design.
          Build with JavaScript, React, HTML, CSS, and JSX. Provides seamless task management and personalization across devices."
          image={taskManager}
          live="https://britzkys-task-manager.netlify.app"
          github="https://github.com/britzky/task-manager"
          reverse
          />
        <ProjectCard
          title="Cinema Center"
          description="An immersive movie browsing experience made for movie lovers. 
          Showcases various movie lists including Now Playing, Popular, Top Rated, and Upcoming movies. 
          Equipped with a detailed page for every movie, search functionality, dynamic routing, and a dark mode toggle. 
          Constructed using JavaScript, React, Tailwind CSS, Flowbite, React Router Dom, and TMDB API. 
          Featuring an easy-to-navigate UI, responsive design, and personalized browsing experience regardless of the device"
          image={cinemaCenter} 
          live="https://cinema-center.netlify.app/"
          github="https://github.com/britzky/cinema-center"
          />
        <ProjectCard
          title="Britzky's Dungeon"
          description=" Interactive Dungeons and Dragons Character Builder.
          Create & save custom characters with race, class, alignment, and background.
          Built with React, Material UI, and Firebase.
          API integration for data, full CRUD operations, and interactive character cards."
          image={britzkysDungeon}
          live="https://gilded-squirrel-0bbe73.netlify.app"
          github="https://github.com/britzky/React_Character_Selector"
          reverse
          />
      </div>
    </main>
  )
}
