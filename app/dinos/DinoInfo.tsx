import { TbMeat, TbLeaf } from "react-icons/tb";
import { Dino } from "@/app/lib/interface";

const DinoInfo = ({dino}: {dino: Dino}) => {
    return  <>
        <div className="dino-info flex flex-col gap-1 mt-4">
            <h3 className={`font-bold text-xl text-${dino.color}-300`}>Info:</h3>
            
            <p className="flex gap-1 items-center"><span className="font-bold">Diet:</span> {dino.diet}
                {(dino.color == 'green') ? <TbLeaf style={{ color: dino.color }} size={30} /> : (dino.color == 'red') ? <TbMeat style={{ color: dino.color }} size={30} /> : (dino.color == 'blue' || dino.color == 'gray') ? <TbLeaf style={{ color: dino.color }} size={30} /> : ""}
            </p>
            <p><span className="font-bold">Type of dinosaur:</span> {dino.type}</p>
            <p className="flex gap-0.5 flex-wrap"> 
                <span className="font-bold">Dimensions:</span>
                {dino.dimensions}
            </p>
            <p><span className="font-bold">Food:</span>  {dino.food}</p>

            {dino.lived && <p><span className="font-bold">When it lived: </span> {dino.lived}</p>}
            {dino.found && <p> <span className="font-bold">Found in: </span> {dino.found}</p>}
        </div>
    </>
}
export default DinoInfo