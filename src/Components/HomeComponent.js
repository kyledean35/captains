import React from 'react';

function Home () {
    return (
        <React.Fragment>
            <div className="home">
                <img src='/img/CAPTAINS-TAVERN-FINAL2.svg' width="700" alt="Captains logo big" className="img-fluid" />
                <h1>BEER - WINE - G'TIMES</h1>
                <h2>8742 North Mobley Rd (Fox's Corner Plaza){<br/>}Odessa, Florida 33556{<br/>}Tel: (813) 328-4835{<br/>}Mon-Sat 4pm-Close{<br/>}Sunday 12pm-Close</h2>
            </div>
            <div>
                <div style={{width:'1038px', height:'600px', display:'flex', alignContent:'flex-start', margin:'auto', textAlign:'center'}}>
                    <div>
                        <img class="borders" src='/img/tile2.jpg' height="300px" alt="arcade" />
                        <img class="borders" src='/img/tile5.jpg' height="300px" alt="darts" />
                    </div>
                    <div>
                        <img class="borders"src='/img/cracker-billy-band.jpeg' alt="cracker billy band" style={{height:"600px", width:"747px", overflow:"hidden"}} />
                    </div>
                </div>
                <div style={{width:'1038px', height:'400px', display:'flex', alignContent:'flex-start', margin:'auto', textAlign:'center'}}>
                    <div>
                        <img class="borders"src='/img/captains-tavern-arcade.jpeg' alt="shooting game" style={{height:"400px", width:"456px", overflow:"hidden"}}/>
                    </div>
                    <div>
                        <img class="borders" src='/img/tile3.jpg' height="200" alt="bottle"/>
                        <img class="borders" src='/img/tile1.jpg' height="200"  alt="crowd" />
                    </div>
                    <div>
                        <img class="borders" src='/img/tile6.jpg' height="400" alt="band" />
                    </div>
                </div>
                <div class="row">
                    <div class="captain">
                        <div class="captainbox">
                            <h1>About the Captain</h1>
                            <h2>Captain was our dog, and best friend. He loved, and was loved by everyone he met. He taught both my wife and myself so much about love, devotion, understanding, and patience. He literally paved the way for us to become parents. He meant more than we ever thought something could mean and matter. He died May 11th 2017, and we honor his name with this bar.</h2>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home