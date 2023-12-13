import ONav from "./ONav";
import genre from '../Assests/Images/genre.png'

const Home = () => {
    return (
        <>
            <ONav />
            <div className="homeWrapper">
                <img src = {genre}/>
                {/* <div class="categories">
                    <div class="cat1">
                        <div class="book">
                            <p>Crime-Thriller</p>
                            <div class="cover">
                                <img src={"https://www.explore.com/img/explore-share-image-1280x720.png"}></img>
                            </div>
                        </div>
                        <div class="book">
                            <p>Scientific</p>
                            <div class="cover">
                                <img src={"https://www.explore.com/img/explore-share-image-1280x720.png"}></img>
                            </div>
                        </div>
                        <div class="book">
                            <p>Fantasy</p>
                            <div class="cover">
                                <img src={"https://www.explore.com/img/explore-share-image-1280x720.png"}></img>
                            </div>
                        </div>
                    </div> */}
                {/* </div> */}
            </div> 
                {/* <div className="bestBook">
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
            </div> */}

           
        </>
    )
}

export default Home;

