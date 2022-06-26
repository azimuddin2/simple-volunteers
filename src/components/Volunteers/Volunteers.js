import React, { useState } from 'react';
import useVolunteers from '../../hooks/useVolunteers';
import Volunteer from '../Volunteer/Volunteer';
import './Volunteers.css';

const Volunteers = () => {
    const [volunteers, setVolunteers] = useVolunteers();
    const [searchResult, setSearchResult] = useState([]);

    const handleSearchChange = event => {
        const searchText = event.target.value;
        const match = volunteers.filter(volunteer => volunteer.title.toLowerCase().includes(searchText));
        setSearchResult(match)
    }

    return (
        <div>
            <input onChange={handleSearchChange}
                className='search' type="text" placeholder='Search' />
            <p>Search result found {searchResult.length}</p>
            <div className='volunteers-container'>
                {
                    searchResult.map(volunteer => <Volunteer
                        key={volunteer._id}
                        volunteer={volunteer}
                    ></Volunteer>)
                }
            </div>
        </div>
    );
};

export default Volunteers;