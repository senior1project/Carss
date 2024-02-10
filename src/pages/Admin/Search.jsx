import React from "react";

const Search=({serachItem,setSearchItem,handelSearch})=>{
    return(
    <div>
        <input
        className="search"
        type="text"
        placeholder="Search.."
        onChange={(e)=>{setSearchItem(e.target.value)}}
        value={serachItem}>
        </input>
        <button className="Search-button" onClick={()=>{handelSearch(serachItem)}}>Search</button>
    </div>
    )
}
export default Search;