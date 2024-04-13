


const Footer = () => {

          const links = [
                    { text: 'About Us', url: '/about' },
                    { text: 'Code of Conduct', url: '/conduct' },
                    { text: 'Partner with Us', url: '/partner' },
                  ];
          const linksLegal = [
                    { text: 'Terms And Condition', url: '/terms' },
                    { text: 'Privacy Policy', url: '/privacy' },
                   
                  ];
          return ( <>
          
          <div className="banner-footer  pb-2">
<div className=" p-4 pb-8 flex justify-around text-white">
  <div className=" w-3/12 p-4 ">
    <h3 className='font-bold text-xl mb-6'>Who We Are</h3>
    <ul className=' text-xs'>
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.url} className="block w-fit py-2 px-4 hover:underline hover:text-blue-600">
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  </div>
  <div className=" w-3/12 p-4 ">
     <h3 className='font-bold text-xl mb-6'>Legal</h3>
     <ul className=' text-white text-xs'>
     {linksLegal.map((link, index) => (
        <li key={index}>
          <a href={link.url} className="block w-fit py-2 px-4 hover:underline hover:text-blue-600">
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  </div>
  <div className=" w-3/12 p-4 ">
     <h3 className='font-bold text-xl mb-6'>Contact Us</h3>
     <div className=" text-xs px-4">
     <p>United Kingdom Office:</p>
     <p>2nd floor 30, Churchill Pl, London E14 5EU United Kingdom</p>
     </div>
     <div className=" text-xs px-4 mt-6">
     <p>Canada Office:</p>
     <p>44322 YALE RD UNIT 3B #203 <br /> CHIILLIWACK, <br />BC CANADA V2R4H1</p>
     </div>
  </div>
</div>
<p className='text-center text-xs text-white'>copyright &copy; 2024 HelloMe Money. All Rights Reserved.</p>
</div>





          
          </> );
}
 
export default Footer;