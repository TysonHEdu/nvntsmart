"use client";
import React from 'react';

const Homescreen = () => {
    const handleInventoryClick = () => {
        window.location.href = '/inventory';
    };
    const handleProfitClick = () => {
        window.location.href = '/profitforecaster';
    }
    const handleRecipeBuilderClick = () => {
        window.location.href = '/recipebuilder';
    }
    const handleAltSpreadsheetClick = () => {
        window.location.href = '/altspreadsheet';
    }

    return (
        <div className="homescreen" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div>
                <h1>Welcome to NVNT SMART</h1>
                {/* Add more components or content here */}
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <button style={{ width: '150px', height: '50px', borderRadius: '10px', marginRight: '10px' }} onClick={handleInventoryClick}>Inventory</button>
                    <button style={{ width: '150px', height: '50px', borderRadius: '10px', marginLeft: '10px' }} onClick={handleProfitClick}>Profit Forecaster</button>
                    <button style={{ width: '150px', height: '50px', borderRadius: '10px', marginLeft: '10px' }}onClick={handleRecipeBuilderClick}>Recipe Builder</button>
                    <button style={{ width: '150px', height: '50px', borderRadius: '10px', marginLeft: '10px' }}onClick={handleAltSpreadsheetClick}>Alt Spreadsheet</button>
                </div>
            </div>
        </div>
    );
};

export default Homescreen;
