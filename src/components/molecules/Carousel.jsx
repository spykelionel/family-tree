import { Card } from "@components/molecules";
import { useEffect, useState } from "react";

function Carousel({ ...props }) {
  const titles = [
    "First",
    "Second",
    "third",
    "Fourth",
    "Fifth",
    "Sixth",
    "Seventh",
    "Eight",
  ];
  const [carouselIndex, setCarouselIndex] = useState(0);
  const handleNext = () => {
    if (carouselIndex === titles.length - 1) {
      setCarouselIndex(0);
    } else setCarouselIndex((prev) => prev + 1);
  };
  const handlePrev = () => {
    if (carouselIndex === 0) setCarouselIndex(titles.length - 1);
    else setCarouselIndex((prev) => prev - 1);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [carouselIndex]);

  return (
    <div className="relative -top-40" {...props}>
      <div className="flex justify-center gap-2 flex-row items-center flex-wrap">
        <div
          className="flex justify-items-center bg-blue-400 items-center m-3 border-2 border-blue-500 p-2 cursor-pointer"
          style={{ borderRadius: "50%" }}
          onClick={handlePrev}
        >
          <button
            disabled={carouselIndex === 0}
            className="border font-bold text-xl m-2 border-blue-500 px-2 text-blue-500 rounded-full bg-slate-300 cursor-pointer"
            // style={{ borderRadius: "50%" }}
          >
            &lt;
            <span sr-only="Previous Item"></span>
          </button>
        </div>
        <Card title={titles[carouselIndex]} className="max-w-xs" />
        <div
          className="flex justify-items-center  bg-blue-400 items-center m-3 border-2 border-blue-500 p-2 cursor-pointer"
          style={{ borderRadius: "50%" }}
          onClick={handleNext}
        >
          <button
            disabled={carouselIndex === titles.length - 1}
            className="border font-bold text-xl m-2 border-blue-500 px-2 text-blue-500 rounded-full bg-slate-300 cursor-pointer"
          >
            &gt;
            <span sr-only="Next Item"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
