import React from 'react';

function Specials () {
    return (
        <div className="special">
            <div className= "row-center" style={{width:'860px'}}>
                <div>
                    <img src={'/img/dollarbeer.jpeg'} alt="dollar beer"class="image"/>   
                </div>
                <div className="column-text" style={{backgroundColor:'rgba(255, 157, 0, 1)'}}>
                    <h1>Dollar Beer Monday's</h1>
                    <h2>$1 Local Yockel all night!</h2>
                </div>
            </div>  
            <div className= "row-center" style={{width:'860px'}}>
                <div className="column-text"  style={{backgroundColor:'rgba(0, 183, 255, 1)'}} >
                    <h1>Trivia Tuesday's</h1>
                    <h2>Trivia starting at 7:30! Winner gets $20 house cash!</h2>
                </div>
                <div>
                    <img src={'/img/trivia.jpeg'} alt="trivia" class="image"/>   
                </div>
            </div> 
            <div className= "row-center" style={{width:'860px'}}>
                <div>
                    <img src={'/img/whiteclaw.jpeg'} alt="whiteclaw" class="image"/>   
                </div>
                <div className="column-text" style={{backgroundColor:'rgba(245, 230, 50, .93)'}} >
                    <h1 >WhiteClaw Wednesday's</h1>
                    <h2>$1 off WhiteClaws all night!</h2>
                </div>  
            </div>
            <div className= "row-center" style={{width:'860px'}}>
                <div className="column-text" style={{backgroundColor:'rgba(255, 113, 205, 1)'}} >
                    <h1>Ladies' Night Thursday's</h1>
                    <h2>$1 off all drinks for all ladies!</h2>
                </div>
                <div>
                    <img src={'/img/ladiesnight.png'} alt="ladies night" class="image"/>    
                </div>
            </div> 
            <div className= "row-center" style={{width:'860px'}}>
                <div>
                    <img src={'/img/pong.jpeg'} alt="pong" class="image"/>    
                </div>
                <div className="column-text" style={{backgroundColor:'rgba(255, 0, 0, 1)'}} >
                    <h1>Beer Pong Saturday's</h1>
                    <h2>Tournament starts at 6PM. $5 entry per team, winning team gets the pot!</h2>
                </div>  
            </div> 
         </div>
    )
}

export default Specials