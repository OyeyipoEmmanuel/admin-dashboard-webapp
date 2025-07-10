import React, { useRef } from "react";
import CardBackground from "../../components/CardBackground";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { FaGreaterThan } from "react-icons/fa";

import { QUICK_TF_DATA } from "../../data/QuickTransferData";
import { LuSend } from "react-icons/lu";


const QuickTransfer = () => {
  const swiperRef = useRef(null);
  return (
    <section className="relative">
      <h1 className="py-2 primaryColor2 text-2xl font-semibold">
        Quick Transfer
      </h1>

      <CardBackground>
        
        <Swiper
          className="flex justify-around"
          spaceBetween={50}
          slidesPerView={2}
          loop={true}
          modules={[Navigation]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {QUICK_TF_DATA.map((eachData) => (
            <SwiperSlide
              key={eachData.id}
              className="flex flex-col space-y-3 items-center cursor-pointer hover:-translate-y-1 duration-300 transition ease-in-out"
            >
              <span className="">
                <img
                  src={eachData.profile_img}
                  alt="User"
                  className="rounded-full mx-auto w-20 h-20"
                />
              </span>
              <span className="">
                <h1 className="font-light text-center">{eachData.name}</h1>
                <p className="text-[#718EBF] font-light text-center">{eachData.role}</p>
              </span>
            </SwiperSlide>
          ))}
          
        </Swiper>
        <div onClick={() => swiperRef.current.slideNext()} className="cursor-pointer absolute top-[30%] md:-right-5 -right-3 bg-white rounded-full p-3 shadow-2xl text-[#718EBF]">
          <FaGreaterThan/>
        </div>

        <div className="mt-8">
          <p className="text-[#718EBF] text-lg font-light w-[40%] mb-3">Write Amount</p>
          <form className=" bg-[#EDF1F7] rounded-full flex flex-row justify-between w-full">
            <input type="number" placeholder="$525" className="outline-none px-6 w-[50%] text-lg"/>
            <button className="text-white text-xl bg-[#1814F3] rounded-full px-8 py-4 w-[50%] flex items-center space-x-2 md:space-x-3 md:text-[22px]">
              <p>Send</p>
              <LuSend className="text-white"/>
            </button>
          </form>
        </div>
      </CardBackground>
    </section>
  );
};

export default QuickTransfer;
