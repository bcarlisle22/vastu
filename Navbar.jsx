import { RiCloseLine, RiLinksFill, RiMenu3Line } from "react-icons/ri";  //imported pathway from ChatGPT 
import logo from "../assets/logo.webp";
import { useState} from "react"


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
              
            </div>
      </nav>
  )
}

export default Navbar

