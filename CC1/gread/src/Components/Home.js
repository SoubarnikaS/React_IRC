import ONav from "./ONav";


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
                        <li className="thoughts">What's on your mind?</li>
                    </div>
                </div>
                <div className="sideWrapper">
                    <div className="side">
                        {/* <div className="voting">
                            <span className="voteText">
                                A good book is a secret garden, blooming with the flowers of imagination.
                            </span>
                            <button className="voteButton">Vote For The Best Book Of 2023!</button>
                        </div> */}
                        <div className="options">
                            <div class="cardH" style = {{backgroundColor:'transparent'}}>
                                <div class="content">
                                    <div class="back">
                                        <div class="back-content">
                                            <strong>My Reviews</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="cardH">
                                <div class="content">
                                    <div class="back">
                                        <div class="back-content">
                                            <strong>Add to Favourites</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="cardH">
                                <div class="content">
                                    <div class="back">
                                        <div class="back-content">
                                            <strong>My Reading List</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="cardH">
                                <div class="content">
                                    <div class="back">
                                        <div class="back-content">
                                            <strong>Rent Books</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="cardH">
                                <div class="content">
                                    <div class="back">
                                        <div class="back-content">
                                            <strong>Write A Review</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

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

