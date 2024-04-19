import React from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import SideViewPeople from '../assets/side-view-people-store 1.jpg';
import SideViewSmiley from '../assets/side-view-smiley-business-owner 1.jpg';
import PersonalShopping from '../assets/personal-shopper-office-with-client 1.jpg';
import CakeCafe from '../assets/cake-cafe-owners-with-open-sign 1.jpg';
import RankingImg from '../assets/ranking.png';
import BankingImg from '../assets/bank.png';
import StreamLineBanking from '../assets/Streamlined banking 1.png';
import PathImg from '../assets/path.png';
import StarImg from '../assets/050.png';





const About = () => {
          return ( <>
          <Header />
<div className="">
  <div className="  pl-8 bg-[#121212] pt-6">
<div className="banner-img mb-10">
  <p className=" p-2 bg-white text-center text-sm text-black rounded-2xl w-[20%] m-auto">SME (Small and Medium Enterprises)</p>

  </div>
   
          
          <div className=" ">
                    <div className=" flex items-end">
                              <div className=" ">
                              <div className=" p-2 w-[85%] text-white">
                    <h3 className="text-[23px] mb-4 font-bold tracking-[0.09em]">Tailored financial solutions for Small and Medium Enterprises (SMEs) with HelloMe Money</h3>
                    <p className="text-[22px] font-extralight tracking-[0.09em]">Access specialized accounts, tools, and services <br /> designed to meet the unique needs of your business.</p>
                    </div>
                              </div>
                    <div className=" flex justify-between">
                    <div className=" p-2  w[300px]">
                              <img src={SideViewPeople} alt="" width={410}/>
                    </div>
                    <div className=" p-2">
                    <img src={SideViewSmiley} alt="" width={220}/>
                    </div>
                    </div>

                    </div>
                    <div className=" flex justify-between items-center">
                    <div className=" ">
                              <div className=" p-2 ">
                <button className=" bg-white p-4 px-6 rounded-2xl text-lg hover:bg-[#195399] btn-h hover:text-white">Get multicurrency account</button>
                <button className="border rounded-2xl p-4 px-4 mx-6 text-lg text-white hover:bg-[#195399] btn-h hover:text-white hover:border-transparent">Contact Us</button>
                <img src={StarImg} alt="" width={30}  className=" absolute bottom-[110px]"/>
                    </div>
                              </div>
                   
                    <div className=" flex justify-between">
                    <div className=" p-2  w-[300px]">
                              <img src={PersonalShopping} alt=""/>
                    </div>
                    <div className=" p-2">
                    <img src={CakeCafe} alt="" width={155} height={200}/>
                    </div>
                    </div>
                    </div>
          </div>
  </div>
</div>
<div className=" About-banner py-16">


<div className=" p-2 flex justify-around w-full items-center mb-12 ">

<div className="w-[40%]  p-2 text-white">
    <div className=" flex items-center">
      <h3 className='text-[30px] font-bold'>Tailored Solutions:</h3>
      <img src={PathImg} alt="" width={36} className='ml-2'/>
    </div>
   
<div className="ml-6">
<p className=' w-[75%] text-sm leading-[1.5] tracking-[0.40] text-justify '>Discover tailored financial solutions crafted specifically for Small and Medium Enterprises (SMEs). Our Business Account is designed to address the unique needs of your growing business, providing specialized accounts, tools, and services to streamline your financial operations</p>
</div>
  
  </div>
  <div className="w-[40%] h-[360px] rounded-md bg-[#514f4f4c]">
    {/* <img src={} alt="" /> */}

</div>
</div>

<div className=" p-2 flex justify-around w-full items-center mb-12">
<div className="w-[40%]  bg-[#514f4f4c] rounded-lg  h-[360px]">
    <img src={StreamLineBanking} alt=""  className="m-auto"/>
</div>
<div className="w-[40%]  p-2 text-white">
    <div className=" flex items-center w-4/5">
      <h3 className='text-[28px]'>Streamlined Banking:</h3>
      <img src={BankingImg} alt="" width={30} className='ml-6'/>
    </div>
   
<div className="ml-6">
<p className=' w-[77%] text-sm leading-[1.5] tracking-[0.40] text-justify '>Experience seamless banking with HelloMe Money's Business Account. From managing cash flow to making international payments, our platform offers intuitive tools and features to simplify your day-to-day banking tasks. Say goodbye to complexity and hello to effortless financial management.</p>
</div>
  
  </div>

</div>

<div className=" p-2 flex justify-around w-full items-center ">

<div className="w-[40%]  p-2 text-white">
    <div className=" flex items-center">
      <h3 className='text-[30px] font-bold'>Growth Opportunities:</h3>
      <img src={RankingImg} alt="" width={36} className='ml-2'/>
    </div>
   
<div className="ml-6">
<p className=' w-[75%] text-sm leading-[1.5] tracking-[0.40] text-justify '>Unlock growth opportunities for your business with HelloMe Money. Our Business Account empowers SMEs to plan for the future, offering resources and support to fuel expansion and success. Whether you're scaling up or venturing into new markets, HelloMe Money is here to help you thrive.</p>
</div>
  
  </div>
  <div className="w-[40%] h-[360px] bg-[#514f4f4c] rounded-md ">
    {/* <img src={} alt="" /> */}

</div>
</div>
</div>


          <Footer />
          
          
          </> );
}
 
export default About;