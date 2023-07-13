import React from 'react';
import prd1 from './prd1.jpeg';
import prd2 from './prd2.jpeg';
import prd3 from './prd3.jpeg';

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      title: 'Product 1',
      description: 'Product 1 description',
      price: 9.99,
      image: prd1,
    },
    {
      id: 2,
      title: 'Product 2',
      description: 'Product 2 description',
      price: 19.99,
      image: prd2,
    },
    {
      id: 3,
      title: 'Product 3',
      description: 'Product 3 description',
      price: 29.99,
      image: prd3,
    },
    // Add more products here
  ];

  return (
    <div style={styles.container}>
      {products.map((product) => (
        <div key={product.id} style={styles.productContainer}>
          <img style={styles.image} src={product.image} alt={product.title} />
          <h2 style={styles.title}>{product.title}</h2>
          <p style={styles.description}>{product.description}</p>
          <p style={styles.price}>${product.price.toFixed(2)}</p>
          <button style={styles.button}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
  },
  productContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid #ccc',
    padding: '10px',
    borderRadius: '5px',
  },
  image: {
    height: '200px',
    marginBottom: '10px',
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  description: {
    fontSize: '14px',
    marginBottom: '10px',
  },
  price: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  button: {
    padding: '10px',
    background: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default ProductGrid;
