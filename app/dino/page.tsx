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
    const playClickHandler = (e) => {
        // console.log(e)
    }
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
                    <div className="border-2 border-gray-300 dino m-4 mx-auto p-4 px-4 rounded-md max-w-lg bg-slate-50">
                        <header className="flex gap-4 items-center mb-4">
                            <h2 className="font-extrabold text-2xl">Velociraptor</h2>
                            <div className="">
                                <ReactAudioPlayer
                                    src="dino/velociraptor/velociraptor.mp3" controls
                                    onPlay={playClickHandler}
                                    className="block w-[160px] md:w-[300px]"
                                />
                            </div>
                        </header>

                        <Image src="/dino/velociraptor/velociraptor.png" width={300} height={350} alt="velociraptor" />

                        <div className="dino-info flex flex-col gap-1 mt-4">
                            <h3 className="font-bold text-xl text-teal-400">Info:</h3>
                            <p className="flex gap-1 items-center"><span className="font-bold">Diet:</span> carnivorous
                                <TbMeat className="text-red-400" size={30} /></p>
                            <p><span className="font-bold">Type of dinosaur:</span> small theropod</p>
                            <span className="font-bold">Length:</span> 1.8m, <span className="font-bold">Weight:</span> 7kg
                            <p><span className="font-bold">Food:</span> other animals</p>
                            <p><span className="font-bold">When it lived: </span>
                                Late Cretaceous, 74-70 million years ago</p>
                            <p><span className="font-bold">Found in: </span> Mongolia</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="border-2 border-gray-300 dino m-4 mx-auto p-4 px-4 rounded-md max-w-lg bg-slate-50">
                        <header className="flex gap-4 items-center mb-4">
                            <h2 className="font-extrabold text-2xl">Triceratops</h2>
                            <div className="w-6 shrink-1">
                                <ReactAudioPlayer
                                    src="dino/triceratops/triceratops.mp3" controls
                                    onPlay={playClickHandler} className="block w-[160px]"
                                />
                            </div>
                        </header>

                        <Image src="/dino/triceratops/triceratops.png" width={300} height={350} alt="triceratops" />

                        <div className="dino-info flex flex-col gap-1 mt-4">
                            <h3 className="font-bold text-xl text-teal-400">Info:</h3>
                            <p className="flex gap-1 items-center"><span className="font-bold">Diet:</span> herbivorous
                                <TbLeaf className="text-green-400" size={30} /></p>
                            <p><span className="font-bold">Type of dinosaur:</span> ceratopsian</p>
                            <span className="font-bold">Length:</span> 9.0m, <span className="font-bold">Weight:</span> 5500kg
                            <p><span className="font-bold">Food:</span> tough palm fronds</p>
                            <p><span className="font-bold">When it lived: </span>
                                Late Cretaceous, 68-66 million years ago</p>
                            <p><span className="font-bold">Found in: </span> USA</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="border-2 border-gray-300 dino m-4 mx-auto p-4 px-4 rounded-md max-w-lg bg-slate-50">
                        <header className="flex gap-4 items-center mb-4">
                            <h2 className="font-extrabold text-2xl">Velociraptor</h2>
                            <div className="">
                                <ReactAudioPlayer
                                    src="dino/velociraptor/velociraptor.mp3" controls
                                    onPlay={playClickHandler}
                                    className="block w-[160px]"
                                />
                            </div>
                        </header>

                        <Image src="/dino/velociraptor/velociraptor.png" width={300} height={350} alt="velociraptor" />

                        <div className="dino-info flex flex-col gap-1 mt-4">
                            <h3 className="font-bold text-xl text-teal-400">Info:</h3>
                            <p className="flex gap-1 items-center"><span className="font-bold">Diet:</span> carnivorous
                                <TbMeat className="text-red-400" size={30} /></p>
                            <p><span className="font-bold">Type of dinosaur:</span> small theropod</p>
                            <span className="font-bold">Length:</span> 1.8m, <span className="font-bold">Weight:</span> 7kg
                            <p><span className="font-bold">Food:</span> other animals</p>
                            <p><span className="font-bold">When it lived: </span>
                                Late Cretaceous, 74-70 million years ago</p>
                            <p><span className="font-bold">Found in: </span> Mongolia</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="border-2 border-gray-300 dino m-4 mx-auto p-4 px-4 rounded-md max-w-lg bg-slate-50">
                        <header className="flex gap-4 items-center mb-4">
                            <h2 className="font-extrabold text-2xl">Triceratops</h2>
                            <div className="w-6 shrink-1">
                                <ReactAudioPlayer
                                    src="dino/triceratops/triceratops.mp3" controls
                                    onPlay={playClickHandler} className="block w-[160px]"
                                />
                            </div>
                        </header>

                        <Image src="/dino/triceratops/triceratops.png" width={300} height={350} alt="triceratops" />

                        <div className="dino-info flex flex-col gap-1 mt-4">
                            <h3 className="font-bold text-xl text-teal-400">Info:</h3>
                            <p className="flex gap-1 items-center"><span className="font-bold">Diet:</span> herbivorous
                                <TbLeaf className="text-green-400" size={30} /></p>
                            <p><span className="font-bold">Type of dinosaur:</span> ceratopsian</p>
                            <span className="font-bold">Length:</span> 9.0m, <span className="font-bold">Weight:</span> 5500kg
                            <p><span className="font-bold">Food:</span> tough palm fronds</p>
                            <p><span className="font-bold">When it lived: </span>
                                Late Cretaceous, 68-66 million years ago</p>
                            <p><span className="font-bold">Found in: </span> USA</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </>
}
