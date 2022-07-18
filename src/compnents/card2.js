import React from "react"
import "./profile.css"
function Card2(props){
    return(
    
        <div className="Card">
          
            <div className="CardPargraph">
            <h4 className="Date">{props.h4}</h4>
            <p className="P"><button className="fix">fix</button><img src={props.img} alt='card2' />Kevin Joe</p>
                <p className="description">{props.p} </p>
                
            </div>
            <button className="Download">Download</button>
        </div>
    )
}
export default Card2