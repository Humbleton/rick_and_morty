import Gender from "./FilterCategory/Gender";
import Species from "./FilterCategory/Species";
import Status from "./FilterCategory/Status";
import { useContext } from "react";
import FilterContext from "../contexts/FilterContext";
const Filter = () => {
    const {setStatus, setPageNumber, setGender,setSpecies} = useContext(FilterContext);


    const clearFilters = () => {
        setStatus('');
        setGender('');
        setPageNumber('');
        setSpecies('');
        window.location.reload(false);

    }
    return (
        <div id="accordion-color" data-accordion="collapse" data-active-classes="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white" className="ml-4">
            <div className="text-center font-bold text-xl mb-4">Filters</div>
            <div onClick={clearFilters} className="text-center text-underline underline underline-offset-8 mb-4 text-blue-400 cursor-pointer">Clear Filters</div>
            <Status />
            <Species />
            <Gender  />

        </div>
    )
}
export default Filter;