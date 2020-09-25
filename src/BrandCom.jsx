import React from 'react'
import BrandComData from './BrandsComData'

const BrandCom=()=>{
    return(<>
          <div className="brands">
         <div className="small-container">
             <div className="row">
               {BrandComData.map((val)=>{
                   return(<>
                    <div className="col-5">
                     <img src={val.imgsrc}/>
                 </div>
                   </>)
               })}
                 
             </div>
         </div>
     </div>
    </>)
}

export default BrandCom