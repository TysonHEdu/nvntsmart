"use client";
import React from 'react';

const Homescreen = () => {
    const handleInventoryItemClick = () => {
        window.location.href = '/inventoryitem';
    };
    const handleMenuCostingClick = () => {
        window.location.href = '/menucosting';
    }
    const handleRecipeBuilderClick = () => {
        window.location.href = '/recipebuilder';
    }
    const handleInventoryControlClick = () => {
        window.location.href = '/inventorycontrol';
    }

    return (
        <div className="homescreen" style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', height: '100vh' }}>
            <div>
                {/* Add more components or content here */}
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <button style={{ width: '150px', height: '50px', borderRadius: '10px', marginRight: '10px', border: '1px solid gray', backgroundColor: 'gray' }} onClick={handleInventoryItemClick}>Inventory Item</button>
                    <button style={{ width: '150px', height: '50px', borderRadius: '10px', marginLeft: '10px', border: '1px solid gray', backgroundColor: 'gray' }} onClick={handleMenuCostingClick}>Menu Costing</button>
                    <button style={{ width: '150px', height: '50px', borderRadius: '10px', marginLeft: '10px', border: '1px solid gray', backgroundColor: 'gray' }} onClick={handleRecipeBuilderClick}>Recipe Builder</button>
                    <button style={{ width: '150px', height: '50px', borderRadius: '10px', marginLeft: '10px', border: '1px solid gray', backgroundColor: 'gray' }} onClick={handleInventoryControlClick}>Inventory Control </button>
                </div>
            </div>
        </div>
    );
};

export default Homescreen;
