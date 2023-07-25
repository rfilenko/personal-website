"use client"

import { useState, useEffect } from "react";

import Image from "next/image";
import { Dino } from "@/app/lib/interface";
import { TbMeat, TbLeaf } from "react-icons/tb";

// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules';

import AudioButton from "./AudioButton";
import SoundButton from "./SoundButton";
import Pattern from "./Pattern";

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

    const shuffledDinoData = shuffleArray(dinoData)
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
                const dinoSlug = dino.name.toLowerCase()
                const dinoAudio = `audio-${dino.name.toLowerCase()}`
                const dinoImgUrl = `/dino/${dinoSlug}.png`
                const imgVisualStyles = `overflow-hidden w-[200px] h-[200px] absolute -z-0 rounded-full border-4 border-gray-300 bg-${dino.color}-500`

            return <SwiperSlide style={{ minHeight: '100%' }} key={dino._id}>
                <div className={`border-2 border-${dino.color}-400 dino m-4 mx-auto p-4 px-4 rounded-md max-w-lg`}>
                    <header className="flex flex-col gap-2 items-center mb-4">
                        <h2 className="font-extrabold text-2xl">{dino.name}</h2>
                        {(dinoSlug != 'nothosaurus') && (
                            <>
                                <div className="w-full mx-auto flex gap-2 justify-between">
                                    {dinoSlug && <SoundButton dinoSlug={dinoSlug} />}
                                    {dinoAudio && <AudioButton dinoAudio={dinoAudio} />}
                                </div>
                            </>
                        )
                        }

                    </header>
                    <div className="relative flex justify-center">
                        <span className={imgVisualStyles} style={{ backgroundColor: `${dino.color}` }}>
                            <Pattern color={dino.color} />
                        </span>
                        <Image src={dinoImgUrl} className="z-10 w-full h-auto" priority width={300} height={400} style={{ objectFit: "cover", height: 'auto' }} alt={dino.name} />
                    </div>

                    <div className="dino-info flex flex-col gap-1 mt-4">
                        <h3 className={`font-bold text-xl text-${dino.color}-300`}>Info:</h3>
                        <p className="flex gap-1 items-center"><span className="font-bold">Diet:</span> {dino.diet}
                            {(dino.color == 'green') ? <TbLeaf style={{ color: dino.color }} size={30} /> : (dino.color == 'red') ? <TbMeat style={{ color: dino.color }} size={30} /> : (dino.color == 'blue' || dino.color == 'gray') ? <TbLeaf style={{ color: dino.color }} size={30} /> : ""}
                        </p>
                        <p><span className="font-bold">Type of dinosaur:</span> {dino.type}</p>
                        <p className="flex gap-0.5 flex-wrap"> 
                            <span className="font-bold">Dimensions:</span>
                            {dino.dimensions}
                        </p>
                        <p><span className="font-bold">Food:</span>  {dino.food}</p>

                        {dino.lived && <p><span className="font-bold">When it lived: </span> {dino.lived}</p>}
                        {dino.found && <p> <span className="font-bold">Found in: </span> {dino.found}</p>}
                    </div>
                </div>
            </SwiperSlide>
        })}
        </Swiper>
    </>
}
