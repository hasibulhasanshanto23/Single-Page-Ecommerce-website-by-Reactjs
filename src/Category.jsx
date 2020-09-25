import React from 'react'
import CategoryComData from './CategoryComData'

const Category=()=>{
    return(<>
        <div className="categories">
        <div className="small-container">
        <div className="row">
            {CategoryComData.map((val,index)=>{
                return(<>
                <div className="col-3" >
                 <img src={val.imgsrc}/>
                 </div>
                </>)
            })}
            
        </div>
    </div>
    </div>
    </>)
}
export default Category