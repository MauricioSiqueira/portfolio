import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Card } from "../ui/Card";
import { cards } from "../../data/Cards";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  EffectCoverflow,
  Pagination,
} from "swiper/modules";

export function Projects() {
    const swiperRef = useRef<SwiperType | null>(null);
    return (
        <section id="projects" className="min-h-screen mt-50">
            <h1 className="text-center m-10 text-4xl font-bold">
                My Projects
            </h1>

            <div className="flex items-center justify-center">
                <Swiper
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                loop={false}
                watchSlidesProgress={true}
                slidesPerView="auto"
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[EffectCoverflow, Pagination]}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper; 
                }}
                className="pb-12!"
                >
                {cards.map((card) => (
                    <SwiperSlide key={card.id} className="w-87.5!">
                    <Card
                        title={card.title}
                        description={card.description}
                        imageUrl={card.imageUrl}
                        onClick={() => window.open(card.urlRepo, "_blank")}
                    />
                    </SwiperSlide>
                ))}
                </Swiper>
                
                
            </div>
            <div className="flex items-center justify-center gap-6 mt-8">
                <button onClick={() => swiperRef.current?.slidePrev()} className="w-11 h-11 flex items-center justify-center rounded-full bg-white shadow-md cursor-pointer text-xl hover:scale-110 transition">
                    ←
                </button>

                <button onClick={() => swiperRef.current?.slideNext()} className="w-11 h-11 flex items-center justify-center rounded-full bg-white shadow-md cursor-pointer text-xl hover:scale-110 transition">
                    →
                </button>
            </div>
        </section>
    );
}