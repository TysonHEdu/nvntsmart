"use client";
import React from 'react';

const Homescreen = () => {
    const handleInventoryClick = () => {
        window.location.href = '/inventory';
    };
    const handleProfitClick = () => {
        window.location.href = '/profitForecaster';
    }

    return (
        <div className="homescreen" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div>
                <h1>Welcome to the Desktop App</h1>
                <p>This is the homescreen of the app.</p>
                {/* Add more components or content here */}
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <button style={{ width: '150px', height: '50px', borderRadius: '10px', marginRight: '10px' }} onClick={handleInventoryClick}>Inventory</button>
                    <button style={{ width: '150px', height: '50px', borderRadius: '10px', marginLeft: '10px' }} onClick={handleProfitClick}>Profit Forecaster</button>
                    <button style={{ width: '150px', height: '50px', borderRadius: '10px', marginLeft: '10px' }}>Recipe Builder</button>
                    <button style={{ width: '150px', height: '50px', borderRadius: '10px', marginLeft: '10px' }}>Alt Spreadsheet</button>
                </div>
            </div>
        </div>
    );
};

export default Homescreen;
