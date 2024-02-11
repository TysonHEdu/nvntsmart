"use client";
import React, { useState } from 'react';

const altSpreadSheet = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        if (searchTerm.toLowerCase() === 'beef') {
            const tableData = [
                ['Item', 'Date', 'Supplier', 'Price'],
                ['Beef', '2022-10-01', 'Supplier A', '$10'],
                ['Beef', '2022-10-02', 'Supplier B', '$12'],
                ['Beef', '2022-10-03', 'Supplier C', '$11'],
            ];

            // Convert tableData to a string representation
            const tableString = tableData.map(row => row.join('\t')).join('\n');

            // Display the table as an alert
            alert(tableString);
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ color: 'black' }} // Set the text color to black
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}


export default altSpreadSheet;
