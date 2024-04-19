import React from "react";
import logoImage from "../assets/Logo.svg";




const Header = () => {
          return ( 
                    <>
                    <div className=" mb-4 flex justify-between px-8 py-4">
                              <div className=" flex justify-between w-[65%]">
                              <div className=" w-[200px]">
                                        <img src={logoImage} alt="Hello Money Logo" />
                              </div>
                              <div className=" p-1 w-[400px] text-white flex justify-between text-sm items-center">

                                        <div className="btn-h transition-.5s ease-in-out p-2 rounded-md hover:bg-gray-600 hover:text-gray-200 cursor-pointer"> <p>Personal Account</p></div>
                                        <div className="btn-h transition-.5s ease-in-out p-2 bg-gray-700 rounded-md cursor-pointer text-gray-200 hover:bg-black hover:text-white"> <p>Bussiness Account</p></div>
                                        <div className="btn-h transition-.5s ease-in-out p-2 rounded-md hover:bg-gray-600 hover:text-gray-200 cursor-pointer"> <p>Company</p></div>
                              </div>
                              </div>
                              <div className=" p-1 w-[17%] text-white flex justify-between">
                                        <button className="border rounded-2xl text-sm px-4 hover:bg-[#195399] hover:border-transparent btn-h ease-out ">Login</button>
                                        <button className="border rounded-2xl text-sm px-4 bg-[#195399] btn-h hover:bg-black border-transparent hover:border hover:border-white">Sign Up</button>
                              </div>
                    </div>
                    
                    </>
           );
}
 
export default Header;