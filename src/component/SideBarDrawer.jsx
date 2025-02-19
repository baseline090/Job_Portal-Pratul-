// import React, { useState } from "react";
// import { IoIosArrowDown } from "react-icons/io";
// import { MdKeyboardArrowRight } from "react-icons/md";

// function SideBarDrawer() {
//   const [opportunityOpen, setOpportunityOpen] = useState(false);
//   const [employersOpen, setEmployersOpen] = useState(false);



//   return (
//     <div className="bg-[#FDF9F5] p-4 shadow-md ">
//       <div className="mt-4">
//         <ul className="space-y-2">
//           <li>
//             <a
//               href="#"
//               className="block py-2 px-4 hover:bg-gray-200 text-[#1D1D1D] text-sm font-[jost] font-500"
//             >
//               Home
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="block py-2 px-4 hover:bg-gray-200 text-[#1D1D1D] text-sm font-[jost] font-500"
//             >
//               About
//             </a>
//           </li>

//           {/* Opportunity Dropdown */}
//           <li className="relative">
//             <button
//               className="flex justify-between items-center w-full py-2 px-4 hover:bg-gray-200 text-[#1D1D1D] text-sm font-[jost] font-[500]"
//               onClick={() => setOpportunityOpen(!opportunityOpen)}
//             >
//               Opportunity
//               {opportunityOpen ? (
//                 <IoIosArrowDown size={20} />
//               ) : (
//                 <MdKeyboardArrowRight size={20} />
//               )}
//             </button>
//             {opportunityOpen && (
//               <ul className="ml-4 mt-1 space-y-1 bg-white shadow-md">
//                 <li>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 hover:bg-gray-200 text-[#1D1D1D] text-sm font-[jost] font-[500]"
//                   >
//                     Option 1
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 hover:bg-gray-200 text-[#1D1D1D] text-sm font-[jost] font-[500]"
//                   >
//                     Option 2
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 hover:bg-gray-200 text-[#1D1D1D] text-sm font-[jost] font-[500]"
//                   >
//                     Option 3
//                   </a>
//                 </li>
//               </ul>
//             )}
//           </li>

//           {/* Employers Dropdown */}
//           <li className="relative">
//             <button
//               className="flex justify-between items-center w-full py-2 px-4 hover:bg-gray-200 text-[#1D1D1D] text-sm font-[jost] font-[500]"
//               onClick={() => setEmployersOpen(!employersOpen)}
//             >
//               Employers
//               {employersOpen ? (
//                 <IoIosArrowDown size={20} />
//               ) : (
//                 <MdKeyboardArrowRight size={20} />
//               )}
//             </button>
//             {employersOpen && (
//               <ul className="ml-4 mt-1 space-y-1 bg-white shadow-md">
//                 <li>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 hover:bg-gray-200 text-[#1D1D1D] text-sm font-[jost] font-[500]"
//                   >
//                     Option 1
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 hover:bg-gray-200 text-[#1D1D1D] text-sm font-[jost] font-[500]"
//                   >
//                     Option 2
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 hover:bg-gray-200 text-[#1D1D1D] text-sm font-[jost] font-[500]"
//                   >
//                     Option 3
//                   </a>
//                 </li>
//               </ul>
//             )}
//           </li>

//           <li>
//             <a
//               href="#"
//               className="block py-2 px-4 hover:bg-gray-200 text-[#1D1D1D] text-sm font-[jost] font-500"
//             >
//               Candidates
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="block py-2 px-4 hover:bg-gray-200 text-[#1D1D1D] text-sm font-[jost] font-500"
//             >
//               Pricing
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="block py-2 px-4 hover:bg-gray-200 text-[#1D1D1D] text-sm font-[jost] font-500"
//             >
//               Contact
//             </a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default SideBarDrawer;


// import { useState } from "react"
// import { IoIosArrowDown } from "react-icons/io"
// import { MdKeyboardArrowRight } from "react-icons/md"
// import { IoMenu } from "react-icons/io5"
// import { RiCloseLine } from "react-icons/ri"

// export function SideBarDrawer() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
//   const [opportunityOpen, setOpportunityOpen] = useState(false)
//   const [employersOpen, setEmployersOpen] = useState(false)

//   return (
//     <div className="relative">
//       {/* Mobile Menu Button */}
//       <div className="md:hidden">
//         <button
//           onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           className="text-[#425066] text-2xl"
//           aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
//         >
//           {mobileMenuOpen ? <RiCloseLine size={28} /> : <IoMenu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {mobileMenuOpen && (
//         <div className="absolute top-full left-0 right-0 z-50 md:hidden">
//           <div className="bg-[#FDF9F5] p-4 shadow-md">
//             <div className="mt-4">
//               <ul className="space-y-2">
//                 <li>
//                   <a href="#" className="block py-2 px-4 hover:bg-gray-200 text-[#1D1D1D] text-sm font-[jost] font-500">
//                     Home
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="block py-2 px-4 hover:bg-gray-200 text-[#1D1D1D] text-sm font-[jost] font-500">
//                     About
//                   </a>
//                 </li>

//                 {/* Opportunity Dropdown */}
//                 <li className="relative">
//                   <button
//                     className="flex justify-between items-center w-full py-2 px-4 hover:bg-gray-200 text-[#1D1D1D] text-sm font-[jost] font-[500]"
//                     onClick={() => setOpportunityOpen(!opportunityOpen)}
//                   >
//                     Opportunity
//                     {opportunityOpen ? <IoIosArrowDown size={20} /> : <MdKeyboardArrowRight size={20} />}
//                   </button>
//                   {opportunityOpen && (
//                     <ul className="ml-4 mt-1 space-y-1 bg-white shadow-md">
//                       <li>
//                         <a
//                           href="#"
//                           className="block px-4 py-2 hover:bg-gray-200 text-[#1D1D1D] text-sm font-[jost] font-[500]"
//                         >
//                           Option 1
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="#"
//                           className="block px-4 py-2 hover:bg-gray-200 text-[#1D1D1D] text-sm font-[jost] font-[500]"
//                         >
//                           Option 2
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="#"
//                           className="block px-4 py-2 hover:bg-gray-200 text-[#1D1D1D] text-sm font-[jost] font-[500]"
//                         >
//                           Option 3
//                         </a>
//                       </li>
//                     </ul>
//                   )}
//                 </li>

//                 {/* Employers Dropdown */}
//                 <li className="relative">
//                   <button
//                     className="flex justify-between items-center w-full py-2 px-4 hover:bg-gray-200 text-[#1D1D1D] text-sm font-[jost] font-[500]"
//                     onClick={() => setEmployersOpen(!employersOpen)}
//                   >
//                     Employers
//                     {employersOpen ? <IoIosArrowDown size={20} /> : <MdKeyboardArrowRight size={20} />}
//                   </button>
//                   {employersOpen && (
//                     <ul className="ml-4 mt-1 space-y-1 bg-white shadow-md">
//                       <li>
//                         <a
//                           href="#"
//                           className="block px-4 py-2 hover:bg-gray-200 text-[#1D1D1D] text-sm font-[jost] font-[500]"
//                         >
//                           Option 1
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="#"
//                           className="block px-4 py-2 hover:bg-gray-200 text-[#1D1D1D] text-sm font-[jost] font-[500]"
//                         >
//                           Option 2
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="#"
//                           className="block px-4 py-2 hover:bg-gray-200 text-[#1D1D1D] text-sm font-[jost] font-[500]"
//                         >
//                           Option 3
//                         </a>
//                       </li>
//                     </ul>
//                   )}
//                 </li>

//                 <li>
//                   <a href="#" className="block py-2 px-4 hover:bg-gray-200 text-[#1D1D1D] text-sm font-[jost] font-500">
//                     Candidates
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="block py-2 px-4 hover:bg-gray-200 text-[#1D1D1D] text-sm font-[jost] font-500">
//                     Pricing
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="block py-2 px-4 hover:bg-gray-200 text-[#1D1D1D] text-sm font-[jost] font-500">
//                     Contact
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

