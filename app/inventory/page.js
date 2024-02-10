import React from 'react';

const FoodTable = () => {
    const foodData = [
        { name: 'Apple', category: 'Fruit', price: 1.99 },
        { name: 'Banana', category: 'Fruit', price: 0.99 },
        { name: 'Carrot', category: 'Vegetable', price: 0.49 },
        { name: 'Chicken', category: 'Meat', price: 4.99 },
        { name: 'Salmon', category: 'Fish', price: 7.99 },
    ];

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <table style={{ border: '1px solid black' }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {foodData.map((food, index) => (
                        <tr key={index}>
                            <td>{food.name}</td>
                            <td>{food.category}</td>
                            <td>{food.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FoodTable;
