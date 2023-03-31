import ASC from "../../resources/ASC.jpg";
import Khols from "../../resources/khols.jpg";
import FORD from "../../resources/holmesTuttle.jpg";
import HomeGoods from "../../resources/HomeGoodsLogo.png";
import ArmorPoint from "../../resources/armorPoint.jpg";
import Banyan from "../../resources/banyanLabs.jpg";
// 
function Background () {
    return (
        <div className="components">
            <div className="content" id="backgroundPage">
                <h3>Background</h3>
                <div>
                    If you were Curious, What your looking at? It’s my favorite view of my HomeTown. Hermosillo, Sonora. It’s where I’m from, born n’ raised out of Tucson, Az. But I love both. I was raised with the best of two cultures and I’ve lived and worked all my life in the states. I’ve handled food and catering. I’ve worked in Stocking and Distributing. I’ve worked as a heavyline mechanic n’ Advanced Diagnostics Technician, and now I am a Software Developer. <br />
                    I am a Certified Automotive Technician with an Associate’s Degree, and a Certified Full-Stack Web Developer. Support my Career Goals as I pursue Web development.
                </div>
                <h3>Work History:</h3>
                <div>
                    <img className="workIcons" src={ASC} />
                    <img className="workIcons" src={Khols} />
                    <img className="workIcons2" src={FORD} />
                    <img className="workIcons2" src={HomeGoods} />
                    <img className="workIcons2" src={ArmorPoint} />
                    <img className="workIcons" src={Banyan} />
                </div>
            </div>
        </div>
    )
}
// 
export default Background;