import React from "react";
import "./HelperBanner.css";

function HelperBanner ({user, setAddCampPageIsShown, setSearchPageIsShown,
    campData, setFilteredCamps, setCurrSearch, currSearch}){

    function handleAddCamp(event) {
        setAddCampPageIsShown(true);
        setSearchPageIsShown(false);
        window.scrollTo(0, 0);
    }

    function filterCamps (event) {
        setCurrSearch(event.target.value);
        const value = event.target.value.toLowerCase();
        const filteredCamps = campData.filter(
            camp => (`${camp.name}`.toLowerCase().includes(value))
        );
        setFilteredCamps(filteredCamps);

        if(value.length === 0){
            setFilteredCamps(campData);
        }
    }

    return(
        <div className="helper-banner-container">
            <div className="helper-banner-inner">
                <h1>Welcome to YelpCamp!</h1>
                <p className="info">View our hand-picked campgrounds from all over the world, or add your own.</p>
                <form className="search-bar">
                    <i class="icon fa fa-search"></i>
                    <input type="search" onChange={filterCamps} value={currSearch} placeholder="Search for camps"></input>
                </form>
                {user != null && (<p className="add-campground" onClick={handleAddCamp}>Or add your own campground</p>)}
            </div>
        </div>
    )
}

export default HelperBanner;