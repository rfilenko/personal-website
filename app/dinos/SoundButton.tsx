"use client"

import ReactAudioPlayer from 'react-audio-player';
import { BiPlayCircle } from "react-icons/bi";

const SoundButton = ({ dinoSlug }: { dinoSlug: string }) => {
    const handleAudioClick = (event: React.SyntheticEvent) => {
        const audioPlayer = event.currentTarget.parentNode?.previousSibling as HTMLAudioElement

        if (audioPlayer && audioPlayer.localName == 'audio') {
            audioPlayer.play()
            setTimeout(() => {
                audioPlayer.pause()
                audioPlayer.currentTime = 0
            }, 5000)
        }

    }
    return (
        <>
            <ReactAudioPlayer
                src={`dino/${dinoSlug}.mp3`} volume={0.5}
                className="block md:w-[300px]"
            />
            <div className="relative overflow-hidden w-[3.2rem] h-[3.2rem] flex justify-center items-center p-4 shadow-md animate-play rounded-full ">
                <button className="relative flex p-4 bg-teal-500 rounded-full" onClick={handleAudioClick}><BiPlayCircle color='white' size={24} /></button>
            </div>
            
        </>
    )
}

export default SoundButton