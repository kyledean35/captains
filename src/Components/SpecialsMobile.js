import React from 'react';

function SpecialsM () {
    return (
        <div class="container-fluid">
            <div className= "row">
                <div className="col column-text" style={{backgroundColor:'rgba(255, 157, 0, 1)'}}>
                    <h1>Dollar Beer Monday's</h1>
                    <h2>$1 Local Yockel all night!</h2>
                </div>
            </div>  
            <div className= "row">
                <div className="col column-text" style={{backgroundColor:'rgba(0, 183, 255, 1)'}} >
                    <h1>Trivia Tuesday's</h1>
                    <h2>Trivia starting at 7:30! Winner gets $20 house cash!</h2>
                </div>
            </div> 
            <div className= "row ">
                <div className="col column-text align-items-center" style={{backgroundColor:'rgba(245, 230, 50, .93)'}} >
                    <h1 >WhiteClaw Wednesday's</h1>
                    <h2>$1 off WhiteClaws all night!</h2>
                </div>  
            </div>
            <div className= "row ">
                <div className="col column-text" style={{backgroundColor:'rgba(255, 113, 205, 1)'}} >
                    <h1>Ladies' Night Thursday's</h1>
                    <h2>$1 off all drinks for all ladies!</h2>
                </div>
            </div> 
            <div className= "row">
                <div className="col column-text" style={{backgroundColor:'rgba(255, 0, 0, 1)', paddingTop:'30px'}} >
                    <h1>Beer Pong Saturday's</h1>
                    <h2>Tournament starts at 6PM. $5 entry per team, winning team gets the pot!</h2>
                </div>  
            </div> 
         </div>
    )
}

export default SpecialsM