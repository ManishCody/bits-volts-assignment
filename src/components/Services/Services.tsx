import React, { JSX } from "react";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";

export const Services = (): JSX.Element => {
  const services = [
    {
      title: ["Search engine", "optimization"],
      bgColor: "bg-grey",
      labelBgColor: "bg-green",
      imageSrc: "/tokyo-magnifier-web-search-with-elements-2.png",
      imageAlt: "Tokyo magnifier web",
    },
    {
      title: ["Pay-per-click", "advertising"],
      bgColor: "bg-green",
      labelBgColor: "bg-white",
      imageSrc: "/tokyo-selecting-a-value-in-the-browser-window-1.png",
      imageAlt: "Tokyo selecting a value",
    },
  ];

  return (
    <>
      <section className="flex flex-col md:flex-row w-full  items-start gap-6 md:gap-10 px-4 md:px-20 py-10 md:py-14">
        <div className="inline-flex flex-col w-full md:w-auto items-center justify-center md:items-start ">
          <Badge className="px-[7px] hover:text-white text-black py-0 bg-green rounded-[7px] font-h-2 text-[length:var(--h-2-font-size)] tracking-[var(--h-2-letter-spacing)] leading-[var(--h-2-line-height)] font-[number:var(--h-2-font-weight)]">
            Services
          </Badge>
        </div>
        <div className="max-w-xl font-p text-[length:var(--p-font-size)] tracking-[var(--p-letter-spacing)] leading-[var(--p-line-height)] font-[number:var(--p-font-weight)]">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </div>
      </section>
      <div className="flex flex-wrap md:flex-nowrap justify-center gap-6 md:gap-10 px-4 md:px-20 py-6">
        {services.map((service, index) => (
          <Card
            key={index}
            className={`flex flex-col md:flex-row w-full max-w-[600px] md:h-[360px] items-start md:items-center justify-between p-6 md:p-[50px] ${service.bgColor} rounded-[30px] md:rounded-[45px] overflow-hidden border border-solid border-[#191a23] shadow-[0px_5px_0px_#191a23]`}
          >
            <CardContent className="p-0 flex flex-col items-start justify-between gap-10 md:gap-[93px]">
              <div className="inline-flex flex-col items-start">
                {service.title.map((line, lineIndex) => (
                  <Badge
                    key={lineIndex}
                    className={`px-[7px] whitespace-nowrap text-black py-0 ${service.labelBgColor} rounded-[7px] font-h-3 text-[length:var(--h-3-font-size)] tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] font-[number:var(--h-3-font-weight)]`}
                  >
                    {line}
                  </Badge>
                ))}
              </div>
              <div className=" hidden md:inline-flex items-center gap-[15px]">
                <img
                  className=" w-10 h-10 top-[11px] left-2.5"
                  alt="Arrow"
                  src="/green-arrow.png"
                />
                <span className="font-['Space_Grotesk',Helvetica] font-normal text-black text-xl leading-7 whitespace-nowrap">
                  Learn more
                </span>
              </div>
            </CardContent>
            <div className="w-full h-full mt-6 md:mt-0 flex gap-10 justify-center md:justify-end items-end">
              <div className="relative">
                <img
                  className="w-7 h-7 md:hidden flex justify-start items-baseline mt-2"
                  alt="Arrow"
                  src="/green-arrow.png"
                />
              </div>
              <div className="flex justify-end items-end mb-0 md:mb-10">
                <img
                  className="top-0.5 left-0 w-3/4 h-3/4 md:w-full md:h-full object-contain"
                  alt={service.imageAlt}
                  src={service.imageSrc}
                />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
};