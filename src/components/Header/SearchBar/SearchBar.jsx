import React from 'react';
import {WrapperSearch} from "./styleSearchBar/SearchStyle";









 const SearchBar = ({ term, users, update }) => {

    const dataSearch = e => {
        const value = e.target.value.toLowerCase();

        const filter = users.filter(user => {
            return user.name.toLowerCase().includes(value);

        });

        update({
            data: filter,
            active: 0,
            term: value
        });

    };

    return (
        <WrapperSearch >
            <input
                value={term}
                type="text"
                className="form-control"
                placeholder="Search people by name..."
                onChange={dataSearch}
            />
        </WrapperSearch>
    );
};
export default SearchBar