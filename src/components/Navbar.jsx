import { RiCloseLine, RiLinksFill, RiMenu3Line } from "react-icons/ri";  //imported pathway from ChatGPT 
import logo from "../assets/logo.webp"
import { useState} from "react"
import {LINKS} from "../constants"


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

  return (
      <nav className="border-b-2">
          <div className="max-w-7xl mx-auto flex justify-between items-center py-8">
              <div className="pl-2"> 
              <a href="#">
              <img src={logo} width={150} height={15}  alt="VastuSpaze" />
              </a>
              </div>
              <div className="md:hidden">
                  <button onClick={toggleMenu} className="text-2xl pr-2 focus:outline-none" aria-label={isOpen ? "Close menu" : "Open menu"}>
                      {isOpen ? <RiCloseLine /> : <RiMenu3Line />}  {/*  RiMenu3Line not defined error  ChatGPT says: "It looks like the icons RiCloseLine and RiMenu3Line are not being properly imported. 
                      If you're using Remix Icons in a React project, you need to import the specific icons before using them. Make sure you have the react-icons package installed: npm install react-icons "*/}
                  </button>
              </div>
              <div className="hidden md:flex space-x-8 md:space-x-4 pr-2">
                  {LINKS.map((link, index) =>( // console error: LINKS not defined   // solution: imported LINKS
                      <a key={index} href={link.link} className="uppercase text-sm font-light hover:font-normal">{link.name}</a>
                  ))}
              </div>
            </div>
            <div className = {`${
                isOpen ? "block": "hidden" } md:hidden absolute bg-neutral-50 w-full py-5 px-4 mt-2 border-b-4`}>
                    {LINKS.map ((link, index) =>(
                        <a key={index} href={link.link} className="uppercase text-md font-light block py-2 tracking-wide hover:font-normal">
                            {link.name}
                        </a>
                    ))}

            </div>
      </nav>
  )
}

export default Navbar

