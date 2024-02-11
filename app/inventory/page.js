import React from 'react';

const FoodTable = () => {
    const foodData = [
        { name: 'Apple', category: 'Fruit', price: 1.99, portion: '6', unitA: 'oz', size: '2', unitB: 'kg', supplier: 'Supplier A'},
        { name: 'Banana', category: 'Fruit', price: 0.99, portion: '6', unitA: 'oz', size: '2', unitB: 'kg', supplier: 'Supplier B' },
        { name: 'Carrot', category: 'Vegetable', price: 0.49, portion: '6', unitA: 'oz', size: '2', unitB: 'Case', supplier: 'Supplier A' },
        { name: 'Chicken', category: 'Protein', price: 4.99, portion: '6', unitA: 'oz', size: '2', unitB: 'lbs', supplier: 'Supplier D' },
        { name: 'Salmon', category: 'Protein', price: 7.99, portion: '6', unitA: 'oz', size: '2', unitB: 'Case', supplier: 'Supplier A' },
    ];

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <table style={{ border: '1px solid black' }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Portion</th>
                        <th>Unit</th>
                        <th>Size</th>
                        <th>Unit</th>
                        <th>Supplier</th>
                    </tr>
                </thead>
                <tbody>
                    {foodData.map((food, index) => (
                        <tr key={index}>
                            <td>{food.name}</td>
                            <td>{food.category}</td>
                            <td>{food.price}</td>
                            <td>{food.portion}</td>
                            <td>{food.unitA}</td>
                            <td>{food.size}</td>
                            <td>{food.unitB}</td>
                            <td>{food.supplier}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FoodTable;
