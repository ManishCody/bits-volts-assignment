import React, { JSX } from "react";
import { Button } from "../ui/button";

export const Hero = (): JSX.Element => {
  return (
    <header className="flex flex-col md:flex-row w-full justify-between px-4 md:px-20 py-10 md:py-14 bg-transparent gap-8 md:gap-10">
      <div className="flex flex-col w-full md:w-1/2 items-start text-left gap-5">
        <h1 className="w-full max-w-[531px] font-h-1 text-[length:var(--h-1-mobile-font-size)] md:text-[length:var(--h-1-font-size)] tracking-[var(--h-1-letter-spacing)] leading-[var(--h-1-line-height)] font-[number:var(--h-1-font-weight)]">
          Navigating the digital landscape for success
        </h1>
        <div className=" w-full flex md:hidden max-w-[600px] h-auto">
          <img
            src="/hero.png"
            alt="Hero illustration"
            className="w-full h-auto mx-auto"
          />
        </div>
        <p className="w-full max-w-[500px] font-['Space_Grotesk',Helvetica] font-normal text-base md:text-xl leading-relaxed md:leading-7">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media marketing,
          and content creation.
        </p>

        <Button className="bg-dark text-white rounded-[14px] w-full md:w-auto px-6 py-6 md:px-8 md:py-7 font-['Space_Grotesk',Helvetica] text-base md:text-xl">
          Book a consultation
        </Button>
      </div>
      <div className="w-full hidden md:flex md:w-1/2 max-w-[600px] h-auto">
        <img
          src="/hero.png"
          alt="Hero illustration"
          className="w-full h-auto mx-auto"
        />
      </div>
    </header>
  );
};
