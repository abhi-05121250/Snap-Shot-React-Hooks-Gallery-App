import React, { useState } from "react";

const Form = ({ handleSubmit, history }) => {
    const [searchEntry, setSearchEntry] = useState("");
    const updateSearchInput = e => {
        setSearchEntry(e.target.value);
    };
    return (
        <form
            className="search-form"
            onSubmit={e => handleSubmit(e, history, searchEntry)}
        >
            <input
                type="text"
                name="search"
                placeholder="Search..."
                onChange={updateSearchInput}
                value={searchEntry}
            />
            <button
                type="submit"
                className={`search-button ${searchEntry.trim() ? "active" : null}`}
                disabled={!searchEntry.trim()}
            >
                &#128269; {/* Unicode character for a magnifying glass */}
            </button>
        </form>
    );
};

export default Form;
