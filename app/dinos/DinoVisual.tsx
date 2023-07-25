
import Image from "next/image";
import { Dino } from "@/app/lib/interface";
import Pattern from "./Pattern";

const DinoVisual = ({dino}: {dino: Dino}) => {
    const dinoSlug = dino.name.toLowerCase()
    const dinoImgUrl = `/dino/${dinoSlug}.png`
    const imgVisualStyles = `overflow-hidden w-[200px] h-[200px] absolute -z-0 rounded-full border-4 border-gray-300 bg-${dino.color}-500`
    
    return  <>
            <div className="relative flex justify-center">
                <span className={imgVisualStyles} style={{ backgroundColor: `${dino.color}` }}>
                    <Pattern color={dino.color} />
                </span>
                <Image src={dinoImgUrl} className="z-10 w-full h-auto" priority width={300} height={400} alt={dino.name} />
            </div>
        </>
}
export default DinoVisual