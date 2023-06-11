const FilterBtn = ({ name, index, items, task, setPageNumber}) => {
    // console.log(setPageNumber)
    return (
        <>
        <style>
            {`
            .form-check-input:checked + label {
                background-color: #0b5ed7;

            }

            input[type=radio] {
                display:none;
            }`}
        </style>
            <div className="form-check flex gap-4 my-5 justify-between">
                <input onClick={() => {
                    setPageNumber(1);
                    task(items);
                }} className="form-check-input" type="radio"  name={name} id={`${name}-${index}`}/>
                <label className="mb-2 text-white-300 border-2 rounded-lg p-4 cursor-pointer hover:bg-blue-700" htmlFor={`${name}-${index}`}>{items}</label>
            </div>
        </>
    )
}
export default FilterBtn;