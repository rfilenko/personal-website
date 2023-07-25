
import { Dino } from "@/app/lib/interface";

import AudioButton from "./AudioButton";
import SoundButton from "./SoundButton";

const DinoAudio = ({dino}: {dino: Dino}) => {
    const dinoSlug = dino.name.toLowerCase()
    const dinoAudio = `audio-${dino.name.toLowerCase()}`
    return  <>
            {(dinoSlug != 'nothosaurus') && (
                <>
                    <div className="w-full mx-auto flex gap-2 justify-between">
                        {dinoSlug && <SoundButton dinoSlug={dinoSlug} />}
                        {dinoAudio && <AudioButton dinoAudio={dinoAudio} />}
                    </div>
                </>
            )}
        </>
}
export default DinoAudio