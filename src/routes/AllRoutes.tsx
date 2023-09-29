import { Routes, Route } from 'react-router-dom'
import { Home, Projects, Joke } from '../pages'

export const AllRoutes = () => {
  return (
    <div className="dark:bg-gray-800 bg-gray-100">
        <Routes>
            <Route path="/about" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/joke" element={<Joke />} />
        </Routes>
    </div>  
  )
}
