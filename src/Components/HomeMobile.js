import React from 'react';

function HomeM () {
    return (
        <React.Fragment>
            <div className="homeMobile">
                <img src='/img/CAPTAINS-TAVERN-FINAL2.svg' width="100%" alt="captains logo big"className="img-fluid" />
                <h1 style={{WebkitTextStroke:'1px black'}}>BEER - WINE - G'TIMES</h1>
                <h2>8742 North Mobley Rd (Fox's Corner Plaza){<br/>}Odessa, Florida 33556{<br/>}Tel: (813) 328-4835{<br/>}Mon-Sat 4pm-Close{<br/>}Sunday 12pm-Close</h2>
            </div>
            <div style={{padding:'20px 0px 20px 0px'}}>
                <div className="textMobile">
                    <h1>About the Captain</h1>
                    <h2>Captain was our dog, and best friend. He loved, and was loved by everyone he met. He taught both my wife and myself so much about love, devotion, understanding, and patience. He literally paved the way for us to become parents. He meant more than we ever thought something could mean and matter. He died May 11th 2017, and we honor his name with this bar.</h2>
                </div>
            </div>
        </React.Fragment>
    );
}

export default HomeM;