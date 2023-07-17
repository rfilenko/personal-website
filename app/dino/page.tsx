"use client"

import { TbMeat, TbLeaf } from "react-icons/tb";
import Image from "next/image";
import ReactAudioPlayer from 'react-audio-player';

// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import './styles.css';
import { Scrollbar, Pagination } from 'swiper/modules';

export default function Dino() {
    return <>
        <div className="px-4 md:pt-10">
            <Swiper
                scrollbar={{ hide: true, draggable: true }}
                modules={[Scrollbar, Pagination]}
                spaceBetween={25}
                pagination={{ clickable: true }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="border-2 border-red-400 dino m-4 mx-auto p-4 px-4 rounded-md max-w-lg bg-red-200">
                        <header className="flex gap-4 items-center mb-4">
                            <h2 className="font-extrabold text-2xl">Velociraptor</h2>
                            <div className="">
                                <ReactAudioPlayer
                                    src="dino/velociraptor.mp3" controls
                                    className="block w-[160px] md:w-[300px]"
                                />
                            </div>
                        </header>

                        <Image src="/dino/velociraptor.png" width={300} height={350} alt="velociraptor" />

                        <div className="dino-info flex flex-col gap-1 mt-4">
                            <h3 className="font-bold text-xl text-teal-400">Info:</h3>
                            <p className="flex gap-1 items-center"><span className="font-bold">Diet:</span> carnivorous
                                <TbMeat className="text-red-400" size={30} /></p>
                            <p><span className="font-bold">Type of dinosaur:</span> small theropod</p>
                            <p className="flex gap-2">
                                <span className="font-bold">Length:</span> 1.8m, <span className="font-bold">Weight:</span> 7kg
                            </p>
                            <p><span className="font-bold">Food:</span> other animals</p>
                            <p><span className="font-bold">When it lived: </span>
                                Late Cretaceous, 74-70 million years ago</p>
                            <p><span className="font-bold">Found in: </span> Mongolia</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="border-2 border-green-300 dino m-4 mx-auto p-4 px-4 rounded-md max-w-lg bg-green-200">
                        <header className="flex gap-4 items-center mb-4">
                            <h2 className="font-extrabold text-2xl">Triceratops</h2>
                            <div className="w-6 shrink-1">
                                <ReactAudioPlayer
                                    src="dino/triceratops.mp3" controls
                                    className="block w-[160px] md:w-[300px]"
                                />
                            </div>
                        </header>

                        <Image src="/dino/triceratops.png" width={300} height={350} alt="triceratops" />

                        <div className="dino-info flex flex-col gap-1 mt-4">
                            <h3 className="font-bold text-xl text-teal-400">Info:</h3>
                            <p className="flex gap-1 items-center"><span className="font-bold">Diet:</span> herbivorous
                                <TbLeaf className="text-green-400" size={30} /></p>
                            <p><span className="font-bold">Type of dinosaur:</span> ceratopsian</p>
                            <p className="flex gap-2">
                                <span className="font-bold">Length:</span> 9.0m, <span className="font-bold">Weight:</span> 5500kg
                            </p>
                            <p><span className="font-bold">Food:</span> tough palm fronds</p>
                            <p><span className="font-bold">When it lived: </span>
                                Late Cretaceous, 68-66 million years ago</p>
                            <p><span className="font-bold">Found in: </span> USA</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="border-2 border-blue-400 dino m-4 mx-auto p-4 px-4 rounded-md max-w-lg bg-blue-300">
                        <header className="flex gap-4 items-center mb-4">
                            <h2 className="font-extrabold text-2xl">Nothosaurus</h2>
                            <div className="w-6 shrink-1">
                                <ReactAudioPlayer
                                    src="dino/Nothosaurus.mp3" controls
                                    className="block w-[160px] md:w-[300px]"
                                />
                            </div>
                        </header>

                        <Image src="/dino/nothosaurus.png" width={300} height={350} alt="Nothosaurus" />

                        <div className="dino-info flex flex-col gap-1 mt-4">
                            <h3 className="font-bold text-xl text-blue-500">Info:</h3>
                            <p className="flex gap-1 items-center"><span className="font-bold">Diet:</span> herbivorous
                                <TbLeaf className="text-green-400" size={30} /></p>
                            <p><span className="font-bold">Type of dinosaur:</span> “false lizard”</p>
                            <p className="flex gap-2">
                                <span className="font-bold">Length:</span> 3-7 m, <span className="font-bold">Weight:</span> 150kg
                            </p>
                            <p><span className="font-bold">Food:</span> squid, fish and even terrestrial animals</p>
                            <p><span className="font-bold">When it lived: </span>
                                Quaternary period</p>
                            <p><span className="font-bold">Found in: </span> water inhabitant roaming through North Africa, China, Israel, and Russia coastal waters more than 240 million years ago</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="border-2 border-red-400 dino m-4 mx-auto p-4 px-4 rounded-md max-w-lg bg-red-200">
                        <header className="flex gap-4 items-center mb-4">
                            <h2 className="font-extrabold text-2xl">T-Rex</h2>
                            <div className="">
                                <ReactAudioPlayer
                                    src="dino/trex.mp3" controls
                                    className="block w-[160px] md:w-[300px]"
                                />
                            </div>
                        </header>

                        <Image src="/dino/tyrannosaurus.png" width={300} height={350} alt="t-rex" />

                        <div className="dino-info flex flex-col gap-1 mt-2">
                            <h3 className="font-bold text-xl text-red-600">Info:</h3>
                            <p className="flex gap-1 items-center"><span className="font-bold">Diet:</span> carnivorous
                                <TbMeat className="text-red-400" size={30} /></p>
                            <p><span className="font-bold">Type of dinosaur:</span> large theropod</p>
                            <p className="flex gap-2">
                                <span className="font-bold">Length:</span> 12.0m, <span className="font-bold">Weight:</span> 7000kg
                            </p>
                            <p><span className="font-bold">Food:</span> other animals</p>
                            <p><span className="font-bold">When it lived: </span>
                                Late Cretaceous, 68-66 million years ago</p>
                            <p><span className="font-bold">Found in: </span> Canada, USA</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="border-2 border-slate-500 dino m-4 mx-auto p-4 px-4 rounded-md max-w-lg bg-slate-300">
                        <header className="flex gap-4 items-center mb-4">
                            <h2 className="font-extrabold text-2xl">Archaeopteryx</h2>
                            <div className="w-6 shrink-1">
                                <ReactAudioPlayer
                                    src="dino/archaeopteryx.mp3" controls
                                    className="block w-[160px] md:w-[300px]"
                                />
                            </div>
                        </header>

                        <Image src="/dino/archaeopteryx.png" width={300} height={350} alt="archaeopteryx" />

                        <div className="dino-info flex flex-col gap-1 mt-4">
                            <h3 className="font-bold text-xl text-teal-400">Info:</h3>
                            <p className="flex gap-1 items-center"><span className="font-bold">Diet:</span> herbivorous
                                <TbLeaf className="text-green-400" size={30} /></p>
                            <p><span className="font-bold">Type of dinosaur:</span> small theropod</p>
                            <p className="flex gap-2">
                                <span className="font-bold">Length:</span> 0.5m
                            </p>
                            <p><span className="font-bold">Food:</span> may have eaten small reptiles, mammals or insects</p>
                            <p><span className="font-bold">When it lived: </span>
                                Late Jurassic, 147 million years ago</p>
                            <p><span className="font-bold">Found in: </span> Germany</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="border-2 border-green-300 dino m-4 mx-auto p-4 px-4 rounded-md max-w-lg bg-green-200">
                        <header className="flex gap-4 items-center mb-4">
                            <h2 className="font-extrabold text-2xl">Mammoth</h2>
                            <div className="w-6 shrink-1">
                                <ReactAudioPlayer
                                    src="dino/mammoth.mp3" controls
                                    className="block w-[160px] md:w-[300px]"
                                />
                            </div>
                        </header>

                        <Image src="/dino/mammoth.png" width={300} height={350} alt="mammoth" />

                        <div className="dino-info flex flex-col gap-1 mt-4">
                            <h3 className="font-bold text-xl text-teal-400">Info:</h3>
                            <p className="flex gap-1 items-center"><span className="font-bold">Diet:</span> herbivorous
                                <TbLeaf className="text-green-400" size={30} /></p>
                            <p><span className="font-bold">Type of dinosaur:</span> genus of northern mammoths</p>
                            <p className="flex gap-2">
                                <span className="font-bold">Length:</span> 4.5 m, <span className="font-bold">Weight:</span> 6 tonnes
                            </p>
                            <p><span className="font-bold">Food:</span> may have eaten small reptiles, mammals or insects</p>
                            <p><span className="font-bold">When it lived: </span>
                                Quaternary period</p>
                            <p><span className="font-bold">Found in: </span> Mammoth steppe of Europe, Canada, North America, Siberia and Asia during the ice age</p>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    </>
}
