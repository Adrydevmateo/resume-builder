import { Link } from "react-router-dom"

interface Props {
 children: React.ReactNode
}

export default function HomeLayout({ children }: Props) {
 return (
  <div id="home-layout">
   <header>
    <nav>
     <Link to="/">Home</Link>
     <Link to="/sing-in">Sign In</Link>
     <Link to="/sing-up">Sign Up</Link>
    </nav>
   </header>


   {children}
  </div>
 )
}