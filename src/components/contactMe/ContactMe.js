import GitHub from "../../resources/gitData.jpg"
import LinkedIn from "../../resources/linkedInIcon.png"
import Gmail from "../../resources/gmail.jpg"
import CallMe from "../../resources/callMe.webp"
// 
function ContactMe () {
    const Email = () => {
        alert("copy to CC:                      rickyv815@gmail.com");
    }
    const Phone = () => {
        alert("                                 (520)-403-7196");
    }
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
                    <a onClick={Email}>
                        GMail<img className="icons" src={Gmail} />
                    </a>
                </div>
                <div>                   
                    <a onClick={Phone}>
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