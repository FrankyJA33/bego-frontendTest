import SearchIcon from "../assets/SearchIcon"

function Search({ searchTerm, onSearch }) {
    return (
        <div className="flex items-center !ml-[40px] border-b-2 border-[#2C2C2C] !my-[30px] w-[349px]">
            <SearchIcon />
            <input className="flex-1 !p-3 outline-0" type="text" value={searchTerm} onChange={(e) => onSearch(e.target.value)} name="orderSearch" />
        </div>
    )
}

export default Search;