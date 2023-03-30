import { Link } from "react-router-dom";
import CoverPic from "../resources/newPortfolioCover.jpg"
import ThemeImage from "../resources/cover.jpeg"
// 
const SideNav = () => {
    return (
        <>
        <div className="header">
        <img id="headShot" src={CoverPic}/>
            <h3 className="intro">Ricardo Estrada Villavicencio | Software Engineer</h3>
        </div>
        <div className="sideNav">
            <img id="theme" src={ThemeImage} />
            <Link className="navButton" to="/">Home</Link>
            <Link className="navButton" to="/AboutMe">About Me</Link>
            <Link className="navButton" to="/Skills&Experience">Skills & Experience</Link>
            <Link className="navButton" to="/Background">Background</Link>
            <Link className="navButton contactButton" to="/ContactMe">Contact Me</Link>
        </div>
        </>
    )
}
// 
export default SideNav;