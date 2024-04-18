import React from 'react';
// import './index.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import cryptoSymbol from '../assets/CryptoExchange1.png'
import bottomLine from '../assets/Vector 2.svg'
// import bannerBg from './assets/Group 47281.png'
import imgOne from '../assets/cardano-blockchain 1.jpg';
import secureImg from '../assets/security-safe.png';
import exchangeImg from '../assets/Group 8.png';
import handCoin from '../assets/view-hand-holding-bitcoin 1.png';




const Home = () => {
          return ( <>
          <Header />
  <div className="banner-img">
  <p className=" p-2 bg-white text-center text-sm text-black rounded-2xl w-[13%] m-auto">Crypto Exchange</p>

  </div>
<div className="banner  text-center pt-6 pb-16 text-white ">
 
  <div className="w-[75%] text-center m-auto mt-12 ">
    <p className=' p-0 text-[42px] text-wrap font-normal'>Explore the world of cryptocurrency with HelloMe Money's crypto exchange.</p>
  <p className=" p-0 text-[42px] text-wrap font-normal ">Buy, sell, and trade various cryptocurrencies securely, <br /> all within the  <span className='font-semibold text-[45px] '>HelloMe Money</span> platform.</p>
</div>
<div className=""></div>
<div className=" m-auto text-center w-4/12 underline-box">
<img src={bottomLine} alt="" className='m-auto ' width={380}/>
</div>
<button className=' p-1 px-2 my-8 bg-white text-black font-medium flex m-auto items-center rounded-2xl hover:bg-[#195399] hover:text-white btn-h'>Get Started <span><img src={cryptoSymbol} alt="Crypto" width={40} /></span></button>
</div>


<div className=" p-2 flex justify-around w-full items-center mb-12 ">

<div className="w-[40%]  p-2 text-white">
    <div className=" flex items-center">
      <h3 className='text-[30px] font-bold'>Secure Transactions:</h3>
      <img src={secureImg} alt="" width={36} className='ml-2'/>
    </div>
   
<div className="ml-6">
<p className=' w-[75%] text-sm leading-[1.5] tracking-[0.40] text-justify '>Explore the world of cryptocurrency with confidence  on HelloMe Money's secure platform. Buy, sell, and   trade various cryptocurrencies knowing that your  transactions are protected by advanced security  measures.</p>
</div>
  
  </div>
  <div className="w-[40%]  border-8 rounded-md border-gray-800">
    <img src={imgOne} alt="" />

</div>
</div>

<div className=" p-2 flex justify-around w-full items-center mb-12">
<div className="w-[40%]  border-8 border-gray-800 rounded-lg">
    <img src={handCoin} alt="" />
</div>
<div className="w-[40%]  p-2 text-white">
    <div className=" flex items-center w-4/5">
      <h3 className='text-[28px]'>Convenient Trading:</h3>
      <img src={exchangeImg} alt="" width={30} className='ml-6'/>
    </div>
   
<div className="ml-6">
<p className=' w-[77%] text-sm leading-[1.5] tracking-[0.40] text-justify '>Trade cryptocurrencies seamlessly within the HelloMe Money platform. Our user-friendly interface and intuitive tools make buying, selling, and trading digital assets a hassle-free experience.</p>
</div>
  
  </div>

</div>

<Footer />
          
          </> );
}
 
export default Home;