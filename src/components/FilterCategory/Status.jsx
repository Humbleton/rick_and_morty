import React, {useState} from "react";
import FilterBtn from "./FilterButtons/FilterBtn";
import { useContext } from "react";
import FilterContext from "../../contexts/FilterContext";

const Status = () => {
    const [showPanel, setShowPanel] = useState(false);
    const {setStatus, setPageNumber} = useContext(FilterContext);

    const togglePanel = () => {
        setShowPanel(prevState => !prevState);
    }
    let status = ['Alive', 'Dead', 'unknown']
    return (
        <div className="Status w-80">
            <h2 id="accordion-color-heading-1">
                <button type="button" 
                className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800" 
                data-accordion-target="#accordion-color-body-1" 
                aria-expanded="true" 
                aria-controls="accordion-color-body-1"
                onClick={togglePanel}>
                    <span>Status</span>
                    <svg data-accordion-icon className="w-6 h-6  shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
            </h2>
            <div id="accordion-color-body-1" className={!showPanel ? "hidden" : "w-80 flex gap-5 justify-around"} aria-labelledby="accordion-color-heading-1">
                {status.map((statusItem, index) => (
                    <FilterBtn key={index} name="status" items={statusItem} index={index} task={setStatus} setPageNumber={setPageNumber}/>
                ))}
            </div>
        </div>
    )
}
export default Status;