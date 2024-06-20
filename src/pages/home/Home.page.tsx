import { Link } from "react-router-dom";
import { hero, how_to_use } from './Home.translation'
import LanguageStore from "../../language/Language.store";

export default function Home() {

 const { language } = LanguageStore()

 return (
  <div id="home-page">
   <div className="hero">
    <h1>{hero.title[language]}</h1>
    <p>{hero.description[language]}</p>
    <Link to='/resumes'>{hero.link[language]}</Link>
   </div>

   <div className="how-to-use">
    <h2>{how_to_use.title[language]}</h2>
    <p>{how_to_use.description[language]}</p>
   </div>
  </div>
 )
}