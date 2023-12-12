import ONav from "./ONav";
import best from '../Assests/Images/bestBook.png'

const Home =()=>{
    return(
        <>
        <ONav/>
        <div className="homeWrapper">

            <div className = "sidePanel">

            </div>
            <div className="bestBook">
                <div className="bestBookBG">
                    <img src = {best} alt = "img"/>
                </div>
            </div>
        </div>
        <div className="Desc">
            <div className="titleD">
            You’re in the right place. Tell us what titles or genres you’ve enjoyed in the past, and we’ll give you surprisingly insightful recommendations.
            </div>
            <div className="title">
                Deciding what to read next?
            </div>

        </div>
        </>
    )
}

export default Home;

