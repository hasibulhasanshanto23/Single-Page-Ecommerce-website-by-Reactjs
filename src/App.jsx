import React from 'react'
import NavbarCom from './NavbarCom'
import Category from './Category'
import Featured from './FeaturedCom'
import ExclusiveCom from './ExclusiveCom'
import Testimonial from './Testimonial'
import BrandCom from './BrandCom'
import FooterCom from './FooterCom'

const App=()=>{
    return(<>
       <NavbarCom/>
       <Category/>
       <Featured/>
       <ExclusiveCom/>
       <Testimonial/>
       <BrandCom/>
       <FooterCom/>
    </>)
}

export default App