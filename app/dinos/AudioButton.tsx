"use client"

import ReactAudioPlayer from 'react-audio-player';
import { AiOutlineAudio } from "react-icons/ai";

const AudioButton = ({ dinoAudio }: { dinoAudio: string }) => {
    const handleAudioClick = (event: React.SyntheticEvent) => {
        const audioPlayer = event.currentTarget.parentNode?.previousSibling as HTMLAudioElement

        if (audioPlayer && audioPlayer.localName == 'audio') {
            audioPlayer.play()
        }
    }
    return (
        <>
            <ReactAudioPlayer
                src={`dino/${dinoAudio}.mp3`} volume={1}
                className="block md:w-[300px]"
            />
            <div className="relative overflow-hidden w-[3.2rem] h-[3.2rem] flex justify-center items-center p-4 shadow-md animate-microphone rounded-full ">
                <button className="absolute flex justify-center items-center  bg-yellow-400 top-0 left-0 w-full h-full outline-0" onClick={handleAudioClick}><AiOutlineAudio color='white' size={24} className=''/></button>
            </div>
        </>
    )
}

export default AudioButton