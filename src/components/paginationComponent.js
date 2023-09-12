import React, { useState } from 'react';

const PaginationComponent = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const pages = [
        "Page 1",
        "Page 2",
        "Page 3",
    ];

    const totalPages = pages.length;

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    return (
        <div>
            <h1>Pagination Example</h1>
            <p>{pages[currentPage - 1]}</p>
            <div>
                <button onClick={handlePrevPage} disabled={currentPage === 1}>
                    Previous
                </button>
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default PaginationComponent;