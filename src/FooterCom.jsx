import React from 'react'
import img1 from './images/play-store.png'
import img2 from './images/app-store.png'
import img3 from './images/logo-white.png'
const FooterCom=()=>{

    const year=new Date().getFullYear()
    return (<>
        <div className="footer">
         <div className="container">
             <div className="row">
                 <div className="footer-col-1">
                     <h3>Download Our App</h3>
                     <p>Download App for Android and ios mobile phone</p>
                     <div className="app-logo">
                         <img src={img1} />
                         <img src={img2}/>
                     </div>
                 </div>

                 <div className="footer-col-2">
                    <img src={img3}/>
                    <p>Our purpose is to sustainable make the pleasure and benefits of sports accessible to the many</p>
                </div>

                <div className="footer-col-3">
                    <h3>Useful Links </h3>
                    <ul>
                        <li>Coupons</li>
                        <li>Blog Post</li>
                        <li>Return Policy</li>
                        <li>Join Affiliate</li>
                    </ul>
                </div>

                <div className="footer-col-4">
                    <h3>Follow us </h3>
                    <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                        <li>Youtube</li>
                    </ul>
                </div>
             </div>
             <hr/>
             <p className="copyright"> Copyright {year}-RedStore</p>
         </div>
     </div>
    </>)
}

export default FooterCom