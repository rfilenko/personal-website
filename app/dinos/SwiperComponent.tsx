"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import ReactAudioPlayer from 'react-audio-player';
import { Dino } from "@/app/lib/interface";
import { TbMeat, TbLeaf } from "react-icons/tb";
// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
// import './styles.css';
import { Scrollbar } from 'swiper/modules';

export default function SwiperComponent({ children, dinoData }: { children?: React.ReactNode, dinoData: Dino[] }) {
    function shuffleArray(array: Dino[]) {
        const arr = array.sort(() => .5 - Math.random())
        return arr
    }

    const [dinosArr, setDinosArr] = useState<Dino[]>(dinoData)

    useEffect(() => {
        setDinosArr(shuffleArray(dinoData))
    }, [dinosArr])

    return <>
        <Swiper
        scrollbar={{ hide: true, draggable: true }}
        modules={[Scrollbar]}
        spaceBetween={25}
        className="swiperWrap"
        style={{ width: '100%', height: '100%' }}
    >
        {children}
            {dinosArr && dinosArr.map((dino: Dino) => {
            const dinoSlug = dino.name.toLowerCase()
            const dinoImgUrl = `/dino/${dinoSlug}.png`
                const hasAudioFIle = `dino/${dinoSlug}.mp3`.length

            return <SwiperSlide style={{ minHeight: '100%' }} key={dino._id}>
                <div className={`border-2 border-${dino.color}-400 dino m-4 mx-auto p-4 px-4 rounded-md max-w-lg`}>
                    <header className="flex flex-col gap-2 items-center mb-4">
                        <h2 className="font-extrabold text-2xl">{dino.name}</h2>

                        {hasAudioFIle && (
                            <ReactAudioPlayer
                            src={`dino/${dinoSlug}.mp3`} controls
                            className="block md:w-[300px]"
                            />
                        )}
                    </header>
                    <div className="relative flex justify-center">
                        <span className={`w-[200px] h-[200px] bg-${dino.color} absolute -z-0 rounded-full border-4 border-gray-300`}></span>
                        <Image src={dinoImgUrl} className="z-10" priority width={300} height={300} style={{ objectFit: "cover" }} alt={dino.name} />
                    </div>

                    <div className="dino-info flex flex-col gap-1 mt-4">
                        <h3 className={`font-bold text-xl text-${dino.color}-400`}>Info:</h3>
                        <p className="flex gap-1 items-center"><span className="font-bold">Diet:</span> {dino.diet}
                            <TbMeat style={{ color: dino.color }} size={30} /></p>
                        <p><span className="font-bold">Type of dinosaur:</span>{dino.type}</p>
                        <p className="flex gap-2">
                            {dino.dimensions}
                        </p>
                        <p><span className="font-bold">Food:</span>  {dino.food}</p>
                        <p><span className="font-bold">When it lived: </span>
                            Late Cretaceous, 74-70 million years ago</p>
                        <p><span className="font-bold">Found in: </span> Mongolia</p>
                    </div>
                </div>
            </SwiperSlide>
        })}
        </Swiper>
    </>
}
