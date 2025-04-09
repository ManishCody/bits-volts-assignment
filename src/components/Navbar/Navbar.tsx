import React, { useState, JSX } from "react";
import { Button } from "../ui/button";

export const Navbar = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ["About us", "Services", "Use Cases", "Pricing", "Blog"];

  return (
    <nav className="w-full px-4 md:px-20 py-6 md:py-14 relative">
      <div className="flex items-center justify-between w-full">
        <div className="inline-flex items-center gap-2.5">
          <img className="w-[160px] md:w-[219.54px] h-9" alt="Logo" src="/logo.svg" />
        </div>
        <div className="hidden md:flex items-center gap-4">
          {navItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className="font-['Space_Grotesk',Helvetica] text-sm"
            >
              {item}
            </Button>
          ))}
          <Button className="border border-solid border-[#191a23] rounded-[14px] px-6 py-3 md:px-8 md:py-7 font-['Space_Grotesk',Helvetica] text-sm bg-transparent text-black hover:bg-gray-100">
            Request a quote
          </Button>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <img src="/hamburger.png" alt="Menu" className="w-5 h-5" />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-3">
          {navItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className="w-full justify-start font-['Space_Grotesk',Helvetica] text-sm"
            >
              {item}
            </Button>
          ))}
          <Button className="border border-solid border-[#191a23] rounded-[14px] px-6 py-3 font-['Space_Grotesk',Helvetica] text-sm bg-transparent text-black hover:bg-gray-100 w-full text-left">
            Request a quote
          </Button>
        </div>
      )}
    </nav>
  );
};
