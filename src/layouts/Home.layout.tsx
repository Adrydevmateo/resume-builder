import { Link } from "react-router-dom"
import Header from "../components/header/Header"

interface Props {
 children: React.ReactNode
}

export default function HomeLayout({ children }: Props) {
 return (
  <div id="home-layout">
   <Header>
    <nav>
     <Link to="/">Home</Link>
     <Link to="/sing-in">Sign In</Link>
     <Link to="/sing-up">Sign Up</Link>
    </nav>
   </Header>

   {children}
  </div>
 )
}