import React from "react";

const Boot = ({name, image}) => {  
    return (
        
        <div className="tc bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5">
             
             <div>
                <h2>{name}</h2>
             </div>
             <img alt = 'boot' src={image} width="275" height="175" />
            
        </div>
       
    )
}

export default Boot;