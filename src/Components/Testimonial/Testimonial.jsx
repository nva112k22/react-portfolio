import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import profile1 from "../../img/profile1.jpg";
import profile2 from "../../img/profile2.jpg";
import profile3 from "../../img/profile3.jpg";
import profile4 from "../../img/profile4.jpg";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
const Testimonial = () => {
  const client = [
    {
      img: profile1,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae magnam quas eum, cupiditate aliquam odio, exercitationem vero, accusantium iste dignissimos obcaecati. Omnis quia aperiam cum debitis. Eligendi laboriosam ex placeat!",
    },
    {
      img: profile2,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae magnam quas eum, cupiditate aliquam odio, exercitationem vero, accusantium iste dignissimos obcaecati. Omnis quia aperiam cum debitis. Eligendi laboriosam ex placeat!",
    },
    {
      img: profile3,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae magnam quas eum, cupiditate aliquam odio, exercitationem vero, accusantium iste dignissimos obcaecati. Omnis quia aperiam cum debitis. Eligendi laboriosam ex placeat!",
    },
    {
      img: profile4,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae magnam quas eum, cupiditate aliquam odio, exercitationem vero, accusantium iste dignissimos obcaecati. Omnis quia aperiam cum debitis. Eligendi laboriosam ex placeat!",
    },
  ];
  return (
    <div className="t-wrapper" id="Testimonial">
      <div className="t-heading">
        <span>Clients always get</span>
        <span>Exceptional work</span>
        <span>From me...</span>
        {/* <div className="blur t-blur1" style={{ background: "ABF1FF94" }}></div> */}
        {/* <div
          className="blur t-blur2"
          style={{ background: "var(--purple)" }}
        ></div> */}
      </div>
      {/* Slider */}
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {client.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
