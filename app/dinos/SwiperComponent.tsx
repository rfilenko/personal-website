"use client"

import { useState, useEffect } from "react";
import { Dino } from "@/app/lib/interface";

// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules';

import DinoAudio from "./DinoAudio";
import DinoVisual from "./DinoVisual";
import DinoInfo from "./DinoInfo";
import VideoPlayer from "./VideoPlayer";

export default function SwiperComponent({ children, dinoData }: { children?: React.ReactNode, dinoData: Dino[] }) {
    const [dinosArr, setDinosArr] = useState<Dino[]>(dinoData)
    const [hydrated, setHydrated] = useState(false);

    const handleSlideChange = () => {
        const audioEl = document.querySelectorAll('audio')
        Array.from(audioEl).forEach(el => {
            el.pause()
            el.currentTime = 0
        });
    }

    const shuffleArray = (array: Dino[]) => {
        const arr = array.sort(() => .5 - Math.random())
        return arr
    }

    const shuffledDinoData = dinoData
    useEffect(() => {
        setHydrated(true)
        setDinosArr(shuffledDinoData)
    }, [])

    return hydrated && <>
        <Swiper
            onSlideChange={() => handleSlideChange()}
            scrollbar={{ hide: true, draggable: true }}
            modules={[Scrollbar]}
            spaceBetween={25}
            className="swiperWrap"
            style={{ width: '100%', height: '100%' }} 
        >
        {children}
            {dinosArr && dinosArr.map((dino: Dino) => {
                
                return <SwiperSlide style={{ minHeight: '100%' }} key={dino._id}>
                    <div className={`border-2 border-${dino.color}-400 dino m-4 mx-auto p-4 px-4 rounded-md max-w-lg`}>
                        <header className="flex flex-col gap-2 items-center mb-4">
                            <h2 className="font-extrabold text-2xl">{dino.name}</h2>

                            <DinoAudio dino={dino}/>
                        </header>

                
                        <DinoVisual dino={dino}/>
                        <DinoInfo dino={dino}/>

                        {dino.video && <VideoPlayer video={dino.video} />}
                    </div>
                </SwiperSlide>
        })}
        </Swiper>
    </>
}
