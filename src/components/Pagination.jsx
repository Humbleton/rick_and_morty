import ReactPaginate from "react-paginate";
const Pagination = ( { setPageNumber, pageNumber, info } ) => {
    // console.log(info?.pages)
    return (
      
        <ReactPaginate 
        activeClassName="relative block rounded bg-neutral-800 px-3 py-1.5 text-md font-medium text-neutral-50 transition-all duration-300 dark:bg-neutral-900"
        className="list-style-none flex justify-center gap-14 my-10 "
        pageLinkClassName=""
        disabledClassName="pointer-events-none"
        nextLabel="Next"
        nextClassName="relative block rounded bg-transparent  text-md text-neutral-600 transition-all duration-300 hover:bg-neutral-850 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
        previousLabel="Previous"
        previousClassName="relative block rounded bg-transparent  text-md text-neutral-500 transition-all duration-300 dark:text-neutral-400"
        onPageChange={(data) => {
            setPageNumber(data.selected + 1)
        }}
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        pageCount={info?.pages}/>
    )
}
export default Pagination;