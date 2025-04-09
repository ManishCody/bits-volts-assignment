import React, { JSX } from 'react';
import { Separator } from '../ui/separator';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';

const Footer = (): JSX.Element => {
  const footerLinks = ["About us", "Services", "Use Cases", "Pricing", "Blog"];

  return (
    <div className='mx-6 rounded-t-[45px] flex flex-col items-center md:items-start md:mx-20 mt-10 md:mt-14 gap-y-10 md:gap-y-[66px]'>
      <footer className="bg-dark w-full px-10 py-10 rounded-t-[45px] flex flex-col items-center md:items-start  gap-y-10 md:gap-y-[66px]">

        <div className="flex flex-col md:flex-row w-full items-center md:items-start justify-between md:gap-[155px]">
          <div className="w-[80px] h-[13px] flex justify-center items-center gap-2 md:w-[180px] md:h-[29px]">
            <img alt="Logo" src="/white-icon.png" className="w-4 h-4 md:w-7 md:h-7" />
            <img alt="Logo" src="/white-logo.png" className="w-full h-full" />
          </div>
          <div className="flex flex-col py-2 md:flex-row items-center justify-center gap-6 md:gap-10 order-2 md:order-none">
            {footerLinks.map((link, index) => (
              <Button
                key={index}
                variant="link"
                className={`font-['Space_Grotesk',Helvetica] font-normal text-white text-sm md:text-lg leading-normal md:underline p-0 h-auto ${link === "Blog" ? 'hidden md:block' : ''
                  }`}
              >
                {link}
              </Button>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-3 md:gap-5 order-3 md:order-none">
            <div className="relative w-[24px] h-[24px] md:w-[30px] md:h-[30px] bg-white rounded-[12px] md:rounded-[15px] flex items-center justify-center">
              <img alt="Linkedin" src="/linkedin.svg" className="w-[12px] h-[12px] md:w-[15px] md:h-[15px]" />
            </div>
            <div className="relative w-[24px] h-[24px] md:w-[30px] md:h-[30px]">
              <img alt="Social icon" src="/social-icon.svg" className="w-full h-full" />
            </div>
            <div className="relative w-[24px] h-[24px] md:w-[30px] md:h-[30px] bg-white rounded-[12px] md:rounded-[15px] flex items-center justify-center">
              <img alt="Twitter" src="/twitter.svg" className="w-[14px] h-[9px] md:w-[18px] md:h-3.5" />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full h-full items-start justify-between md:gap-[154px] py-2">
          <div className="flex flex-col w-full md:w-auto items-center md:items-start gap-4 md:gap-[27px]">
            <Badge className="px-2 py-0 bg-green rounded-[7px] font-h-5 md:font-h-4 text-black text-sm md:text-[length:var(--h-4-font-size)] tracking-tight md:tracking-[var(--h-4-letter-spacing)] leading-5 md:leading-[var(--h-4-line-height)] font-[number:var(--h-4-font-weight)]">
              Contact us:
            </Badge>
            <div className="flex flex-col w-full md:w-auto items-center justify-center md:items-start gap-3 md:gap-5 text-sm md:text-[length:var(--p-font-size)]">
              <p className="font-p text-white leading-relaxed md:leading-[var(--p-line-height)]">
                Email: info@positivus.com
              </p>
              <p className="font-p text-white leading-relaxed md:leading-[var(--p-line-height)]">
                Phone: 555-567-8901
              </p>
              <p className="font-p text-white text-center md:text-start leading-relaxed md:leading-[var(--p-line-height)]">
                Address: 1234 Main St
                <br />
                Moonstone City, Stardust State 12345
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row mt-5 items-start gap-4 md:gap-5 px-4 py-4 md:px-6 md:py-[58px] bg-[#292a32] rounded-[10px] md:rounded-[14px] w-full md:w-auto">
            <Input
              className="w-full md:w-[285px] px-4 py-6 md:px-10 md:py-7 rounded-[10px] md:rounded-[14px] border border-solid border-white bg-transparent text-white text-sm placeholder:text-sm"
              placeholder="Email"
            />
            <Button className="bg-green text-black rounded-[10px] md:rounded-[14px] hover:text-white px-4 py-6 md:px-10 md:py-7 font-['Space_Grotesk',Helvetica] text-sm md:text-xl w-full md:w-auto">
              Subscribe to news
            </Button>
          </div>
          <div className="flex md:hidden mt-10 w-full items-center justify-center gap-3 md:gap-5 order-3 md:order-none ">
            <div className="relative w-[24px] h-[24px] md:w-[30px] md:h-[30px] bg-white rounded-[12px] md:rounded-[15px] flex items-center justify-center">
              <img alt="Linkedin" src="/linkedin.svg" className="w-[12px] h-[12px] md:w-[15px] md:h-[15px]" />
            </div>
            <div className="relative w-[24px] h-[24px] md:w-[30px] md:h-[30px]">
              <img alt="Social icon" src="/social-icon.svg" className="w-full h-full" />
            </div>
            <div className="relative w-[24px] h-[24px] md:w-[30px] md:h-[30px] bg-white rounded-[12px] md:rounded-[15px] flex items-center justify-center">
              <img alt="Twitter" src="/twitter.svg" className="w-[14px] h-[9px] md:w-[18px] md:h-3.5" />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center md:items-start gap-y-6 md:gap-y-[50px]">
          <Separator className="w-full h-px bg-white opacity-20" />
          <div className="flex flex-col md:flex-row items-center md:items-start gap-y-4 md:gap-10 w-full justify-center md:justify-start">
            <p className="font-['Space_Grotesk',Helvetica] font-normal text-white text-sm md:text-lg leading-relaxed md:leading-7">
              © 2023 Positivus. All Rights Reserved.
            </p>
            <Button
              variant="link"
              className="font-['Space_Grotesk',Helvetica] font-normal text-white text-sm md:text-lg leading-relaxed md:leading-7 underline p-0 h-auto"
            >
              Privacy Policy
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;