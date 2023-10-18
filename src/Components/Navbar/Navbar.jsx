import { useContext } from "react";

import { Button, Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../../../context/UserContext";
const Navbar1 = () => {
  const { user, logoutFromAccount } = useContext(authContext);
  // alert(navigator.userAgent);
  // return (
  //   <>
  //     <nav className="bg-white border-gray-200 fixed w-full top-0 z-50 ">
  //       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  //         <NavLink to={"/"} className="flex items-center">
  //           <div className="flex items-center">
  //             <img src="/logo/LOGO.png" className=" w-24" alt="Logo" />
  //           </div>
  //         </NavLink>
  //         <button
  //           data-collapse-toggle="navbar-dropdown"
  //           type="button"
  //           className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
  //           aria-controls="navbar-dropdown"
  //           aria-expanded="false"
  //         >
  //           <span className="sr-only">Open main menu</span>
  //           <svg
  //             className="w-5 h-5"
  //             aria-hidden="true"
  //             xmlns="http://www.w3.org/2000/svg"
  //             fill="none"
  //             viewBox="0 0 17 14"
  //           >
  //             <path
  //               stroke="currentColor"
  //               strokeLinecap="round"
  //               strokeLinejoin="round"
  //               strokeWidth="2"
  //               d="M1 1h15M1 7h15M1 13h15"
  //             />
  //           </svg>
  //         </button>
  //         <div
  //           className="hidden w-full md:block md:w-auto"
  //           id="navbar-dropdown"
  //         >
  //           <ul className="flex flex-col items-center font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-5 md:mt-0 md:border-0 md:bg-white">
  //             {/* <li>
  //               <Link
  //                 to="#"
  //                 className="block py-2 pl-3 pr-4 text-black bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 "
  //                 aria-current="page"
  //               >
  //                 ক্লাস ৫-১২
  //               </Link>
  //             </li> */}
  //             <li>
  //               <button
  //                 id="dropdownNavbarLink"
  //                 data-dropdown-toggle="dropdownNavbar1"
  //                 className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto"
  //               >
  //                 ক্লাস ৫-১২
  //                 <svg
  //                   className="w-2.5 h-2.5 ml-2.5"
  //                   aria-hidden="true"
  //                   xmlns="http://www.w3.org/2000/svg"
  //                   fill="none"
  //                   viewBox="0 0 10 6"
  //                 >
  //                   <path
  //                     stroke="currentColor"
  //                     strokeLinecap="round"
  //                     strokeLinejoin="round"
  //                     strokeWidth="2"
  //                     d="m1 1 4 4 4-4"
  //                   />
  //                 </svg>
  //               </button>
  //               {/* <!-- Dropdown menu --> */}
  //               <div
  //                 id="dropdownNavbar1"
  //                 className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
  //               >
  //                 <ul
  //                   className="py-2 text-gray-700 "
  //                   aria-labelledby="dropdownLargeButton"
  //                 >
  //                   <li>
  //                     <Link
  //                       to={"class/class-5"}
  //                       className="block px-4 py-4 hover:bg-gray-100"
  //                     >
  //                       <div className="flex gap-1 items-center">
  //                         <img
  //                           width="28"
  //                           height="28"
  //                           src="https://img.icons8.com/fluency/48/class.png"
  //                           alt="class"
  //                         />
  //                         <span className="text-lg">ক্লাস ৫</span>
  //                       </div>
  //                     </Link>
  //                   </li>
  //                   <li>
  //                     <Link
  //                       to={"class/class-6"}
  //                       className="block px-4 py-4 hover:bg-gray-100"
  //                     >
  //                       <div className="flex gap-1 items-center">
  //                         <img
  //                           width="28"
  //                           height="28"
  //                           src="https://img.icons8.com/fluency/48/class.png"
  //                           alt="class"
  //                         />
  //                         <span className="text-lg">ক্লাস ৬</span>
  //                       </div>
  //                     </Link>
  //                   </li>
  //                   <li>
  //                     <Link
  //                       to={"class/class-7"}
  //                       className="block px-4 py-4 hover:bg-gray-100"
  //                     >
  //                       <div className="flex gap-1 items-center">
  //                         <img
  //                           width="28"
  //                           height="28"
  //                           src="https://img.icons8.com/fluency/48/class.png"
  //                           alt="development-skill"
  //                         />
  //                         <span className="text-lg">ক্লাস ৭</span>
  //                       </div>
  //                     </Link>
  //                   </li>
  //                   <li>
  //                     <Link
  //                       to={"class/class-8"}
  //                       className="block px-4 py-4 hover:bg-gray-100"
  //                     >
  //                       <div className="flex gap-1 items-center">
  //                         <img
  //                           width="28"
  //                           height="28"
  //                           src="https://img.icons8.com/fluency/48/class.png"
  //                           alt="development-skill"
  //                         />
  //                         <span className="text-lg">ক্লাস ৮</span>
  //                       </div>
  //                     </Link>
  //                   </li>
  //                   <li>
  //                     <Link
  //                       to={"class/class-9"}
  //                       className="block px-4 py-4 hover:bg-gray-100"
  //                     >
  //                       <div className="flex gap-1 items-center">
  //                         <img
  //                           width="28"
  //                           height="28"
  //                           src="https://img.icons8.com/fluency/48/class.png"
  //                           alt="development-skill"
  //                         />
  //                         <span className="text-lg">ক্লাস ৯</span>
  //                       </div>
  //                     </Link>
  //                   </li>
  //                   <li>
  //                     <Link
  //                       to={"class/class-10"}
  //                       className="block px-4 py-4 hover:bg-gray-100"
  //                     >
  //                       <div className="flex gap-1 items-center">
  //                         <img
  //                           width="28"
  //                           height="28"
  //                           src="https://img.icons8.com/fluency/48/class.png"
  //                           alt="development-skill"
  //                         />
  //                         <span className="text-lg">ক্লাস ১০</span>
  //                       </div>
  //                     </Link>
  //                   </li>
  //                   <li>
  //                     <Link
  //                       to={"class/class-hsc"}
  //                       className="block px-4 py-4 hover:bg-gray-100"
  //                     >
  //                       <div className="flex gap-1 items-center">
  //                         <img
  //                           width="28"
  //                           height="28"
  //                           src="https://img.icons8.com/fluency/48/class.png"
  //                           alt="development-skill"
  //                         />
  //                         <span className="text-lg">এইচএসসি</span>
  //                       </div>
  //                     </Link>
  //                   </li>
  //                 </ul>
  //               </div>
  //             </li>
  //             <li>
  //               <button
  //                 id="dropdownNavbarLink"
  //                 data-dropdown-toggle="dropdownNavbar"
  //                 className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto"
  //               >
  //                 স্কিলস{" "}
  //                 <svg
  //                   className="w-2.5 h-2.5 ml-2.5"
  //                   aria-hidden="true"
  //                   xmlns="http://www.w3.org/2000/svg"
  //                   fill="none"
  //                   viewBox="0 0 10 6"
  //                 >
  //                   <path
  //                     stroke="currentColor"
  //                     strokeLinecap="round"
  //                     strokeLinejoin="round"
  //                     strokeWidth="2"
  //                     d="m1 1 4 4 4-4"
  //                   />
  //                 </svg>
  //               </button>
  //               {/* <!-- Dropdown menu --> */}
  //               <div
  //                 id="dropdownNavbar"
  //                 className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
  //               >
  //                 <ul
  //                   className="py-2 text-gray-700 "
  //                   aria-labelledby="dropdownLargeButton"
  //                 >
  //                   <li>
  //                     <Link
  //                       to={"/skill"}
  //                       className="block px-4 py-4 hover:bg-gray-100"
  //                     >
  //                       <div className="flex gap-1 items-center">
  //                         <img
  //                           width="28"
  //                           height="28"
  //                           src="https://img.icons8.com/fluency/48/development-skill.png"
  //                           alt="development-skill"
  //                         />
  //                         <span className="text-lg">অনলাইন ব্যাচ</span>
  //                       </div>
  //                     </Link>
  //                   </li>
  //                   <li>
  //                     <Link
  //                       to={"/skill"}
  //                       className="block px-4 py-4 hover:bg-gray-100"
  //                     >
  //                       <div className="flex gap-1 items-center">
  //                         <img
  //                           width="28"
  //                           height="28"
  //                           src="https://img.icons8.com/fluency/48/development-skill.png"
  //                           alt="development-skill"
  //                         />
  //                         <span className="text-lg">অনলাইন ব্যাচ</span>
  //                       </div>
  //                     </Link>
  //                   </li>
  //                   <li>
  //                     <Link
  //                       to={"/skill"}
  //                       className="block px-4 py-4 hover:bg-gray-100"
  //                     >
  //                       <div className="flex gap-1 items-center">
  //                         <img
  //                           width="28"
  //                           height="28"
  //                           src="https://img.icons8.com/fluency/48/development-skill.png"
  //                           alt="development-skill"
  //                         />
  //                         <span className="text-lg">অনলাইন ব্যাচ</span>
  //                       </div>
  //                     </Link>
  //                   </li>
  //                   <li>
  //                     <Link
  //                       to={"/skill"}
  //                       className="block px-4 py-4 hover:bg-gray-100"
  //                     >
  //                       <div className="flex gap-1 items-center">
  //                         <img
  //                           width="28"
  //                           height="28"
  //                           src="https://img.icons8.com/fluency/48/development-skill.png"
  //                           alt="development-skill"
  //                         />
  //                         <span className="text-lg">অনলাইন ব্যাচ</span>
  //                       </div>
  //                     </Link>
  //                   </li>
  //                   <li>
  //                     <Link
  //                       to={"/skill"}
  //                       className="block px-4 py-4 hover:bg-gray-100"
  //                     >
  //                       <div className="flex gap-1 items-center">
  //                         <img
  //                           width="28"
  //                           height="28"
  //                           src="https://img.icons8.com/fluency/48/development-skill.png"
  //                           alt="development-skill"
  //                         />
  //                         <span className="text-lg">অনলাইন ব্যাচ</span>
  //                       </div>
  //                     </Link>
  //                   </li>
  //                   <li>
  //                     <Link
  //                       to={"/skill"}
  //                       className="block px-4 py-4 hover:bg-gray-100"
  //                     >
  //                       <div className="flex gap-1 items-center">
  //                         <img
  //                           width="28"
  //                           height="28"
  //                           src="https://img.icons8.com/fluency/48/development-skill.png"
  //                           alt="development-skill"
  //                         />
  //                         <span className="text-lg">অনলাইন ব্যাচ</span>
  //                       </div>
  //                     </Link>
  //                   </li>
  //                 </ul>
  //               </div>
  //             </li>
  //             <li>
  //               <Link
  //                 to="/admission"
  //                 className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
  //               >
  //                 ভর্তি পরীক্ষা
  //               </Link>
  //             </li>
  //             <li>
  //               <Link
  //                 to="#"
  //                 className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
  //               >
  //                 চাকরি প্রস্তুতি
  //               </Link>
  //             </li>
  //             <li>
  //               <Link
  //                 to="#"
  //                 className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
  //               >
  //                 অনলাইন ব্যাচ
  //               </Link>
  //             </li>
  //             {user?.email ? (
  //               <button
  //                 onClick={() => logoutFromAccount()}
  //                 className="bg-black py-3 px-5 text-white rounded hover:bg-slate-950"
  //               >
  //                 লগ আউট
  //               </button>
  //             ) : (
  //               <Link
  //                 to="/login"
  //                 className="bg-black py-3 px-5 text-white rounded hover:bg-slate-950"
  //               >
  //                 লগ-ইন
  //               </Link>
  //             )}
  //           </ul>
  //         </div>
  //       </div>
  //     </nav>
  //   </>
  // );

  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <img
          src="/favicon.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbar1;
