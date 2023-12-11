import wp from '../Assests/Images/wp.jpg'

function Home() {
    return (
        <>
            <div className="Phrase">
                <div className="p1">
                    WHERE YOUR THOUGHTS
                </div>

                <div className="content">
                    <div className="p2">
                        BLOOM
                    </div>
                    <div className="bloom">
                        {/* <img src = {Blooming}/> */}
                    </div>
                </div>

                <div className="p3">
                    INTO FLOWERFUL NOTES!
                </div>

                <div className="pic">

                    <img src={wp} />
                </div>

                <div className="tasks">
                    {/* See what's possible with UNote */}
                </div>
            </div>
            <div className="Container">
                <p className="pc1">Simple on Surface</p>
                <p className="pc2">Detailed Underneath</p>
            </div>
            <div class="wrapper">

                <div class="flip">
                    <div class="front">
                        <h1 class="text-shadow">Use it anywhere</h1>
                    </div>
                    <div class="back">
                        <h2>Work Anywhere</h2>
                        <p>Keep important info handy—your notes sync automatically to all your devices.</p>
                    </div>
                </div>

                <div class="flip">
                    <div class="front">
                        <h1 class="text-shadow">Use it anywhere</h1>
                    </div>
                    <div class="back">
                        <h2>Work Anywhere</h2>
                        <p>Keep important info handy—your notes sync automatically to all your devices.</p>
                    </div>
                </div>


                <div class="flip">
                    <div class="front">
                        <h1 class="text-shadow">Use it anywhere</h1>
                    </div>
                    <div class="back">
                        <h2>Work Anywhere</h2>
                        <p>Keep important info handy—your notes sync automatically to all your devices.</p>
                    </div>
                </div>

                {/* <div className="Container1">
                    <div className="c1">
                        <p>Use it anywhere</p>
                        Notes stay updated across all your devices, automatically and in real time.
                        There’s no “sync” button.It just works.
                    </div>
                </div> */}
                {/* <div className="Container2">
                    Container
                </div>
                <div className="Container3">
                    Container

                </div> */}
            </div>
        </>
    )
}

export default Home;