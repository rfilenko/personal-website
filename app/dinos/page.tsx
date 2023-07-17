import { Dino } from "../lib/interface";
import { getDinoData } from "../lib/sanity";

import SwiperComponent from "./SwiperComponent";

export default async function DinoPage() {
    const dinoData = await getDinoData() as Dino[]

    return <>
        <h2 className="mt-4 font-extrabold text-3xl text-center text-teal-400">Dinosaurs</h2>

        <div className="px-4 md:pt-8">
            <SwiperComponent dinoData={dinoData} />
        </div>
    </>
}
