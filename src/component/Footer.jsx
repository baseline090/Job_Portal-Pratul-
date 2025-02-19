import React from "react";
import LOGO from "../assets/navbar/LOGO.png";

const FooterSection = () => {
  return (
    <footer className="bg-[#FDF9F5] py-12 px-6">
      <div className="container mx-auto p-5 ">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-12">
          {/* LOGO SECTION */}
          <div>
            <img src={LOGO} alt="Logo"  />
            <p className="mt-5 text-[#4A4266] text-[16px] font-normal">
              Lorem ipsum dolor sit amet consectetur Vitae nunc.
            </p>
            <div className="mt-5 space-y-2">
              <p className="text-[#4A4266] text-[16px] font-normal">
                Privacy Policy
              </p>
              <p className="text-[#4A4266] text-[16px] font-normal">
                Terms and Conditions
              </p>
            </div>
          </div>

          {/* FOR CANDIDATES */}
          <div>
            <h3 className="text-[#4A4266] text-lg font-semibold mb-4">
              FOR CANDIDATES
            </h3>
            <ul className="space-y-3">
              {[
                "Browse Jobs",
                "Candidate Dashboard",
                "Jobs Atevis",
                "Return and Refund",
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="hover:text-gray-500 text-[#4A4266] text-[16px]"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* FOR EMPLOYERS */}
          <div>
            <h3 className="text-[#4A4266] text-lg font-semibold mb-4">
              FOR EMPLOYERS
            </h3>
            <ul className="space-y-3">
              {[
                "All Employers",
                "Employee Dashboard",
                "Browse Candidates",
                "Submit Job",
                "Job Packages",
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="hover:text-gray-500 text-[#4A4266] text-[16px]"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ABOUT US */}
          <div>
            <h3 className="text-[#4A4266] text-lg font-semibold mb-4">
              ABOUT US
            </h3>
            <ul className="space-y-3">
              {["Contact Us", "About Us", "Packages", "FAQ"].map(
                (item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="hover:text-gray-500 text-[#4A4266] text-[16px]"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* HELPFUL RESOURCES */}
          <div>
            <h3 className="text-[#4A4266] text-lg font-semibold mb-4">
              HELPFUL RESOURCES
            </h3>
            <ul className="space-y-3">
              {[
                "Terms of Use",
                "Privacy Center",
                "Security Center",
                "Accessibility Center",
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="hover:text-gray-500 text-[#4A4266] text-[16px]"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIAL MEDIA */}
          <div>
            <h3 className="text-[#4A4266] text-lg font-semibold mb-4">
              SOCIAL MEDIA
            </h3>
            <ul className="space-y-3">
              {["+1000-000-000-0000", "demo@mail.com"].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="hover:text-gray-500 text-[#4A4266] text-[16px]"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="mt-12 pt-6 flex justify-center">
        <p className="text-center text-[#4A4266] text-[16px] font-normal font-[jost]">
          © Demo 2025 | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;

// <footer className="w-full py-12 mt-8 bg-[#FDF9F5]">
//   <div className="max-w-[1320px] mx-auto px-4">
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
//       {/* {/ Logo and Contact Info Column /} */}
//       <div className="lg:col-span-1">
//           <img src={LOGO} alt="Logo" />

//         <div className="space-y-2">
//           <h3 className="text-[18px] text-[#202124] font-medium">Lorem ipsum dolor sit amet consectetur Vitae nunc. s</h3>
//           <p classname="text-[#696969]">Privacy Policy</p>
//           <p classname="text-[#696969]">Terms and Condition</p>
//         </div>
//       </div>

//       {/* {/ For Candidates Column /} */}
//       <div className="lg:col-span-1">
//         <h3 className="text-[18px] text-[#202124] font-medium mb-6">For Candidates</h3>
//         <ul className="space-y-3 text-[14px] text-[#696969]">
//           <li>
//             <a href="#" className="footer-item">Browse Jobs</a>
//           </li>
//           <li>
//             <a href="#" className="footer-item">Candidate Dashboard</a>
//           </li>
//           <li>
//             <a href="#" className="footer-item">Job Alerts</a>
//           </li>
//           <li>
//             <a href="#" className="footer-item">My Bookmarks</a>
//           </li>
//         </ul>
//       </div>

//       {/* {/ For Employers Column /} */}
//       <div className="lg:col-span-1">
//         <h3 className="text-[18px] text-[#202124] font-medium mb-6">For Employers</h3>
//         <ul className="space-y-3 text-[14px] text-[#696969]">
//           <li>
//             <a href="#" className="footer-item">All Employers</a>
//           </li>
//           <li>
//             <a href="#" className="footer-item">Employer Dashboard</a>
//           </li>
//           <li>
//             <a href="#" className="footer-item">Browse Candidates</a>
//           </li>
//           <li>
//             <a href="#" className="footer-item">Submit Job</a>
//           </li>
//           <li>
//             <a href="#" className="footer-item">Job Packages</a>
//           </li>
//         </ul>
//       </div>

//       {/* {/ About Us Column /} */}
//       <div className="lg:col-span-1">
//         <h3 className="text-[18px] text-[#202124] font-medium mb-6">About Us</h3>
//         <ul className="space-y-3 text-[14px] text-[#696969]">
//           <li>
//             <a href="#" className="footer-item">Contact Us</a>
//           </li>
//           <li>
//             <a href="#" className="footer-item">About Us</a>
//           </li>
//           <li>
//             <a href="#" className="footer-item">Packages</a>
//           </li>
//           <li>
//             <a href="#" className="footer-item">FAQ</a>
//           </li>
//         </ul>
//       </div>

//       {/* {/ Helpful Resources Column /} */}
//       <div className="lg:col-span-1">
//         <h3 className="text-[18px] mb-6 text-[#202124] font-medium">Helpful Resources</h3>
//         <ul className="space-y-3 text-[14px] text-[#696969]">
//           <li>
//             <a href="#" className="footer-item">Terms of Use</a>
//           </li>
//           <li>
//             <a href="#" className="footer-item">Privacy Center</a>
//           </li>
//           <li>
//             <a href="#" className="footer-item">Security Center</a>
//           </li>
//           <li>
//             <a href="#" className="footer-item">Accessibility Center</a>
//           </li>
//         </ul>
//       </div>
//     </div>

//     {/* {/ Copyright /} */}
//     <div className="mt-12 pt-8 border-t border-gray-200">
//       <p className="text-[#696969] text-sm">© 2021 Superio. All Rights Reserved.</p>
//     </div>
//   </div>
// </footer>
