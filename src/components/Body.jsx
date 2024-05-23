import React from 'react';

const Body = () => {
  return (
    <div className="lg:flex lg:items-center lg:justify-between lg:space-x-10 overflow-hidden">
      <div className="relative flex items-center justify-center lg:flex-1 lg:order-2 lg:overflow-hidden">
        <img src="./src/assets/Blue-Shape.svg" alt="1st" className="-rotate-45 h-64 md:h-72 lg:h-[450px]" />
        <img src="./src/assets/Pink-Shape.svg" alt="2nd" className="absolute -rotate-[30deg] h-64 md:h-72 lg:h-[450px]" />
        <img src="./src/assets/Purple-Shape.svg" alt="3rd" className="absolute -rotate-[15deg] h-64 md:h-72 lg:h-[450px]" />
        <img src="./src/assets/Hero-Model.png" alt="hero" className="absolute h-64 md:h-72 lg:h-[450px]" />
      </div>
      <div className="space-y-4 lg:flex-1 lg:order-1 lg:space-y-10 px-6 lg:px-0">
        <h1 className="text-5xl font-bold leading-tight font-playfair">Host your website in less than 5 minutes</h1>
        <p className="font-lato text-gray-600">
          With Hoster, get your website up and running in no less than 5 minutes with the most competitive pricing packages available online.
        </p>
        <form action="" className="flex flex-col gap-4 md:flex-row">
          <input
            className="flex-1 rounded-md px-4 py-3 border border-gray-300 placeholder-gray-500"
            type="email"
            placeholder="Enter your email address"
          />
          <button className="rounded-md px-4 py-3 bg-blue-500 hover:bg-blue-700 text-white">
            Join Waitlist
          </button>
        </form>
        <div className="flex items-center gap-2">
          <img src="./src/assets/Checkmark.svg" alt="check" />
          <p className="font-lato text-gray-600">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Body;
