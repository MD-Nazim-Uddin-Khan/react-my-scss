import React, { useContext } from 'react';
import { categoryContext } from '../../App';

const Header = () => {
    const [category, setCategory] = useContext(categoryContext);
    return (
        <div>
            <h1>This is Header : {category}</h1>
            {/* <button onClick={() => setCategory(category + 1)} >Increment</button>
            <button onClick={() => setCategory(category - 1)} >deIncrement</button> */}
            <button onClick={() => setCategory('Laptop')} >Laptop</button>
            <button onClick={() => setCategory('Mobile')} >Mobile</button>
            <button onClick={() => setCategory('Camera')} >Camera</button>

        </div>
    );
};

export default Header;