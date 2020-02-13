import React from "react";
import "./Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Search() {
  return (
    <div className="searchArea">
            <div className="input-group">
                <input className="form-control border-secondary py-2" type="search" value="search"/>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button">
                    <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
            </div>
            </div>
       

  
  );
}

export default Search;
