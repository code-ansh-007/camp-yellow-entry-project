// ? Main Page Code

import Navbar from "./components/Navbar";
import ProgressBar from "./components/ProgressBar";
import { useState } from "react";
import VideoEmbed from "./components/VideoEmbed";
import examplePic1 from "./assets/exp1.jpg";
import examplePic2 from "./assets/exp2.jpg";

function App() {
  const [timeRemain, setTimeRemain] = useState({
    min: 2,
    sec: 0,
  });
  return (
    <>
      <Navbar />
      {/* MAIN ACTION SECTION BELOW */}
      <section className="flex flex-col sm:flex-row space-y-10 sm:space-y-0 sm:space-x-[200px] items-center justify-center mt-10 sm:mt-20">
        <div>
          <button className="p-4 py-3 border-[1px] border-white rounded-md">
            Enter Your App Name
          </button>
          <div className="flex flex-col items-start space-y-4 mt-7">
            <span className="text-xl">Upload Game Files:</span>
            <div className="flex space-x-4">
              <button className="px-5 py-2 rounded-lg text-sm bg-[#4f34e0]">
                CSV for Story
              </button>
              <button className="px-5 py-2 rounded-lg text-sm bg-[#4f34e0]">
                Game Assets
              </button>
              <button className="px-5 py-2 rounded-lg text-sm bg-[#4f34e0]">
                App Icon
              </button>
            </div>
            <span className="underline text-sm text-[#478ca5]">
              click here to download sample files
            </span>
            <button className="py-2 bg-gradient-to-r from-purple-600 to-orange-400 text-black text-opacity-30 text-lg rounded-md px-7">
              Click to build the game
            </button>
            <ProgressBar progressPercentage={10} />
            <span className="text-sm">
              {([1, 2, 3, 4, 5, 6, 7, 8, 9].includes(timeRemain.min)
                ? "0" + timeRemain.min
                : timeRemain.min) +
                ":" +
                ([1, 2, 3, 4, 5, 6, 7, 8, 9, 0].includes(timeRemain.sec)
                  ? "0" + timeRemain.sec
                  : timeRemain.sec)}{" "}
              minutes remaining
            </span>
          </div>
        </div>
        {/* YOUTUBE VIDEO EMBED CODE */}
        <div className="flex flex-col space-y-4 items-center">
          <VideoEmbed />
          <span className="text-xl">Check out the demo to get started</span>
        </div>
      </section>
      {/* BOTTOM SECTION NOT VISIBLE WELL */}
      <section className="flex flex-col items-center">
        <hr className="border-t-2 border-gray-400 w-[75%] my-5" />
        <span className="text-2xl">Games created using Wuri</span>
        <div className="flex space-x-10 sm:space-x-20 mt-6">
          <img src={examplePic1} alt="" className="w-[120px] sm:w-[200px]" />
          <img src={examplePic2} alt="" className="w-[120px] sm:w-[200px]" />
        </div>
      </section>
    </>
  );
}

export default App;
