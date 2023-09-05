import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages'

export const AllRoutes = () => {
  return (
    <div className="dark:bg-gray-800 bg-gray-100">
        <Routes>
            <Route path="" element={<Home />} />
        </Routes>
    </div>
    
  )
}
