import React, { useRef, useState, useContext, useEffect } from "react"; // ✅ Added useEffect/useRef
import TaskList from "./TaskList";
import { TaskContext } from "../context/TaskContext"

function SearchBar() {
  const [query, setQuery] = useState("");
  const searchInputRef = useRef(null); 


  useEffect(() => {
    searchInputRef.current.focus();
  }, []);

  function handleSearch(e) {
    setQuery(e.target.value);
  }

  return (
    <div>
      <input
        ref={searchInputRef} 
        type="text"
        placeholder="Search tasks..."
        value={query}
        onChange={handleSearch}
      />
      <TaskList query={query}/>
    </div>
  );
}

export default SearchBar;