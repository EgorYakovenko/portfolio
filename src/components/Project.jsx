// коммандный проект Team project
// Сделано лично Made personally Self-performed
import "../scss/project.scss";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: -50,
          stretch: 0,
          depth: 150,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

// export default function Project() {
//   return (
//     <>
//       <p className="test">Project</p>
//       <section>
//         <div>
//           <img className="preview" src="../../public/web-studio.png" alt="" />
//           <p>Individual project</p>
//         </div>
//         <div>
//           <h2> WebStudio</h2>
//           <p>
//             The site is designed with a semantic structure, adaptive layout, and
//             an intuitive interface.
//           </p>
//           <ul>
//             <li>
//               <svg
//                 className="test2"
//                 // class="advantages-icon"
//                 // aria-label="стратегия"
//                 // width="32"
//                 // height="32"
//               >
//                 <use href="../../public/svg/set.svg#icon-html"></use>
//               </svg>
//             </li>
//             <li>
//               <svg
//                 className="test2"
//                 // class="advantages-icon"
//                 // aria-label="стратегия"
//                 // width="32"
//                 // height="32"
//               >
//                 <use href="../../public/svg/set.svg#icon-css"></use>
//               </svg>
//             </li>
//           </ul>
//         </div>
//       </section>
//     </>
//   );
// }
