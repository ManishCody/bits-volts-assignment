import React, { useState, JSX } from "react";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";

interface WorkingProcessStep {
  number: string;
  title: string;
  description: string;
}

export const WorkingProcess = (): JSX.Element => {
  const workingProcessSteps: WorkingProcessStep[] = [
    {
      number: "01",
      title: "Consultation",
      description:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      number: "02",
      title: "Research and Strategy Development",
      description:
        "Our team will conduct thorough research into your industry, competitors, and target market. Based on this analysis, we will develop a comprehensive digital marketing strategy tailored to your specific goals and budget.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <section className="w-full flex flex-col md:flex-row items-start gap-6 md:gap-10 px-4 md:px-20 py-10 md:py-14">
        <div className="inline-flex w-full md:w-auto flex-col items-center justify-center md:items-start ">
          <Badge className="px-[7px] hover:text-white text-black py-0 bg-green rounded-[7px] font-h-2 text-[length:var(--h-2-font-size)] tracking-[var(--h-2-letter-spacing)] leading-[var(--h-2-line-height)] font-[number:var(--h-2-font-weight)]">
            Our Working Process
          </Badge>
        </div>

        <div className="max-w-xl font-p text-[length:var(--p-font-size)] tracking-[var(--p-letter-spacing)] leading-[var(--p-line-height)] font-[number:var(--p-font-weight)]">
          <p>Step-by-Step Guide to Achieving</p> Your Business Goals
        </div>
      </section>

      <div className="flex flex-col gap-8 px-4 md:px-20 py-5 md:py-5">
        {workingProcessSteps.map((step, index) => (
          <div
            key={index}
            className={`w-full max-w-6xl mx-auto flex flex-col items-start ${openIndex === index ? "gap-6" : "gap-2.5"
              } px-5 md:px-8 py-6 ${openIndex === index ? "bg-green rounded-xl" : "bg-grey rounded-full md:rounded-2xl"
              }   border border-solid border-[#d4d4d8] shadow-[0px_5px_0px_#191a23]`}
          >
            {openIndex === index && (
              <div className="w-full">
                <Separator className="w-full h-px bg-[#000000]" />
                <div className="mt-6 font-p text-sm leading-relaxed text-[#000000]">
                  {step.description}
                </div>
              </div>
            )}
            <div
              className="w-full flex items-center justify-between cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex  justify-center sm:items-center gap-2 sm:gap-[15px]">
                <span className="font-['Space_Grotesk',Helvetica] font-medium text-[#000000] text-3xl sm:text-[2.3rem] leading-none">
                  {step.number}
                </span>
                <span className="text-lg sm:text-2xl font-['Space_Grotesk',Helvetica] font-medium text-[#000000] leading-tight">
                  {step.title}
                </span>
              </div>
              <div className="w-10 h-10 rounded-full flex items-center justify-center">
                <img
                  src={openIndex === index ? "./plus-icon-1.svg" : "./plus-icon.svg"}
                  alt={openIndex === index ? "-" : "+"}
                  className="w-full h-full text-[#000000]"
                />
              </div>
            </div>

          </div>
        ))}
      </div>
    </>
  );
};
