import { useState } from "react";
import { useContext } from "react";
import FilterContext from "../../contexts/FilterContext";
import FilterBtn from "./FilterButtons/FilterBtn";
const Gender = () => {
    const [showPanel, setShowPanel] = useState(false);
    const { setGender, setPageNumber } = useContext(FilterContext);
    // console.log(setPageNumber)
    // console.log(showPanel)
    const togglePanel = () => {
        setShowPanel(prevState => !prevState);
    }
    let genders = ['female', 'male', 'genderless', 'unknown'];
    return (
        <div className="Gender w-80">
            <h2 id="accordion-color-heading-3">
                <button type="button" 
                className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800" 
                data-accordion-target="#accordion-color-body-3" 
                aria-expanded="false" 
                aria-controls="accordion-color-body-3"
                onClick={togglePanel}>
                    <span>Gender</span>
                    <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
            </h2>
            <div id="accordion-color-body-3" className={!showPanel ? "hidden" : "w-80 flex flex-wrap gap-5"} aria-labelledby="accordion-color-heading-3">
                {genders.map((gender, index) =>(
                    <FilterBtn key={index} name="gender" index={index} items={gender} task={setGender} setPageNumber={setPageNumber}/>

                ))}
            </div>
        </div>
    )
}
export default Gender;