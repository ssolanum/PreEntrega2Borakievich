import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './ItemDetailContainer';

const mockProducts = [
    { id: 1, category: 'dogs', name: 'Chew Toy', price: '$5.00' },
    { id: 2, category: 'cats', name: 'Scratching Post', price: '$15.00' },
    { id: 3, category: 'birds', name: 'Bird Feeder', price: '$10.00' },
    { id: 4, category: 'dogs', name: 'Rope Toy', price: '$8.00' },
];

function ItemListContainer() {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
    const filteredProducts = categoryId
        ? mockProducts.filter((product) => product.category === categoryId)
        : mockProducts;
    setProducts(filteredProducts);
    }, [categoryId]);

    return (
    <div className="item-list-container">
        <h2>{categoryId ? `Category: ${categoryId}` : 'All Products'}</h2>
        <ul className="product-list">
        {products.map((product) => (
            <li key={product.id} className="product-item">
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <img src="" alt={product.name} /> {/* Add product image here */}
            <Link to={`/item/${product.id}`}>View Details</Link>
            </li>
        ))}
        </ul>
    </div>
    );
}

export default ItemListContainer;