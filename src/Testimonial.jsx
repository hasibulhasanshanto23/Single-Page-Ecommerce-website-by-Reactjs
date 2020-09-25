import React from 'react'
import TestimonialComData from './TestimonialComData'

const Testimonial=()=>{
    return (<>
        <div className="testimonial">
         <div className="small-container">
             <div className="row">
                 {TestimonialComData.map((val)=>{
                     return(<>
                        <div className="col-3">
                    <i className="fa fa-quote-left"></i>
                    <p>{val.paragraph} </p>
                    <div className="rating">
                       <i className="fa fa-star"></i>
                       <i className="fa fa-star"></i>
                       <i className="fa fa-star"></i>
                       <i className="fa fa-star"></i>
                 </div>
                 <img src={val.imgsrc} />
                 <h3>{val.name}</h3>
                 </div>
                     </>)
                 })}
                
                
             </div>
         </div>
     </div>
    </>)
}

export default Testimonial

