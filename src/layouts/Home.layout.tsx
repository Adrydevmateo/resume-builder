import './Home.style.css'
import Header from "../components/header/Header"

interface Props {
 children: React.ReactNode
}

export default function HomeLayout({ children }: Props) {
 return (
  <div id="home-layout">
   <Header></Header>

   {children}
  </div>
 )
}