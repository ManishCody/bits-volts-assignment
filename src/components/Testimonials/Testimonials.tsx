import React, { useEffect, useCallback, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardFooter } from '../ui/card';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';

const Testimonials = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
    const [selectedIndex, setSelectedIndex] = useState(0);

    const testimonials = [
        {
            id: 1,
            text: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
            author: "John Smith",
            position: "Marketing Director at XYZ Corp",
            bubbleImage: "/bubble.svg",
            bubblePosition: "right",
        },
        {
            id: 2,
            text: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
            author: "Jane Doe",
            position: "CEO at ABC Inc",
            bubbleImage: "/bubble-1.svg",
            bubblePosition: "center",
        },
        {
            id: 3,
            text: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
            author: "Mike Brown",
            position: "CMO at Growthify",
            bubbleImage: "/bubble-2.svg",
            bubblePosition: "left",
        },
    ];

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on('select', () => setSelectedIndex(emblaApi.selectedScrollSnap()));
    }, [emblaApi]);

    return (
        <div className="w-full flex flex-col items-start gap-8 px-6 md:px-10 lg:px-20 py-8 md:py-12 mt-0 md:mt-6 lg:py-16">
            <div className='flex flex-col md:flex-row gap-10'>
                <div className="inline-flex w-full md:w-auto flex-col items-center md:items-start ">
                    <Badge className="px-[7px] hover:text-white text-black py-0 bg-green rounded-[7px] font-h-2 text-[length:var(--h-2-font-size)] tracking-[var(--h-2-letter-spacing)] leading-[var(--h-2-line-height)] font-[number:var(--h-2-font-weight)]">
                        Testimonials
                    </Badge>
                </div>

                <div className="max-w-xl font-p text-[length:var(--p-font-size)] tracking-[var(--p-letter-spacing)] leading-[var(--p-line-height)] font-[number:var(--p-font-weight)]">
                    <p> Hear from Our Satisfied Clients: Read Our Testimonials</p> to Learn More about Our Digital Marketing Services
                </div>
            </div>

            <div className="relative w-full bg-[#191A23] rounded-3xl min-h-[450px]">
                <div className="overflow-hidden  h-[580px] md:h-[400px] mb-20 md:mb-0" ref={emblaRef}>
                    <div className="flex">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="min-w-0 flex-[0_0_100%] md:flex-[0_0_50%] px-2 py-4">
                                <Card
                                    className="h-full mt-6 md:ml-4  ml-1 bg-[#191A23] w-[80vw] md:w-[40vw] text-white  relative  border-8 rounded-3xl"
                                    style={{
                                        borderImageSource: "url('/bubble.svg')",
                                        borderImageSlice: 80,
                                        borderImageRepeat: 'stretch',
                                        borderImageOutset: 0,
                                        borderImageWidth: 8,
                                    }}
                                >
                                    <CardContent className="relative z-10  flex flex-col justify-between h-full">
                                        <div className="mt-10 px-4 md:px-3">
                                            <p className="font-p text-base md:text-sm leading-relaxed text-white">
                                                {testimonial.text}
                                            </p>
                                        </div>
                                        <div className="relative bottom-[-80px] font-['Space_Grotesk',sans-serif] z-30">
                                            <span className="block text-[#B9FF66] font-medium text-sm md:text-base mb-1">
                                                {testimonial.author}
                                                <span className="block text-white  text-xs md:text-sm opacity-80">
                                                    {testimonial.position}
                                                </span>
                                            </span>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                        ))}
                    </div>
                </div>

                {/* Navigation Arrows & Indicators */}
                <div className="absolute bottom-6 left-0 right-0 flex items-center w-full px-10 justify-center gap-4 z-20 overflow-visible">
                    <div className='flex justify-between w-full md:w-1/2'>
                        <button
                            onClick={scrollPrev}
                            className="bg-[#20232D] text-white rounded-full p-2 hover:bg-[#2A2D3A]"
                            aria-label="Previous testimonial"
                        >
                            <ArrowLeftIcon className="w-5 h-5" />
                        </button>

                        <div className='flex justify-center items-center gap-4'>
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => emblaApi?.scrollTo(index)}
                                    className="w-3 h-3 rounded-full"
                                >
                                    <img
                                        src={selectedIndex === index ? 'green-icon.png' : 'white-icon.png'}
                                        alt="icon"
                                    />
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={scrollNext}
                            className="bg-[#20232D] text-white rounded-full p-2 hover:bg-[#2A2D3A]"
                            aria-label="Next testimonial"
                        >
                            <ArrowRightIcon className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
