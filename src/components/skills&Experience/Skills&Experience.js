import HTML from "../../resources/htmlLogo.png";
import CSS from "../../resources/cssLogo.jpg";
import JS from "../../resources/jsLogo.jpg";
import Node from "../../resources/nodeJsLogo.jpg";
// 
function SkillsAndExperience () {
    return (
        <div className="components">
            <div className="content" id="skillsPage">
                <img className="skillsIconLeft" src={HTML} />
                <img className="skillsIconRight" src={CSS} />
                <div className="skillsTable">
                    I’ve acquired sufficient skills to build a full MERN-Stack Web Page with Single Page Applications and have a general grasp in Developer Life Cycles.
                </div>
                <div className="skillsTable">
                        Hard Skills:
                    Tools & Technologies: Javascript |  Es6, Html5 | Css3, React | Jquery | React | Bootstrap | Node  Agile Methodologies | Github | G-Suites | Jira | Confluence | Firebase | Scrum | Helmet | Chai | Mongo | MongoDB | Redux | Sass | Express |
                </div>
                <div className="skillsTable">
                        Soft Skills:
                    Communication | Creative Thinking | Adaptability | Problem Solving | Time Management | Team Building | Client Relations | Networking |  | Leadership
                </div>
                <img className="skillsIconLeft"  src={JS} />
                <img className="skillsIconRight"  src={Node} />
            </div>
        </div>
    )
}
// 
export default SkillsAndExperience;