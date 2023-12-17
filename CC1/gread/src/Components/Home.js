import ONav from "./ONav";
import favBook from '../Assests/Images/N.jpg'

const Home = () => {
    return (
        <>
            <ONav />

            <div className="homeWrapper" >
                <div className="sidePanel">
                    <div className="sideDiv">
                        <div className="sideButtons">
                            <li>Highest Rated Novels</li>
                            <li>Timeless Classics</li>
                            <li>Book Donations</li>
                            <li>Editor's Picks</li>
                            <li>Pre-Owned Library</li>
                            <li>Reader's Community</li>
                        </div>
                        <li className = "thoughts">What's on your mind?</li>
                    </div>
                </div>
                <div className="side">
                    <img src={favBook} className="favBook" alt="noImg" />
                </div>


                {/* <div class="black-box"></div>
                <div class="vote">
                
                </div>

                <div className="ex">
                    
                </div> */}

            </div>

        </>
    )
}

export default Home;

