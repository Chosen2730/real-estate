import React from "react";
import { MdOutlineHomeWork } from "react-icons/md";
import hero from "../images/hero.png";
import bg from "../images/bg.png";
import buzz from "../images/buzz.png";
import chase from "../images/chase.png";
import ms from "../images/ms.png";
import gucc from "../images/gucc.png";
import air from "../images/airbnb.png";
import uber from "../images/uber.png";

const Hero = () => {
  const logos = [buzz, chase, ms, gucc, air, uber];
  return (
    <div className='relative'>
      <div className='grid md:grid-cols-2'>
        <div className='mt-12'>
          <h3 className='text-red-500 uppercase text-lg sm:text-xl font-extrabold'>
            Residential & Office Spaces
          </h3>
          <h1 className='text-gray-800 text-4xl leading-[3rem] md:text-5xl font-extrabold my-4'>
            Smart Living Style for Smart People
          </h1>
          <p className='text-base my-6'>
            Much did had call new drew that kept. Limits expect wonder law she.
            Now has you views woman noisy match money rooms.
          </p>
          <form
            action=''
            className='flex items-center shadow-2xl border-2 border-gray-50 text-sm my-4 pl-2 gap-2 bg-white'
          >
            <MdOutlineHomeWork className='text-gray-300 text-2xl' />
            <input
              type='text'
              placeholder='Enter Zipcode to search porperies'
              className='placeholder-gray-300 p-3 py-4 w-full'
            />
            <button
              type='submit'
              className='bg-red-500 text-white text-xs p-5 ml-auto w-fit whitespace-nowrap'
            >
              Search Now!
            </button>
          </form>
          <div className='mt-40'>
            <h1 className='text-sm my-4'>Our Amazing Partners</h1>
            <div className='flex gap-4'>
              {logos.map((logo, i) => {
                return (
                  <img
                    key={i}
                    src={logo}
                    className='w-10 sm:w-16'
                    alt={`${i}logo`}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <img src={hero} alt='house' className='w-[800px] hidden md:block' />
        <img
          src={bg}
          alt='bg'
          className='absolute -top-40 -right-44 -z-10 w-[500px] h-[700px]'
        />
      </div>
    </div>
  );
};

export default Hero;
