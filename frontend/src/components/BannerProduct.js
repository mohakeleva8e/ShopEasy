import { useEffect, useState } from "react";
import image1 from "../assets/banner/img1.jpg";
import image2 from "../assets/banner/img2.jpeg";
import image3 from "../assets/banner/img3.jpg";
import image4 from "../assets/banner/img4.webp";
import image5 from "../assets/banner/img5.jpg";

import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";

const BannerProduct = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const desktopImages = [image1, image2, image3, image4, image5];

  const nextImage = () => {
    if (desktopImages.length - 1 > currentImage)
      setCurrentImage((preve) => preve + 1);
    else setCurrentImage(0);
  };

  const preveImage = () => {
    if (currentImage === 0) setCurrentImage(desktopImages.length - 1);
    else setCurrentImage((preve) => preve - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (desktopImages.length - 1 > currentImage) {
        nextImage();
      } else {
        setCurrentImage(0);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <div className="container mx-auto px-4 rounded ">
      <div className="h-56 md:h-72 w-full bg-slate-200 relative">
        <div className="absolute z-10 h-full w-full md:flex items-center hidden ">
          <div className=" flex justify-between w-full text-2xl">
            <button
              onClick={preveImage}
              className="bg-white shadow-md rounded-full p-1 ms-2"
            >
              <FaAngleLeft />
            </button>
            <button
              onClick={nextImage}
              className="bg-white shadow-md rounded-full p-1 me-2"
            >
              <FaAngleRight />
            </button>
          </div>
        </div>

        <div className="flex h-full w-full overflow-hidden">
          {desktopImages.map((imageURl, index) => {
            return (
              <div
                className="w-full h-full min-w-full min-h-full transition-all"
                key={imageURl}
                style={{ transform: `translateX(-${currentImage * 100}%)` }}
              >
                <img src={imageURl} className="w-full h-full object-cover" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BannerProduct;
