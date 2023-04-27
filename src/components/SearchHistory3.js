import React, { useState } from 'react';
import AsyncSelect from 'react-select/async';

const SearchHistory3 = () => {
  const [searchHistory, setSearchHistory] = useState(["apple"]);
  const handleSearch = (searchTerm) => {
    // Save search term to history list
    setSearchHistory([...searchHistory, searchTerm]);
    // Perform search using search term
    // ...
  };

  const handleDelete = (index) => {
    // Remove item at index from history list
    const newHistory = [...searchHistory];
    newHistory.splice(index, 1);
    setSearchHistory(newHistory);
  };

  const loadOptions = (inputValue, callback) => {
    // Filter search history based on input value
    const filteredHistory = searchHistory.filter(
      (searchTerm) => searchTerm.includes(inputValue)
    );
    // Map search history to options for AsyncSelect
    const options = filteredHistory.map((searchTerm) => ({
      value: searchTerm,
      label: searchTerm,
    }));
    // Call callback with options
    callback(options);
  };

  return (
    <div>
      <AsyncSelect
        cacheOptions
        loadOptions={loadOptions}
        placeholder="Search"
        onChange={(selectedOption) =>
          handleSearch(selectedOption.value)
        }
      />
      <ul>
        {searchHistory.map((searchTerm, index) => (
          <li key={index}>
            {searchTerm}
            <button onClick={() => handleDelete(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SearchHistory3;