import React from 'react'
import ButtonCom from './ButtonCom'
import imgex from "./images/exclusive.png"

const ExclusiveCom=()=>{
    return(<>
              <div class="offer">
         <div class="small-container">
             <div class="row">
                 <div class="col-2">
                     <img src={imgex} class="offer-img"/>
                 </div>
                 <div class="col-2">
                     <p>Exclusively Available on RedStore</p>
                     <h1>Smart Band</h1>
                     <small>The Min Smart Band 4 features a 39.9% larger(than Mi Band 3) AMOLED color full-touch display with adjustable brightness,so everything is clear as can be.</small>
                     <ButtonCom/>
                 </div>
             </div>
         </div>
     </div>
    </>)
}

export default ExclusiveCom