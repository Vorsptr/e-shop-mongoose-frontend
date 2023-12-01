import gamerpc1 from "../../assets/pc.png";
import { useState, useEffect, useCallback } from "react";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IMAGES_DUMMY = [
  {
    img: gamerpc1,
    description: "Tekintse meg az új Rhodium szériás gépeinket",
  },
  {
    img: gamerpc1,
    description: "Asztali számítógépek az Ön igényei alapján",
  },
  {
    img: gamerpc1,
    description:
      "Állítsa össze saját számítógépét úgy, ahogy a legjobbnak látja",
  },
];

export default function Carousel() {
  const [currentImage, setCurrentImage] = useState(0);
  const handleNextItem = useCallback(() => {
    setCurrentImage((prev) => {
      if (prev + 1 > IMAGES_DUMMY.length - 1) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  }, []);
  const handlePrevItem = () => {
    setCurrentImage((prev) => {
      if (prev - 1 < 0) {
        return IMAGES_DUMMY.length - 1;
      } else {
        return prev - 1;
      }
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextItem();
    }, 10000);
    return () => {
      clearInterval(interval);
    };
  }, [handleNextItem]);

  return (
    <div className="w-[1450px] h-[600px] m-auto my-32 relative align-middle items-center flex overflow-hidden tracking-[5px] bg-hero-background bg-fill bg-no-repeat bg-center">
      {IMAGES_DUMMY.map((item, index) => {
        let carouselClass = `opacity-100 -translate-x-0`;
        if (currentImage !== index && currentImage > index) {
          carouselClass = ` opacity-0 -translate-x-full`;
        } else if (currentImage !== index && currentImage < index) {
          carouselClass = ` opacity-0 translate-x-full`;
        }
        return (
          <>
            <div
              className={`absolute transition duration-700 z-0 ${carouselClass} w-full h-full flex px-48 gap-40`}
            >
              <img
                key={index}
                className={`object-contain py-8 lg:h-full md:h-4/5 sm:h-2/4 relative`}
                src={item.img}
              ></img>
              <div className="w-2/3 flex flex-col py-16 items-center font-raleway justify-around gap-4">
                <h1 className="text-5xl text-light-white font-vt font-semibold drop-shadow-lg">
                  {item.description}
                </h1>
                <button className="bg-light-white py-2 px-8 shadow-lg rounded font-vt text-3xl font-light drop-shadow-xl">
                  Katt ide
                </button>
              </div>
            </div>
          </>
        );
      })}
      <button
        onClick={handlePrevItem}
        className="absolute text-text-color left-4"
      >
        <FontAwesomeIcon icon={faArrowLeft} style={{ color: "#e0e0e0" }} />
      </button>
      <button
        onClick={handleNextItem}
        className="absolute text-text-color z-10 right-4"
      >
        <FontAwesomeIcon icon={faArrowRight} style={{ color: "#e0e0e0" }} />
      </button>
      <div></div>
    </div>
  );
}
