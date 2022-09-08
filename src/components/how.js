import React from "react";
import search from "../images/search.png";
import hand from "../images/hand.png";
import track from "../images/track.png";
import dash1 from "../images/dash1.png";
import dash2 from "../images/dash2.png";

const How = () => {
  return (
    <div className='my-40 flex flex-col items-center justify-center '>
      <h1 className='font-bold text-3xl'>How it works?</h1>
      <div className='grid md:grid-cols-5 justify-center my-12'>
        <div className='flex flex-col items-center text-center'>
          <img
            src={search}
            className='bg-[#9672FF] p-4 w-16 rounded-xl shadow-xl shadow-[#ccbff3] mb-4'
            alt='search'
          />

          <h4 className='font-bold text-lg my-3'>Research Suburbs</h4>
          <p className='text-sm'>
            Wonder twenty hunted and put income set desire expect. Am cottage
            calling.
          </p>
        </div>
        <div className='flex items-cente justify-center my-10 md:my-0'>
          <img src={dash1} className='md:mt-6 h-fit ' alt='' />
        </div>
        <div className='flex flex-col items-center text-center'>
          <img
            src={hand}
            className='bg-[#4DDFFD] p-4 w-16 rounded-xl shadow-xl shadow-[#cbedf4] mb-4'
            alt='search'
          />

          <h4 className='font-bold text-lg my-3'>Instant Valuation</h4>
          <p className='text-sm'>
            Conveying or northward offending admitting perfectly my. Colonel
            gravit and moonlight.
          </p>
        </div>
        <div className='flex items-cente justify-center my-10 md:my-0'>
          <img src={dash2} className='md:mt-6 h-fit ' alt='' />
        </div>
        <div className='flex flex-col items-center text-center'>
          <img
            src={track}
            className='bg-[#F2B8EC] p-4 w-16 rounded-xl shadow-xl shadow-[#f5dff3] mb-4'
            alt='search'
          />

          <h4 className='font-bold text-lg my-3'>Track Property</h4>
          <p className='text-sm'>
            Moderate children at of outweigh it. Unsatiable it considered
            invitation he travelling insensible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default How;
