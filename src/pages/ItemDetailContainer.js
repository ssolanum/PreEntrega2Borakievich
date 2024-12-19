import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ItemListContainer';

const mockProducts = [
    { id: 1, category: 'dogs', name: 'Chew Toy', price: '$5.00', description: 'Durable chew toy for dogs.' },
    { id: 2, category: 'cats', name: 'Scratching Post', price: '$15.00', description: 'Perfect scratching post for cats.' },
    { id: 3, category: 'birds', name: 'Bird Feeder', price: '$10.00', description: 'Bird feeder to attract colorful birds.' },
    { id: 4, category: 'dogs', name: 'Rope Toy', price: '$8.00', description: 'Strong rope toy for tugging games.' },
];

function ItemDetailContainer() {
    const { itemId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
    const selectedProduct = mockProducts.find((product) => product.id === parseInt(itemId));
    setProduct(selectedProduct);
    }, [itemId]);

    if (!product) {
    return <p>Loading...</p>;
    }

    return (
    <div className="item-detail-container">
        <h2>{product.name}</h2>
        <p>{product.price}</p>
        <p>{product.description}</p>
      <img src="" alt={product.name} /> {/* Add product image here */}
    </div>
    );
}

export default ItemDetailContainer;