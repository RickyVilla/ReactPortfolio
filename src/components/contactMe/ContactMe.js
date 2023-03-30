import GitHub from "../../resources/gitData.jpg"
import LinkedIn from "../../resources/linkedInIcon.png"
import Gmail from "../../resources/gmail.jpg"
import CallMe from "../../resources/callMe.webp"
// 
function ContactMe () {
    return (
        <div className="components">
            <div className="content" id="linksPage">
                <h3 id="ProjectsTitle">Review my Projects and Connect with me Here:</h3>
                <div>
                    <a target="_new" href="https://github.com/RickyVilla">
                        GitHub<img className="icons" src={GitHub} />
                    </a>
                </div>
                <div>
                    <a target="_new" href="https://www.linkedin.com/in/r-villavicencio">
                        LinkedIn<img className="icons" src={LinkedIn} />
                    </a>    
                </div>
                <div>                    
                    <a target="_new" href="">
                        GMail<img className="icons" src={Gmail} />
                    </a>
                </div>
                <div>                   
                    <a target="_new" href="">
                    Request-Call<img className="icons" src={CallMe} />
                    </a></div>
            </div>
            {/* <div className="footer">
                ClearFooter
            </div> */}
        </div>
    )
}
// 
export default ContactMe;