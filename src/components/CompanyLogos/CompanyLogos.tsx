import { JSX } from "react";

export const CompanyLogos = (): JSX.Element => {
  const companyLogos = [
    { src: "/company-logo-4.svg", alt: "amazon" },
    { src: "/company-logo-1.svg", alt: "dribbble" },
    { src: "/company-logo-2.svg", alt: "HubSpot" },
    { src: "/company-logo-5.svg", alt: "Netflix" },
    { src: "/company-logo-3.svg", alt: "Notion" },
    { src: "/company-logo.svg", alt: "Zoom" },
  ];

  return (
    <div className="px-4 md:px-20 py-10 md:py-14">
      <div className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center justify-center">
        {companyLogos.map((logo, index) => (
          <img
            key={index}
            className="h-8 sm:h-10 grayscale object-contain"
            alt={logo.alt}
            src={logo.src}
          />
        ))}
      </div>
    </div>
  );
};