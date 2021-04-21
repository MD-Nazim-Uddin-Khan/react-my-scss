import React, { useContext } from 'react';
import { categoryContext } from '../../App';

const CategoryDetail = (props) => {
    // const category = useContext(categoryContext)
    const {name} = props.product
    return (
        <div>
            <h3>Your Category Details</h3>
            {/* <h4>Selected Product : {category}</h4> */}
            <h4>Selected Product : {name}</h4>
        </div>
    );
};

export default CategoryDetail;