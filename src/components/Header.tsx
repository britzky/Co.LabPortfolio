import { useEffect, useState } from "react"
import logo from '../assets/me.jpg'
import resume from '../assets/John_Clapper_Resume.pdf'


export const Header = () => {
    const [hidden, setHidden] = useState(true);
    const [activeHash, setActiveHash] = useState(window.location.hash || "");

    const openResume = () => {
        window.open(resume, '_blank')
    }

    useEffect(() => {
        const handleHashChange = () => {
            setActiveHash(window.location.hash)
        };
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange)
    }, [])

    const activeClass = "text-base block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 "
    const inActiveClass= "text-base block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"

  return (
    <header className="fixed top-0 w-full z-20">
        <nav className="bg-white border-b-2 px-2 sm:px-4 py-2 border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between m-auto">
                <a href="#about" className={`${activeHash === "#projects" ? activeClass : inActiveClass} flex items-center`}>
                    <img src={logo} alt="Smiling man" className="h-8 mr-2 sm:h-9 rounded-md " />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap ">John Clapper</span>
                </a>

                <div className="flex md:order-2">
                <button onClick={openResume} type="button" className="focus:outline-none text-white bg-emerald-400 hover:bg-emerald-600 focus:ring-4 focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">My Resume</button>

                    <button onClick={() => setHidden(!hidden)} data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-search" aria-expanded="false">
                        <span className="sr-only">Open menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                </div>

                <div id="nav-links" className={`${hidden ? "hidden " : "" }items-center justify-between w-full md:flex md:w-auto md:order-1`}>
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                        <li>
                            <a href="#about" className={activeHash === "#about" ? activeClass : inActiveClass}>Home</a>
                        </li>
                        <li>
                            <a href="#projects" className={activeHash === "#projects" ? activeClass : inActiveClass}>Projects</a>
                        </li>
                        <li>
                            <a href="#joke" className={activeHash === "#joke" ? activeClass : inActiveClass}>Random joke</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
  )
}
