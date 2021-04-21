import React, { useContext } from 'react';
import { categoryContext } from '../../App';

const Shipment = () => {
    const [category, setCategory] = useContext(categoryContext)
    return (
        <div>
            <h1>This is Shipment : {category}</h1>
            <button onClick={() => setCategory(category + 1)}> Increment from category</button>
            <button onClick={() => setCategory(category - 1)}>deIncrement from category</button>
        </div>
    );
};

export default Shipment;