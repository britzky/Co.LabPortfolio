import { Footer, Header } from './components'
import {BrowserRouter as Router} from 'react-router-dom'
import { Home, Joke, Projects } from './pages'

function App() {

  return (
    <div className="dark:bg-gray-800">
      <Router>
        <Header />
        <Home />
        <div className="bg-pink-300 flex justify-around py-2">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain-wordmark.svg" alt="python-icon" className="w-24" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" alt="flask-icon" className="w-24" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql-icon" className="w-24" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original-wordmark.svg" alt="sqlalchemy-icon" className="w-24" /> 
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="html-icon" className="w-24" />         
        </div>
        <Projects />
        <div className="bg-emerald-300 flex justify-around py-2">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" alt="javascript-icon" className="w-24" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="react-icon" className="w-24" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg" alt="next-icon" className="w-24" />      
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="typescript-icon" className="w-24" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="css-icon" className="w-24" />          
        </div>
        <Joke />
        <div className="bg-amber-300 flex justify-around py-2">  
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="linux-icon" className="w-24" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-plain-wordmark.svg" alt="azure-icon" className="w-24" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg" alt="firebase-icon" className="w-24" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" alt="tailwind-icon" className="w-24" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-plain.svg" alt="mui-icon" className="w-24"/>
          
        </div>
        <Footer />
      </Router>
    </div>
  )
}

export default App
