import React from "react";
import Navbar from "./Navbar";
import { IoIosArrowRoundForward } from "react-icons/io";
import { gsap } from "gsap";

import Blob from "../assets/Blob.svg";
import HeroPng from "../assets/hero.png";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-title",
      { opacity: 0, y: "100px" },
      { opacity: 1, y: 0, duration: 1 }
    );
    gsap.fromTo(
      ".hero-button",
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 0.5 }
    );
    gsap.fromTo(
      ".hero-img",
      { opacity: 0, x: "100px" },
      { opacity: 1, x: 0, duration: 1, delay: 0.5 }
    );
  }, []);

  return (
    <section className="bg-light overflow-hidden relative">
      <Navbar />
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
        {/* Brand Info */}
        <div className="flex flex-col justify-center py-14 md:py-0 relative z-20">
          <div className="text-center md:text-left space-y-10 lg:max-w-[400px]">
            <h1 className="text-3xl lg:text-5xl font-bold !leading-snug hero-title">
              Let's Learn to build a{" "}
              <span className="text-secondary">Website</span> for your business
            </h1>

            <div className="flex justify-center md:justify-start">
              <button className="primary-btn flex items-center gap-2 group hero-button">
                Get Started
                <IoIosArrowRoundForward className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" />
              </button>
            </div>
          </div>
        </div>
        {/* Hero Image */}
        <div className="flex justify-center items-center">
          <img
            src={HeroPng}
            className="w-[400px] xl:w-[600px] relative z-10 drop-shadow hero-img"
          />
          <img
            src={Blob}
            className="absolute -bottom-32 w-[800px] md:w-[1500px] z-[1] hidden md:block"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
