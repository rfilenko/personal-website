"use client"

import ReactAudioPlayer from 'react-audio-player';
import { BiPlayCircle } from "react-icons/bi";

const AudioButton = ({ dinoSlug }: { dinoSlug: string }) => {
    const handleAudioClick = (event: React.SyntheticEvent) => {
        const audioPlayer = event.currentTarget.previousElementSibling as HTMLAudioElement

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
            <button className="relative flex p-4 bg-teal-500 rounded-full shadow-md animate-play" onClick={handleAudioClick}><BiPlayCircle color='white' size={24} /></button>
        </>
    )
}

export default AudioButton