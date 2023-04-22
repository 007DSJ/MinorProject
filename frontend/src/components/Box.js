import { useState } from 'react';
import citiesData from './indian-cities.json';

function Box(props) {
    const [searchResults, setSearchResults] = useState([]);
    const state_selected = props.states;

    const handleInputChange = (event) => {
        const value = event.target.value;
        props.setSearchTerm(value);

        if (value.trim() === "") {
            setSearchResults([]);
            return;
        }

        const results = [];
        if (!state_selected || state_selected === 'null') {
            Object.keys(citiesData).forEach((state) => {
                citiesData[state].forEach((city) => {
                    if (
                        city.toLowerCase().includes(value.toLowerCase()) &&
                        results.length < 5
                    ) {
                        results.push({
                            state: state,
                            city: city,
                        });
                    }
                });
            });
        } else {
            citiesData[state_selected].forEach((city) => {
                if (
                    city.toLowerCase().includes(value.toLowerCase()) &&
                    results.length < 5
                ) {
                    results.push({
                        state: state_selected,
                        city: city,
                    });
                }
            });
        }
        setSearchResults(results);
    };

    const handleResultClick = (city) => {
        props.setSearchTerm(city);
        setSearchResults([]);
    };

    return (
        <div className="search-bar-container">
            <input
                type="text"
                placeholder={props.placeholder}
                value={props.searchTerm}
                onChange={handleInputChange}
            />
            {searchResults.length > 0 && (
                <ul className="search-results">
                    {searchResults.map((result) => (
                        <li
                            key={`${result.state}-${result.city}`}
                            onClick={() => handleResultClick(result.city)}
                        >
                            {result.city}, {result.state}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Box;