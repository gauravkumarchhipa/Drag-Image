import React, { useState } from 'react';
import AsyncSelect from 'react-select/async';
import './SearchBar.css';

const loadOptions = (inputValue, callback) => {
    setTimeout(() => {
      const filteredOptions = options.filter((option) =>
        option.label.toLowerCase().includes(inputValue.toLowerCase())
      );
      callback(filteredOptions);
    }, 1000);
  };

  const options = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'orange', label: 'Orange' }
  ];
const SearchHistory2 = () => {
  const [searchHistory, setSearchHistory] = useState([]);
  const [options, setOptions] = useState([]);

  const handleInputChange = (inputValue, { action }) => {
    if (action === 'input-change') {
      const newSearchHistory = [inputValue, ...searchHistory.slice(0, 4)];
      setSearchHistory(newSearchHistory);
    }
  };

  const handleSelectFocus = () => {
    const lastFiveSearches = searchHistory.slice(-5);
    setOptions(lastFiveSearches);
  };

  return (
    <div className="search-bar-container">
      <AsyncSelect
        className="search-bar"
        cacheOptions
        loadOptions={loadOptions}
        onInputChange={handleInputChange}
        onFocus={handleSelectFocus}
        options={options}
      />
    </div>
  );
};

export default SearchHistory2;
