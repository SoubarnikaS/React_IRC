import wp from '../Assests/Images/wp.jpg'
 
function Home() {
    return (
        <>
            <div className = "Phrase">
                <div className = "p1">
                    WHERE YOUR THOUGHTS 
                </div>

                <div className = "content">
                    <div className = "p2">
                        BLOOM
                    </div>
                    <div className = "bloom">
                        {/* <img src = {Blooming}/> */}
                    </div>
                </div>

                <div className = "p3">
                    INTO NOTES! 
                </div>

                <div className = "pic">
                    <img src = {wp}/>
                </div>

            </div>
        </>
    )
}

export default Home;