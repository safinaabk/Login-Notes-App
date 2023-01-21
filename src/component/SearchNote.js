import React from "react";
import PropTypes from "prop-types";
import { LocaleConsumer } from "../contexts/LocaleContext";

function SearchNote({ searchTitle, onTitleChange }) {
  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <div className="search-bar">
            <input type="text" placeholder={locale === "id" ? "Cari judul..." : "Search Title"} defaultValue={searchTitle} onChange={(event) => onTitleChange(event.target.value)}></input>
          </div>
        );
      }}
    </LocaleConsumer>
  );
}

SearchNote.propTypes = {
  searchTitle: PropTypes.string.isRequired,
  onTitleChange: PropTypes.func.isRequired,
};

export default SearchNote;
