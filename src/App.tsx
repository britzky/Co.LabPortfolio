import { Footer, Header } from './components'
import './App.css'
import { AllRoutes } from './routes/AllRoutes'
import {BrowserRouter as Router} from 'react-router-dom'

function App() {

  return (
    <>
      <Router>
        <Header />
        <AllRoutes />
        <Footer />
      </Router>
    </>
  )
}

export default App
