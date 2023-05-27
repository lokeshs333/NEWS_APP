import React, { useState } from 'react';

const App = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageLimit, setPageLimit] = useState(38);

    const handleNavigation = (nextPage) => {
        if (nextPage > 0 && nextPage <= pageLimit) {
            setCurrentPage(nextPage);
        } else {
            alert(`Cannot navigate beyond page limit of ${pageLimit}`);
        }
    };

    return (
        <div>
            <p>Current Page: {currentPage}</p>
            <button onClick={() => handleNavigation(currentPage - 1)}>Previous</button>
            <button onClick={() => handleNavigation(currentPage + 1)}>Next</button>
        </div>
    );
};

export default App;