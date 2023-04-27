// import React, { useState, useEffect } from "react";
// import AsyncSelect from "react-select/async";

// const options = [
//   { value: "apple", label: "Apple" },
//   { value: "banana", label: "Banana" },
//   { value: "orange", label: "Orange" },
// ];

// const loadOptions = (inputValue, callback) => {
//   setTimeout(() => {
//     const filteredOptions = options.filter((option) =>
//       option.label.toLowerCase().includes(inputValue.toLowerCase())
//     );
//     callback(filteredOptions);
//   }, 1000);
// };

// const handleSelectFocus = () => {
//   const lastFiveSearches = searchHistory.slice(-5);
//   setOptions(lastFiveSearches);
// };

// const SearchHistory = () => {
//   const [value, setValue] = useState(null);
//   const [history, setHistory] = useState([]);

//   useEffect(() => {
//     const searchHistory = localStorage.getItem("searchHistory");
//     if (searchHistory) {
//       setHistory(JSON.parse(searchHistory));
//     }
//   }, []);

//   const handleSearch = () => {
//     if (value) {
//       const newHistory = [
//         value,
//         ...history.filter((item) => item.value !== value.value),
//       ];
//       setHistory(newHistory.slice(0, 10));
//       localStorage.setItem("searchHistory", JSON.stringify(newHistory));
//     }
//   };

//   const handleClearHistory = () => {
//     setHistory([]);
//     localStorage.removeItem("searchHistory");
//   };

//   return (
//     <div>
//       <AsyncSelect
//         cacheOptions
//         defaultOptions
//         value={value}
//         onChange={setValue}
//         loadOptions={loadOptions}
//         onInputChange={() => setValue(null)}
//         onBlur={handleSearch}
//         onFocus={handleSelectFocus}
//       />
//       {history.length > 0 && (
//         <div>
//           <p>Search history:</p>
//           <ul>
//             {history.map((item) => (
//               <li key={item.value}>{item.label}</li>
//             ))}
//           </ul>
//           <button onClick={handleClearHistory}>Clear history</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchHistory;



import React, { useState } from "react";
import AsyncSelect from "react-select/async";

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' }
];

const loadOptions = (inputValue, callback) => {
  setTimeout(() => {
    const filteredOptions = options.filter((option) =>
      option.label.toLowerCase().includes(inputValue.toLowerCase())
    );
    callback(filteredOptions);
  }, 1000);
};

const SearchHistory = () => {
  const [searchHistory, setSearchHistory] = useState([]);
  const [options, setOptions] = useState([]);

  const handleInputChange = (inputValue, { action }) => {
    if (action === "input-change") {
      const newSearchHistory = [inputValue, ...searchHistory.slice(0, 4)];
      setSearchHistory(newSearchHistory);
    }
  };

  const handleSelectFocus = () => {
    const lastFiveSearches = searchHistory.slice(-5);
    setOptions(lastFiveSearches);
  };

  return (
    <AsyncSelect
      cacheOptions
      loadOptions={loadOptions}
      onInputChange={handleInputChange}
      onFocus={handleSelectFocus}
      options={options}
    />
  );
};

export default SearchHistory;
