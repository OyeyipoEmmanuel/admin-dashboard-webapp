import React, { useState } from "react";
import logoImg from "../assets/optimized-images/iconfinder_vector_65_09_473792 1.png";
import userImg from "../assets/optimized-images/pexels-christina-morillo-1181690 1.png";
import { GoHomeFill } from "react-icons/go";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { RiBankFill } from "react-icons/ri";
import { FaRegCreditCard } from "react-icons/fa";
import { PiHandCoinsBold } from "react-icons/pi";
import { BsTools } from "react-icons/bs";
import { SiMoneygram } from "react-icons/si";
import { IoSettingsSharp } from "react-icons/io5";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const location = useLocation();

  let navHeader;
  

  if (location.pathname === "/") {
    navHeader = "Dashboard";
  } else {
    navHeader =
      location.pathname.charAt(1).toUpperCase() + location.pathname.slice(2);
  }

  const handleToggleNav = () => {
    setToggleNav((prev) => !prev);
  };
  return (
    <main
      className={`${
        toggleNav ? "flex flex-col-reverse" : "flex flex-row"
      } fixed top-0 left-0 z-50 w-full`}
    >
      {/* Mobile Screen Nav */}
      {toggleNav && (
        <div
          className={`pb-6 px-10 ${
            !toggleNav ? "lg:max-w-[250px]" : "w-full"
          } min-h-screen fixed top-20 z-10 bg-white`}
        >
          <section className="flex items-center space-x-1 pt-4">
            <img src={logoImg} className="max-w-16" />
            <h1 className="text-2xl text-[#343C6A] font-extrabold">
              BankDash.
            </h1>
          </section>
          
          <section className="pt-6 flex flex-col space-y-7">
            <span className="flex items-center space-x-5">
              <GoHomeFill className="primaryColor text-2xl" />
              <Link to="/" onClick={()=>setToggleNav(false)}>
                <p className="primaryColor text-lg cursor-pointer">Dashboard</p>
              </Link>
            </span>
            <span className="flex items-center space-x-5">
              <FaMoneyBillTrendUp className="primaryColor text-2xl" />
              <Link to="/transactions" onClick={()=>setToggleNav(false)}>
                <p className="primaryColor text-lg cursor-pointer">
                  Transactions
                </p>
              </Link>
            </span>
            <span className="flex items-center space-x-5">
              <IoPerson className="primaryColor text-2xl" />
              <Link to="/accounts" onClick={()=>setToggleNav(false)}>
                <p className="primaryColor text-lg cursor-pointer">Accounts</p>
              </Link>
            </span>
            <span className="flex items-center space-x-5">
              <RiBankFill className="primaryColor text-2xl" />
              <Link to="investment" onClick={()=>setToggleNav(false)}>
                <p className="primaryColor text-lg cursor-pointer">
                  Investments
                </p>
              </Link>
            </span>
            <span className="flex items-center space-x-5">
              <FaRegCreditCard className="primaryColor text-2xl" />
              <Link to="/credit-card" onClick={()=>setToggleNav(false)}>
                <p className="primaryColor text-lg cursor-pointer">
                  Credit Cards
                </p>
              </Link>
            </span>
            <span className="flex items-center space-x-5">
              <PiHandCoinsBold className="primaryColor text-2xl" />
              <Link to="/loans" onClick={()=>setToggleNav(false)}>
                <p className="primaryColor text-lg cursor-pointer">Loans</p>
              </Link>
            </span>
            <span className="flex items-center space-x-5">
              <BsTools className="primaryColor text-2xl" />
              <Link to="/services" onClick={()=>setToggleNav(false)}>
                <p className="primaryColor text-lg cursor-pointer">Services</p>
              </Link>
            </span>
            <span className="flex items-center space-x-5">
              <SiMoneygram className="primaryColor text-2xl" />
              <Link to="/privileges" onClick={()=>setToggleNav(false)}>
                <p className="primaryColor text-lg cursor-pointer">
                  My Privileges
                </p>
              </Link>
            </span>
            <span className="flex items-center space-x-5">
              <IoSettingsSharp className="primaryColor text-2xl" />
              <Link to="/settings" onClick={()=>setToggleNav(false)}>
                <p className="primaryColor text-lg cursor-pointer">Settings</p>
              </Link>
            </span>
          </section>
        </div>
      )}

      {/* Desktop Screen Nav */}
      <div className={`pb-6 px-10 min-h-screen hidden lg:block`}>
        <section className="flex items-center space-x-1 min-h-22">
          <img src={logoImg} className="max-w-16" />
          <h1 className="text-2xl text-[#343C6A] font-extrabold">BankDash.</h1>
        </section>

        <section className="pt-6 flex flex-col space-y-7">
          <span className="flex items-center space-x-5">
            <GoHomeFill className="primaryColor text-2xl" />
            <Link to="/">
              <p className="primaryColor text-lg cursor-pointer">Dashboard</p>
            </Link>
          </span>
          <span className="flex items-center space-x-5">
            <FaMoneyBillTrendUp className="primaryColor text-2xl" />
            <Link to="/transactions">
              <p className="primaryColor text-lg cursor-pointer">
                Transactions
              </p>
            </Link>
          </span>
          <span className="flex items-center space-x-5">
            <IoPerson className="primaryColor text-2xl" />
            <Link to="/accounts">
              <p className="primaryColor text-lg cursor-pointer">Accounts</p>
            </Link>
          </span>
          <span className="flex items-center space-x-5">
            <RiBankFill className="primaryColor text-2xl" />
            <Link to="investment">
              <p className="primaryColor text-lg cursor-pointer">Investments</p>
            </Link>
          </span>
          <span className="flex items-center space-x-5">
            <FaRegCreditCard className="primaryColor text-2xl" />
            <Link to="/credit-card">
              <p className="primaryColor text-lg cursor-pointer">
                Credit Cards
              </p>
            </Link>
          </span>
          <span className="flex items-center space-x-5">
            <PiHandCoinsBold className="primaryColor text-2xl" />
            <Link to="/loans">
              <p className="primaryColor text-lg cursor-pointer">Loans</p>
            </Link>
          </span>
          <span className="flex items-center space-x-5">
            <BsTools className="primaryColor text-2xl" />
            <Link to="/services">
              <p className="primaryColor text-lg cursor-pointer">Services</p>
            </Link>
          </span>
          <span className="flex items-center space-x-5">
            <SiMoneygram className="primaryColor text-2xl" />
            <Link to="/privileges">
              <p className="primaryColor text-lg cursor-pointer">
                My Privileges
              </p>
            </Link>
          </span>
          <span className="flex items-center space-x-5">
            <IoSettingsSharp className="primaryColor text-2xl" />
            <Link to="/settings">
              <p className="primaryColor text-lg cursor-pointer">Settings</p>
            </Link>
          </span>
        </section>
      </div>

      <section className="p-6 lg:max-h-22 w-full lg:px-8 items-center flex justify-between bg-white">
        <div className="flex items-center space-x-5">
          <HiMiniBars3CenterLeft
            className="text-3xl primaryColor2 lg:hidden cursor-pointer"
            onClick={handleToggleNav}
          />
          <h1 className="text-2xl lg:text-3xl primaryColor2">{navHeader}</h1>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/settings"><IoSettingsOutline className="bg-gray-100 rounded-full text-3xl p-1" /></Link>
          <MdOutlineNotificationsActive className="text-red-500 bg-gray-100 rounded-full text-3xl p-1" />
          <img src={userImg} className="rounded-full w-8" />
        </div>
      </section>
    </main>
  );
};

export default Navbar;
