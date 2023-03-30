import ASC from "../../resources/ASC.jpg";
// import   from "";
// import   from "";
// import   from "";
// import   from "";
// import   from "";
// import   from "";
// import   from "";
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
                </div>
            </div>
            {/* <div className="footer">
                ClearFooter
            </div> */}
        </div>
    )
}
// 
export default Background;