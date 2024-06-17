import { Link } from "react-router-dom"
import LanguageSwitch from "../language/Language-Switch"
import { title } from "./Home.translation"
import LanguageStore from "../language/Language.store"

interface Props {
 children: React.ReactNode
}

export default function HomeLayout({ children }: Props) {
 const { language } = LanguageStore()

 return (
  <div id="home-layout">
   <header>
    <nav>
     <Link to="/">Home</Link>
     <Link to="/sing-in">Sign In</Link>
     <Link to="/sing-up">Sign Up</Link>
    </nav>
    <LanguageSwitch />
   </header>

   <h2>{title[language]}</h2>

   {children}
  </div>
 )
}