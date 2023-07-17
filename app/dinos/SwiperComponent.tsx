"use client"

import Image from "next/image";
import ReactAudioPlayer from 'react-audio-player';
import { TbMeat, TbLeaf } from "react-icons/tb";
import { Dino } from "@/app/lib/interface";
// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
// import './styles.css';
import { Scrollbar } from 'swiper/modules';

export default function SwiperComponent({ children, dinoData }: { children?: React.ReactNode, dinoData: Dino[] }) {

    return <Swiper
        scrollbar={{ hide: true, draggable: true }}
        modules={[Scrollbar]}
        spaceBetween={25}
        className="swiperWrap"
        style={{ width: '100%', height: '100%' }}
    >
        {children}
        {dinoData.map((dino: Dino) => {
            const dinoSlug = dino.name.toLowerCase()
            const dinoImgUrl = `/dino/${dinoSlug}.png`
            return <SwiperSlide style={{ minHeight: '100%' }} key={dino._id}>
                <div className={`border-2 border-${dino.color}-400 dino m-4 mx-auto p-4 px-4 rounded-md max-w-lg`}>
                    <header className="flex flex-col gap-2 items-center mb-4">
                        <h2 className="font-extrabold text-2xl">{dino.name}</h2>
                        <ReactAudioPlayer
                            src={`dino/${dinoSlug}.mp3`} controls
                            className="block md:w-[300px]"
                        />
                    </header>
                    <div className="relative flex justify-center">
                        <span className={`w-[200px] h-[200px] bg-${dino.color}-500 absolute -z-0 rounded-full border-4 border-gray-300`}></span>
                        <Image src={dinoImgUrl} className="z-10" priority width={300} height={350} alt={dino.name} />
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
}


     // <SwiperSlide>
        //     <div className="border-2 border-green-300 dino m-4 mx-auto p-4 px-4 rounded-md max-w-lg bg-green-200">
        //         <header className="flex flex-col gap-2 items-center mb-4">
        //             <h2 className="font-extrabold text-2xl">Triceratops</h2>
        //             <ReactAudioPlayer
        //                 src="dino/triceratops.mp3" controls
        //                 className="block md:w-[300px]"
        //             />
        //         </header>

        //         <Image src="/dino/triceratops.png" width={300} height={350} alt="triceratops" />

        //         <div className="dino-info flex flex-col gap-1 mt-4">
        //             <h3 className="font-bold text-xl text-teal-400">Info:</h3>
        //             <p className="flex gap-1 items-center"><span className="font-bold">Diet:</span> herbivorous
        //                 <TbLeaf className="text-green-400" size={30} /></p>
        //             <p><span className="font-bold">Type of dinosaur:</span> ceratopsian</p>
        //             <p className="flex gap-2">
        //                 <span className="font-bold">Length:</span> 9.0m, <span className="font-bold">Weight:</span> 5500kg
        //             </p>
        //             <p><span className="font-bold">Food:</span> tough palm fronds</p>
        //             <p><span className="font-bold">When it lived: </span>
        //                 Late Cretaceous, 68-66 million years ago</p>
        //             <p><span className="font-bold">Found in: </span> USA</p>
        //         </div>
        //     </div>
        // </SwiperSlide>
        // <SwiperSlide>
        //     <div className="border-2 border-blue-400 dino m-4 mx-auto p-4 px-4 rounded-md max-w-lg bg-blue-300">
        //         <header className="flex flex-col gap-2 items-center mb-4">
        //             <h2 className="font-extrabold text-2xl">Nothosaurus</h2>
        //         </header>

        //         <Image src="/dino/nothosaurus.png" width={300} height={350} alt="Nothosaurus" />

        //         <div className="dino-info flex flex-col gap-1 mt-4">
        //             <h3 className="font-bold text-xl text-blue-500">Info:</h3>
        //             <p className="flex gap-1 items-center"><span className="font-bold">Diet:</span> herbivorous
        //                 <TbLeaf className="text-green-400" size={30} /></p>
        //             <p><span className="font-bold">Type of dinosaur:</span> “false lizard”</p>
        //             <p className="flex gap-2">
        //                 <span className="font-bold">Length:</span> 3-7 m, <span className="font-bold">Weight:</span> 150kg
        //             </p>
        //             <p><span className="font-bold">Food:</span> squid, fish and even terrestrial animals</p>
        //             <p><span className="font-bold">When it lived: </span>
        //                 Quaternary period, more than 240 million years ago</p>
        //             <p><span className="font-bold">Found in: </span> water inhabitant roaming through North Africa, China, Israel, and Russia coastal waters</p>
        //         </div>
        //     </div>
        // </SwiperSlide>
        // <SwiperSlide>
        //     <div className="border-2 border-slate-500 dino m-4 mx-auto p-4 px-4 rounded-md max-w-lg bg-slate-300">
        //         <header className="flex flex-col gap-2 items-center mb-4">
        //             <h2 className="font-extrabold text-2xl">Archaeopteryx</h2>
        //             <ReactAudioPlayer
        //                 src="dino/archaeopteryx.mp3" controls
        //                 className="block md:w-[300px]"
        //             />
        //         </header>

        //         <Image src="/dino/archaeopteryx.png" width={300} height={350} alt="archaeopteryx" />

        //         <div className="dino-info flex flex-col gap-1 mt-4">
        //             <h3 className="font-bold text-xl text-teal-400">Info:</h3>
        //             <p className="flex gap-1 items-center"><span className="font-bold">Diet:</span> herbivorous
        //                 <TbLeaf className="text-green-400" size={30} /></p>
        //             <p><span className="font-bold">Type of dinosaur:</span> small theropod</p>
        //             <p className="flex gap-2">
        //                 <span className="font-bold">Length:</span> 0.5m
        //             </p>
        //             <p><span className="font-bold">Food:</span> may have eaten small reptiles, mammals or insects</p>
        //             <p><span className="font-bold">When it lived: </span>
        //                 Late Jurassic, 147 million years ago</p>
        //             <p><span className="font-bold">Found in: </span> Germany</p>
        //         </div>
        //     </div>
        // </SwiperSlide>
        // <SwiperSlide>
        //     <div className="border-2 border-green-300 dino m-4 mx-auto p-4 px-4 rounded-md max-w-lg bg-green-200">
        //         <header className="flex gap-4 items-center mb-4">
        //             <h2 className="font-extrabold text-2xl">Mammoth</h2>
        //         </header>

        //         <Image src="/dino/mammoth.png" width={300} height={350} alt="mammoth" />

        //         <div className="dino-info flex flex-col gap-1 mt-4">
        //             <h3 className="font-bold text-xl text-teal-400">Info:</h3>
        //             <p className="flex gap-1 items-center"><span className="font-bold">Diet:</span> herbivorous
        //                 <TbLeaf className="text-green-400" size={30} /></p>
        //             <p><span className="font-bold">Type of dinosaur:</span> genus of northern mammoths</p>
        //             <p className="flex gap-2">
        //                 <span className="font-bold">Length:</span> 4.5 m, <span className="font-bold">Weight:</span> 6 tonnes
        //             </p>
        //             <p><span className="font-bold">Food:</span> may have eaten small reptiles, mammals or insects</p>
        //             <p><span className="font-bold">When it lived: </span>
        //                 Quaternary period</p>
        //             <p><span className="font-bold">Found in: </span> Mammoth steppe of Europe, Canada, North America, Siberia and Asia during the ice age</p>
        //         </div>
        //     </div>
        // </SwiperSlide>