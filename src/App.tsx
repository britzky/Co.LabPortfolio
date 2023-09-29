import { Footer, Header } from './components'
import {BrowserRouter as Router} from 'react-router-dom'
import { Home, Joke, Projects } from './pages'

function App() {

  return (
    <div className="dark:bg-gray-800">
      <Router>
        <Header />
        <Home />
        <Projects />
        <Joke />
        <Footer />
      </Router>
    </div>
  )
}

export default App
