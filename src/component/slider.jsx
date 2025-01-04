import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const images = [
  { src: "/con1.jpg" },
  { src: "/con2.jpg" },
  { src: "/con3.png" },
  { src: "/con4.jpg" }
];

const Gallery = () => {
  const [popupImage, setPopupImage] = useState(null);

  const openPopup = (image) => {
    setPopupImage(image);
  };

  const closePopup = () => {
    setPopupImage(null);
  };

  return (
    <div id="gallery" className="px-4 py-8 mt-6">
      <div className="mx-auto flex flex-col gap-8 md:flex-row md:items-center md:justify-center mb-6">
        <h2 className="text-[#D82D43] text-3xl font-bold text-center mb-4">Gallery</h2>
      </div>
      <div className="max-w-5xl mx-auto">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
            },
          }}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          autoplay={images.length > 3 ? { delay: 3000, disableOnInteraction: false } : false}
          className="mySwiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div 
                className="relative group cursor-pointer"
                onClick={() => openPopup(image)}
              >
                <div className="overflow-hidden rounded-2xl transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-xl">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-36 md:h-64 object-cover rounded-2xl"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 rounded-2xl"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {popupImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={closePopup}>
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <img
              src={popupImage.src}
              alt={popupImage.alt}
              className="max-w-3xl max-h-[80vh] object-contain rounded-lg"
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={closePopup}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
