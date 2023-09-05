import { Routes, Route } from 'react-router-dom'
import { Home, Projects } from '../pages'

export const AllRoutes = () => {
  return (
    <div className="dark:bg-gray-800 bg-gray-100">
        <Routes>
            <Route path="" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
        </Routes>
    </div>  
  )
}
