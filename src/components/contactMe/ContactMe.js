import GitHub from "../../resources/gitData.jpg"
import LinkedIn from "../../resources/linkedInIcon.png"
import Gmail from "../../resources/gmail.jpg"
import CallMe from "../../resources/callMe.webp"
// 
function ContactMe () {
    return (
        <div className="components">
 
            <div className="content" id="links">
                <h3>Review my Projects and Connect with me Here:</h3><br/>
                <div>
                    <a target="_self">
                        GitHub
                        <img className="icons" src={GitHub} />
                    </a>
                </div>
                <div>
                    <a target="_self">
                        LinkedIn
                        <img className="icons" src={LinkedIn} />
                    </a>    
                </div>
                <div>                    
                    <a target="_self">
                        GMail
                        <img className="icons" src={Gmail} />
                    </a>
                </div>
                <div>                   <a target="_self">
                    Request-Call 
                        <img className="icons" src={CallMe} />
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