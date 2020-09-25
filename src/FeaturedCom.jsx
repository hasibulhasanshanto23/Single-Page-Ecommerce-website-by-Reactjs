import React from 'react'
import TitleCom from './TitleCom'
import FeaturedComData from './FeaturedComData'
import LatestComData from './LatestComData'

const FeaturedCom=()=>{
    return(<>
        <div className="small-container">
         <TitleCom titlecom='Featured Products' />
         <div className="row">
             {FeaturedComData.map((val)=>{
                return(<>
                    <div className="col-4">
                 <img src={val.img}/>
                 <h4>Red Printed T-Shirt</h4>
                 <div className="rating">
                       <i className="fa fa-star"></i>
                       <i className="fa fa-star"></i>
                       <i className="fa fa-star"></i>
                       <i className="fa fa-star"></i>
                       <i className="fa fa-star-o"></i>
                 </div>
                 <p>$50.00</p>
             </div>
                </>)
             })}
             
         </div>
         <TitleCom titlecom='Latest Products' />
         <div className="row">
            {LatestComData.map((val)=>{
                return(<>
                    <div className="col-4">
                <img src={val.img}/>
                <h4>Red Printed T-Shirt</h4>
                <div className="rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star-o"></i>
                </div>
                <p>$50.00</p>
            </div>
                </>)
            })}
        </div>
    
     </div>
    </>)
}
export default FeaturedCom