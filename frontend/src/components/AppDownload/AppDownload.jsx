import React from "react";
import { assets } from "../../assets/assets";

const AppDownload = () => {
  return (
    <div id="mobile-app" className="bg-black text-white px-6 py-10 md:px-20 my-25 flex flex-col md:flex-row items-center justify-between gap-8 rounded-2xl shadow-md">
      <p className="text-center md:text-left text-xl md:text-2xl font-semibold leading-relaxed">
        For a Better Experience, <br />
        <span className="text-primary">Download the TummyTaxi App</span>
      </p>

      <div className="flex flex-col md:flex-row gap-4">
        <img
          src={assets.play_store}
          alt="play store"
          className="w-36 cursor-pointer hover:scale-105 transition-transform duration-300"
        />
        <img
          src={assets.app_store}
          alt="app store"
          className="w-36 cursor-pointer hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  );
};

export default AppDownload;
