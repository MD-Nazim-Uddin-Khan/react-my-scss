import React, { useContext, useEffect, useState } from 'react';
import { categoryContext } from '../../App';
import CategoryDetail from '../CategoryDetail/CategoryDetail';

const allProducts = [
    {name: 'Lenovo', category: 'Laptop'}, {name: 'Asus', category: 'Laptop'}, {name: 'hp', category: 'Laptop'},
    {name: 'Samsung', category: 'mobile'}, {name: 'Nokia', category: 'mobile'}, {name: 'Apple', category: 'mobile'},
    {name: 'Canon', category: 'camera'}, {name: 'Nokkon', category: 'camera'}, {name: 'Sony', category: 'camera'}]

const Categories = () => {
    const [category] = useContext(categoryContext)
    const [products, setProduct] = useState([])
    useEffect(() => {
        const matchedProducts = allProducts.filter(pd => pd.category.toLowerCase() ===  category.toLowerCase());
        setProduct(matchedProducts);
    }, [category])
    return (
        <div>
            <h2>Select your Category : {category}</h2>
            {
                products.map(pd => <CategoryDetail product={pd}></CategoryDetail>)
            }
        </div>
    );
};

export default Categories;