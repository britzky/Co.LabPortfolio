import { useState } from "react"
import {Link, NavLink } from 'react-router-dom'
import logo from '../assets/me.jpg'

export const Header = () => {
    const [hidden, setHidden] = useState(true);

    const activeClass = "text-base block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
    const inActiveClass= "text-base block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"

  return (
    <header>
        <nav className="bg-white border-b-2 px-2 sm:px-4 py-2 border-gray-200 dark:border-b-1 dark:border-gray-900 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between m-auto">
                <Link to="/" className="flex items-center">
                    <img src={logo} alt="Smiling man" className="h-8 mr-2 sm:h-9 rounded-md" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">John Clapper</span>
                </Link>

                <div className="flex md:order-2">
                    <button onClick={() => setHidden(!hidden)} data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                        <span className="sr-only">Open menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                </div>

                <div id="nav-links" className={`${hidden ? "hidden " : "" }items-center justify-between w-full md:flex md:w-auto md:order-1`}>
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <NavLink to="/" className={({isActive}) => isActive ? activeClass : inActiveClass} end>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="projects" className={({isActive}) => isActive ? activeClass : inActiveClass}>Projects</NavLink>
                        </li>
                        <li>
                            <NavLink to="joke" className={({isActive}) => isActive ? activeClass : inActiveClass}>Random joke</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
  )
}
