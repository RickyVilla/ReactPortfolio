import { Link } from "react-router-dom";
import CoverPic from "../resources/newPortfolioCover.jpg"
// 
const SideNav = () => {
    return (
        <>
        <div className="header">
        <img id="headCover" src={CoverPic}/>
            <h3 className="intro">Ricardo Estrada Villavicencio | Software Engineer</h3>
        </div>
        <div className="sideNav">
            <Link to="/">Home</Link>
            <Link to="/AboutMe">About Me</Link>
            <Link to="/Background">Background</Link>
            <Link to="/Skills&Experience">Skills & Experience</Link>
            <Link to="/ContactMe">Contact Me</Link>
        </div>
        </>
    )
}
// 
export default SideNav;