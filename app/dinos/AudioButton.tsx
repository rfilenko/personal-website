"use client"

import ReactAudioPlayer from 'react-audio-player';
import { AiOutlineAudio } from "react-icons/ai";

const AudioButton = ({ dinoAudio }: { dinoAudio: string }) => {
    const handleAudioClick = (event: React.SyntheticEvent) => {
        const audioPlayer = event.currentTarget.previousElementSibling as HTMLAudioElement

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
            <button className="relative flex p-4 bg-yellow-400 rounded-full shadow-md animate-microphone" onClick={handleAudioClick}><AiOutlineAudio color='white' size={24} /></button>
        </>
    )
}

export default AudioButton