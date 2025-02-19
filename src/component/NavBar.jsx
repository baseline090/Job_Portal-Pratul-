import React, { useState } from "react";
import { RiArrowDropDownLine, RiMenu3Line, RiCloseLine } from "react-icons/ri";
import login from "../assets/navbar/login.png";
import register from "../assets/navbar/register.png";
import LOGO from "../assets/navbar/LOGO.png";
import BannerSection from "./Banner";
import Banner from "./Banner";
import { IoMenu } from "react-icons/io5";

const NavBar = () => {
  const [opportunityOpen, setOpportunityOpen] = useState(false);
  const [employersOpen, setEmployersOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full bg-[#FDF9F5] text-white shadow-md">
        <div className="max-w-[1920px] mx-auto h-full flex items-center justify-between p-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <img src={LOGO} alt="Logo" />

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <a
              href="#home"
              className="hover:text-[#F84B04] text-[#425066] hover:underline"
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-[#F84B04] text-[#425066] hover:underline"
            >
              About
            </a>

            {/* Opportunity Dropdown */}
            <div className="relative group">
              <button className="flex items-center hover:text-[#F84B04] text-[#425066] hover:underline focus:outline-none">
                Opportunity <RiArrowDropDownLine className="text-lg" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-md py-2 hidden group-hover:block">
                <a
                  href="#internships"
                  className="block px-4 py-2 text-[#425066] hover:bg-gray-100"
                >
                  Internships
                </a>
                <a
                  href="#jobs"
                  className="block px-4 py-2 text-[#425066] hover:bg-gray-100"
                >
                  Full-Time Jobs
                </a>
                <a
                  href="#freelance"
                  className="block px-4 py-2 text-[#425066] hover:bg-gray-100"
                >
                  Freelance Work
                </a>
              </div>
            </div>

            {/* Employers Dropdown */}
            <div className="relative group">
              <button className="flex items-center hover:text-[#F84B04] text-[#425066] hover:underline focus:outline-none">
                Employers <RiArrowDropDownLine className="text-lg" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-md py-2 hidden group-hover:block">
                <a
                  href="#post-job"
                  className="block px-4 py-2 text-[#425066] hover:bg-gray-100"
                >
                  Post a Job
                </a>
                <a
                  href="#find-candidates"
                  className="block px-4 py-2 text-[#425066] hover:bg-gray-100"
                >
                  Find Candidates
                </a>
              </div>
            </div>

            <a
              href="#Candidates"
              className="hover:text-[#F84B04] text-[#425066] hover:underline"
            >
              Candidates
            </a>
            <a
              href="#Pricing"
              className="hover:text-[#F84B04] text-[#425066] hover:underline"
            >
              Pricing
            </a>
            <a
              href="#Contact"
              className="hover:text-[#F84B04] text-[#425066] hover:underline"
            >
              Contact
            </a>
          </div>

          {/* Right Section (Login/Register Buttons) */}
          {/* <div className="hidden md:flex items-center space-x-4">
          <button className="px-6 py-3 w-[150px] text-[#F84B04] border-2 border-[#F84B04] rounded-full flex items-center justify-center gap-2 hover:bg-[#F84B04] hover:text-white">
            <img src={login} alt="Login" className="w-5 h-5" />
            Login
          </button>
          <button className="px-6 py-3 w-[150px] bg-[#F84B04] rounded-full flex items-center justify-center gap-2 hover:bg-[#F84B04]">
            <img src={register} alt="Register" className="w-5 h-5" />
            Register
          </button>
        </div> */}
          <div className=" hidden sm:flex items-center space-x-4">
            <button className="px-6 py-3 w-[150px] text-[#F84B04] border-2 border-[#F84B04] rounded-full flex items-center justify-center gap-2 hover:bg-[#F84B04] hover:text-white">
              <img src={login} alt="Login" className="w-5 h-5" />
              Login
            </button>
            <button className="px-6 py-3 w-[150px] bg-[#F84B04] rounded-full flex items-center justify-center gap-2 hover:bg-[#F84B04]">
              <img src={register} alt="Register" className="w-5 h-5" />
              Register
            </button>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#425066] text-2xl"
            >
              {mobileMenuOpen ? <RiCloseLine /> : <RiMenu3Line />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg absolute w-full left-0 top-16 p-4">
            <a
              href="#home"
              className="block py-2 text-[#425066] hover:text-[#F84B04]"
            >
              Home
            </a>
            <a
              href="#about"
              className="block py-2 text-[#425066] hover:text-[#F84B04]"
            >
              About
            </a>

            {/* Opportunity Dropdown */}
            <div>
              <button
                onClick={() => setOpportunityOpen(!opportunityOpen)}
                className="w-full text-left py-2 text-[#425066] hover:text-[#F84B04] flex items-center"
              >
                Opportunity <RiArrowDropDownLine className="ml-2 text-lg" />
              </button>
              {opportunityOpen && (
                <div className="pl-4">
                  <a
                    href="#internships"
                    className="block py-2 text-[#425066] hover:bg-gray-100"
                  >
                    Internships
                  </a>
                  <a
                    href="#jobs"
                    className="block py-2 text-[#425066] hover:bg-gray-100"
                  >
                    Full-Time Jobs
                  </a>
                  <a
                    href="#freelance"
                    className="block py-2 text-[#425066] hover:bg-gray-100"
                  >
                    Freelance Work
                  </a>
                </div>
              )}
            </div>

            {/* Employers Dropdown */}
            <div>
              <button
                onClick={() => setEmployersOpen(!employersOpen)}
                className="w-full text-left py-2 text-[#425066] hover:text-[#F84B04] flex items-center"
              >
                Employers <RiArrowDropDownLine className="ml-2 text-lg" />
              </button>
              {employersOpen && (
                <div className="pl-4">
                  <a
                    href="#post-job"
                    className="block py-2 text-[#425066] hover:bg-gray-100"
                  >
                    Post a Job
                  </a>
                  <a
                    href="#find-candidates"
                    className="block py-2 text-[#425066] hover:bg-gray-100"
                  >
                    Find Candidates
                  </a>
                </div>
              )}
            </div>

            <a
              href="#Candidates"
              className="block py-2 text-[#425066] hover:text-[#F84B04]"
            >
              Candidates
            </a>
            <a
              href="#Pricing"
              className="block py-2 text-[#425066] hover:text-[#F84B04]"
            >
              Pricing
            </a>
            <a
              href="#Contact"
              className="block py-2 text-[#425066] hover:text-[#F84B04]"
            >
              Contact
            </a>
          </div>
        )}
      </nav>

      
    </>
  );
};

// const NavBar = () => {
//   const [opportunityOpen, setOpportunityOpen] = useState(false);
//   const [employersOpen, setEmployersOpen] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <>
//       <nav className="w-full bg-[#FDF9F5] text-white shadow-md">
//         <div className="max-w-[1920px] mx-auto h-full flex items-center justify-between p-4 sm:px-6 lg:px-8">
//           {/* Logo */}
//           <img src={LOGO} alt="Logo" className="h-12" />

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-6 items-center">
//             <a
//               href="#home"
//               className="hover:text-[#F84B04] text-[#425066] hover:underline"
//             >
//               Home
//             </a>
//             <a
//               href="#about"
//               className="hover:text-[#F84B04] text-[#425066] hover:underline"
//             >
//               About
//             </a>

//             {/* Opportunity Dropdown */}
//             <div className="relative group">
//               <button className="flex items-center hover:text-[#F84B04] text-[#425066] hover:underline focus:outline-none">
//                 Opportunity <RiArrowDropDownLine className="text-lg" />
//               </button>
//               <div className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-md py-2 hidden group-hover:block">
//                 <a
//                   href="#internships"
//                   className="block px-4 py-2 text-[#425066] hover:bg-gray-100"
//                 >
//                   Internships
//                 </a>
//                 <a
//                   href="#jobs"
//                   className="block px-4 py-2 text-[#425066] hover:bg-gray-100"
//                 >
//                   Full-Time Jobs
//                 </a>
//                 <a
//                   href="#freelance"
//                   className="block px-4 py-2 text-[#425066] hover:bg-gray-100"
//                 >
//                   Freelance Work
//                 </a>
//               </div>
//             </div>

//             {/* Employers Dropdown */}
//             <div className="relative group">
//               <button className="flex items-center hover:text-[#F84B04] text-[#425066] hover:underline focus:outline-none">
//                 Employers <RiArrowDropDownLine className="text-lg" />
//               </button>
//               <div className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-md py-2 hidden group-hover:block">
//                 <a
//                   href="#post-job"
//                   className="block px-4 py-2 text-[#425066] hover:bg-gray-100"
//                 >
//                   Post a Job
//                 </a>
//                 <a
//                   href="#find-candidates"
//                   className="block px-4 py-2 text-[#425066] hover:bg-gray-100"
//                 >
//                   Find Candidates
//                 </a>
//               </div>
//             </div>

//             <a
//               href="#Candidates"
//               className="hover:text-[#F84B04] text-[#425066] hover:underline"
//             >
//               Candidates
//             </a>
//             <a
//               href="#Pricing"
//               className="hover:text-[#F84B04] text-[#425066] hover:underline"
//             >
//               Pricing
//             </a>
//             <a
//               href="#Contact"
//               className="hover:text-[#F84B04] text-[#425066] hover:underline"
//             >
//               Contact
//             </a>
//           </div>

//           {/* Right Section (Login/Register Buttons) */}
//           <div className=" hidden sm:flex items-center space-x-4">
//             <button className="px-6 py-3 w-[150px] text-[#F84B04] border-2 border-[#F84B04] rounded-full flex items-center justify-center gap-2 hover:bg-[#F84B04] hover:text-white">
//               <img src={login} alt="Login" className="w-5 h-5" />
//               Login
//             </button>
//             <button className="px-6 py-3 w-[150px] bg-[#F84B04] rounded-full flex items-center justify-center gap-2 hover:bg-[#F84B04]">
//               <img src={register} alt="Register" className="w-5 h-5" />
//               Register
//             </button>
//           </div>

//           <div>
//             {/* Mobile Menu Button */}
//             <div className="md:hidden">
//               <button
//                 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//                 className="text-[#425066] text-2xl"
//               >
//                 {mobileMenuOpen ? <RiCloseLine size={28}/> : <IoMenu size={28}/>}
//               </button>
//             </div>

//             {/* Mobile Menu */}
//             {/* {mobileMenuOpen && <SideBarDrawer />} */}
//           </div>
//         </div>
//       </nav>

//       <Banner />
//     </>
//   );
// };

export default NavBar;
