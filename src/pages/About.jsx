import React from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';





const About = () => {
          return ( <>
          <Header />
<div className="border  border-white About-banner pt-6">
<div className="banner-img">
  <p className=" p-2 bg-white text-center text-sm text-black rounded-2xl w-[20%] m-auto">SME (Small and Medium Enterprises)</p>

  </div>
  <div className=" border p-2 flex justify-between">
          <div className="border p-4"></div>
          
          <div className="border p-4 w-4/12 ">
                    <div className="border p-2 flex justify-between">
                    <div className="border p-2"></div>
                    <div className="border p-2"></div>
                    </div>
          </div>
  </div>

</div>

          <Footer />
          
          
          </> );
}
 
export default About;