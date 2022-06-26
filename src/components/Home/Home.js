import React, { useEffect, useState } from 'react';
// import useVolunteers from '../../hooks/useVolunteers';
import Volunteer from '../Volunteer/Volunteer';
import './Home.css';

const Home = () => {
    // const [volunteers, setVolunteers] = useVolunteers();
    const [searchText, setSearchText] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => {
            const match = data.filter(d => d.title.toLowerCase().includes(searchText))
            setSearchResult(match)
        })
    }, [searchText])

    const handleSearchChange = event => {
        const result = event.target.value;
        setSearchText(result);
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

export default Home;