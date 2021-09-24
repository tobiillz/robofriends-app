import React from 'react'

const SearchBox = ({searchfield, searchChange})=> {
    return (
        <div ClassName="pa2" >
            <input 
            className ="pa3 ba b--green bg-lightest-blue"
            type="Search" 
            placeholder ="Search Robot"
            onChange ={searchChange}
            />
        </div>
    )
}

export default SearchBox
