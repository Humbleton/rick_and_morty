import { useEffect, useState } from "react"
// import CharacterDetails from "./CharacterDetails";
// import CurrentCharacterContext from "../contexts/CurrentCharacterContext";
import Pagination from "./Pagination";
import Filter from "./Filter";
import { useSearchParams,NavLink, Outlet } from "react-router-dom"
import FilterContext from "../contexts/FilterContext";
export default function Characters() {
    const [displayCharacters, setDisplayCharacters] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [status, setStatus] = useState('');
    const [gender, setGender] = useState('');
    const [species, setSpecies] = useState('');
    // console.log(status)
    const { results, info } = displayCharacters;
    // console.log(displayCharacters)
    const [searchCharacter, setSearchCharacter] = useSearchParams();
    
    let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=&status=${status}&gender=${gender}&species=${species}`
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



    const filterCharacter = (evt) => {
        setPageNumber(1);
        let filter = evt.target.value;
        if(filter) {
            setSearchCharacter({name: filter});
        } else {
            setSearchCharacter({name: ''});
        }
    }

    const charactersList = results ? results.filter((character) => {
        let keyword = searchCharacter.get('name');
        let name = character.name.toLowerCase();
        
        if(!keyword) {
            return true;
        }
        return name.includes(keyword.toLowerCase());

    }).map(character => (
        <NavLink to={`/${character.id}`} key={character.id} >
            <img src={character.image} alt={character.name} />
            <h3>{character.name}</h3>
            <h4>{character.species}</h4>
            <h4>{character.status} 
                <span className={character.status.toLowerCase() === 'alive' ? "aliveIcon" 
                    : character.status.toLowerCase() === "dead" ? "deadIcon" 
                    : "unknownIcon"}>
                </span> 
            </h4>
            </NavLink>
    )
    
    ): null

    // let params = useParams();
    // const { id } = params;
    // console.log(params)
    // const currentCharacter = results ? results.find(character => {
    //     // console.log(character.id)
    //     return character.id === id;
    // }): null;

    return (
        <div className="Characters">
            <input type="text" 
                onChange={filterCharacter}
                value={searchCharacter.get('name') === null ? "" : searchCharacter.get("name")}
                placeholder="Search for a character"
                />

                <FilterContext.Provider value={{setStatus, setPageNumber, setGender,setSpecies}}>
                <div className="split">
                    <Filter />
                    <nav>
                        {charactersList}
                    </nav>
                    
                </div>
                </FilterContext.Provider>
            <Outlet/>
            

        < Pagination setPageNumber={setPageNumber} info={info} pageNumber={pageNumber}/>
        {/* {currentCharacter ? <Character currentCharacter={currentCharacter}/> : null} */}

        </div>
    )
}