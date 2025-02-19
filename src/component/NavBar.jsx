import React, { useState } from "react";
import { RiArrowDropDownLine, RiMenu3Line, RiCloseLine } from "react-icons/ri";
import login from "../assets/navbar/login.png";
import register from "../assets/navbar/register.png";
import LOGO from "../assets/navbar/LOGO.png";

const NavBar = () => {
  const [opportunityOpen, setOpportunityOpen] = useState(false);
  const [employersOpen, setEmployersOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full bg-[#FDF9F5] text-[#425066] shadow-md">
        <div className="max-w- mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-5">
          {/* Logo */}
          <img src={LOGO} alt="Logo" className="w-24 sm:w-28 md:w-32" />

          {/* Desktop , laptop & Tablet Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {["Home", "About", "Candidates", "Pricing", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative text-[20px] hover:text-[#F84B04] after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#F84B04] after:left-0 after:bottom-0 after:transition-all hover:after:w-full"
                >
                  {item}
                </a>
              )
            )}

            {/* Opportunity Dropdown */}
            <div className="relative group">
              <button className="flex items-center hover:text-[#F84B04] after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#F84B04] after:left-0 after:bottom-0 after:transition-all hover:after:w-full">
                Opportunity <RiArrowDropDownLine className="text-lg" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-md py-2 hidden group-hover:block">
                {["Internships", "Full-Time Jobs", "Freelance Work"].map(
                  (option) => (
                    <a
                      key={option}
                      href={`#${option.toLowerCase()}`}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {option}
                    </a>
                  )
                )}
              </div>
            </div>

            {/* Employers Dropdown */}
            <div className="relative group">
              <button className="flex items-center hover:text-[#F84B04] after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#F84B04] after:left-0 after:bottom-0 after:transition-all hover:after:w-full">
                Employers <RiArrowDropDownLine className="text-lg" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-md py-2 hidden group-hover:block">
                {["Post a Job", "Find Candidates"].map((option) => (
                  <a
                    key={option}
                    href={`#${option.toLowerCase().replace(" ", "-")}`}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    {option}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Login & Register Buttons */}
          <div className=" hidden sm:flex items-center space-x-4">
            <button className="px-6 py-3 w-[135px] h-[50px] text-[#F84B04] border-2 border-[#F84B04] rounded-full flex items-center justify-center gap-2 hover:bg-[#F84B04] hover:text-white">
              <img src={login} alt="Login" className="w-5 h-5  " />
              Login
            </button>
            <button className="px-6 py-3 w-[135px] h-[50px] bg-[#F84B04] rounded-full flex items-center text-white justify-center gap-2 hover:bg-[#F84B04]">
              <img src={register} alt="Register" className="w-5 h-5" />
              Register
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-2xl"
            >
              {mobileMenuOpen ? <RiCloseLine /> : <RiMenu3Line />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-white z-50 p-6 transition-transform duration-300 ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } lg:hidden`}
        >
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-4 right-4 text-3xl"
          >
            <RiCloseLine />
          </button>

          {["Home", "About", "Candidates", "Pricing", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block py-2 text-[#425066] hover:text-[#F84B04]"
            >
              {item}
            </a>
          ))}

          {/* Opportunity Dropdown */}
          <div>
            <button
              onClick={() => setOpportunityOpen(!opportunityOpen)}
              className="w-full text-left py-2 flex items-center"
            >
              Opportunity <RiArrowDropDownLine className="ml-2 text-lg" />
            </button>
            {opportunityOpen && (
              <div className="pl-4">
                {["Internships", "Full-Time Jobs", "Freelance Work"].map(
                  (option) => (
                    <a
                      key={option}
                      href={`#${option.toLowerCase()}`}
                      className="block py-2 hover:bg-gray-100"
                    >
                      {option}
                    </a>
                  )
                )}
              </div>
            )}
          </div>

          {/* Employers Dropdown */}
          <div>
            <button
              onClick={() => setEmployersOpen(!employersOpen)}
              className="w-full text-left py-2 flex items-center"
            >
              Employers <RiArrowDropDownLine className="ml-2 text-lg" />
            </button>
            {employersOpen && (
              <div className="pl-4">
                {["Post a Job", "Find Candidates"].map((option) => (
                  <a
                    key={option}
                    href={`#${option.toLowerCase().replace(" ", "-")}`}
                    className="block py-2 hover:bg-gray-100"
                  >
                    {option}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Login & Register Buttons */}
          <div className="flex flex-col space-y-4 mt-4">
            <button className="px-6 py-2 w-full border-2 border-[#F84B04] rounded-full flex items-center justify-center gap-2 hover:bg-[#F84B04] hover:text-white">
              <img src={login} alt="Login" className="w-5 h-5" />
              Login
            </button>
            <button className="px-6 py-2 w-full bg-[#F84B04] text-white rounded-full flex items-center justify-center gap-2 hover:bg-[#F84B04]">
              <img src={register} alt="Register" className="w-5 h-5" />
              Register
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;

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
