import { Dino } from "@/app/lib/interface";
import { getDinoData } from "@/app/lib/sanity";

import SwiperComponent from "./SwiperComponent";

export default async function DinoPage() {
    const dinoData = await getDinoData() as Dino[]

    function shuffleArray(array: Dino[]) {
        const arr = array.sort(() => .5 - Math.random())
        return arr
    }
    // const shuffledDinoData = shuffleArray(dinoData)
    const shuffledDinoData = dinoData

    return <>
        <h2 className="mt-4 font-extrabold text-3xl text-center text-teal-400">DinoPark:
            <span className="text-gray-500">{dinoData.length}</span>
        </h2>

        <div className="px-4 md:pt-8">
            <SwiperComponent dinoData={shuffledDinoData} />
        </div>
    </>
}