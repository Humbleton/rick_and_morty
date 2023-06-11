import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
export default function CharacterDetails() {
    const [displayCharacters, setDisplayCharacters] = useState([]);

    // console.log(displayCharacters)

    const {name, image, gender, location, origin, species, type, status } = displayCharacters;

    const { id } = useParams();
    // console.log(id?id: null)
    let api = `https://rickandmortyapi.com/api/character/${id}`;
    useEffect(() => {
        const getCharacters = async () => {
            try {
                const characters = await fetch(api);

                const data = await characters.json();
        
                // console.log(data);
                setDisplayCharacters(data);
            }
            catch(error) {
                console.log(error)
            }
           
        }
        getCharacters();

    }, [api] )
    return (
        <div className="detailContainer">
            <div className="flex  gap-14 flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:min-w-fit md:max-w-4xl md:flex-row">
                <img
                    className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-fit md:rounded-none md:rounded-l-lg"
                    src={image}
                    alt={name} />
                <div className="flex flex-col justify-start p-6">
                    <h5
                        className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                        {name}
                    </h5>
                    <p className="text-md text-neutral-500 dark:text-neutral-300">
                        {`Gender: ${gender}`}
                    </p>
                    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                        {`Location: ${location?.name}`}
                    </p>
            
                    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                        {`Origin: ${origin?.name}`}
                    </p>
                    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                        {`Type: ${type === "" ? "Unknown" : type}`}
                    </p>
                    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                        {`Species: ${species}`}
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-300">
                        {`Status: ${status}`}
                        <span className={status?.toLowerCase() === "unknown" ? "unknownIcon" : status?.toLowerCase() === "dead" ? "deadIcon" : "aliveIcon"}></span>
                    </p>
            
                </div>
            </div>
        </div>
    )
}