import React, { useState } from 'react'
import Data from "./Data.json";

function Searchbar({placeholder}) {
  const [value, setValue] = useState(" ");
  const onChange = (e) => {
    setValue(e.target.value);
  }
  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    console.log(searchTerm)
  }
  return (
    <div className='searchContainer'>
      <div className='searchInner'>
        <input id='inp' type="text" placeholder={placeholder} value={value} onChange={onChange} />
        {/* <button onClick={() => onSearch(value)}>Search</button> */}
      </div>
      <div className='dropDown'>
        {Data.filter(item => {
          const searchTerm = value.toLowerCase();
          const place = item.label.toLocaleLowerCase();
          return searchTerm && place.startsWith(searchTerm) && place !== searchTerm;
        })
        // .slice(0,5) (to be used when dropdown is very long)
        .map((item) => (
          <div onClick={()=>onSearch(item.label)} className='dropDownRow' key={item.label}>{item.label}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Searchbar