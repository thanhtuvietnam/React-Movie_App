import React from 'react';

const SearchBox = (props) => {
    const handleClick =()=>{
        props.getMoviesRequest(props.searchValue)
    }
	return (
		<div className='col col-sm-4'>
			<input
				className='form-control'
				value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
				placeholder='Type to search...'
			/>
            <div className='input-group-append'>
                <button 
                    className='btn btn-primary'
                    onClick={handleClick} 
                >Search</button>

            </div>
		</div>
	);
};

export default SearchBox;