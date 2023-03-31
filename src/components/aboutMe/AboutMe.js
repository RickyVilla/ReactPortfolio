import Profile from "../../resources/ProfileMain.png";
// 
function AboutMe () {
    return (
        <div className="components">
            <div id="aboutMePage" className="content"> 
            <h3>About Me</h3>
            <img id="profileImg" src={Profile} />         
                To be Brief yet Thorough, I’m a developer with a past. I’ve worked jobs in several trades, then I found Coding... It’s become the best opportunity for my life. It is now the career I want to excell in for the foreseeable future. I aspire to work among the best in Software Engineering and proficient in team building, scrum cycles, and agile frameworks.
                When you read my profile, know that I am a committed and determined individual that only has to learn a new skill once, As an Up & Coming developer in the tech field, I am seeking an Apprenticeship position to turn into a career long opportunity. Message me or connect with me on my <em className="textButton">GitHub</em>    or    <em className="textButton">LinkedIn Sites.</em> Visit my Contact Me page.
            </div>
        </div>
    )
}
// 
export default AboutMe;